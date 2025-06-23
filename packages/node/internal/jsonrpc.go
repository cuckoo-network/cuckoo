package internal

import (
	"context"
	"encoding/json"
	"github.com/creachadair/jrpc2"
	"github.com/creachadair/jrpc2/handler"
	"github.com/creachadair/jrpc2/jhttp"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/methods"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/network"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/rewards"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/staking"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/store"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/go-chi/chi/middleware"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/rs/cors"
	"github.com/stellar/go/support/log"
	"google.golang.org/grpc/metadata"
	"io"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"
)

const rpcURL = "https://mainnet-rpc.cuckoo.network"

type HandlerParams struct {
	Logger    *log.Entry
	TaskStore *store.InMemoryTaskStore
	Worker    plugins.IWorker
}

type HandlerCfg struct {
	methodName           string
	underlyingHandler    jrpc2.Handler
	queueLimit           uint
	longName             string
	requestDurationLimit time.Duration
}

type paramsAndHeaders struct {
	Headers metadata.MD     `json:"headers,omitempty"`
	Params  json.RawMessage `json:"params"`
}

func headersToMetadata(r *http.Request) metadata.MD {
	headersMap := make(map[string]string)

	for _, header := range []string{"Authorization", "X-Forwarded-For", "x-ip"} {
		canonicalHeader := http.CanonicalHeaderKey(header)
		if v, ok := r.Header[canonicalHeader]; ok {
			if len(v) > 0 {
				headersMap[strings.ToLower(canonicalHeader)] = v[0]
			}
		}
	}

	return metadata.New(headersMap)
}

// maxHTTPRequestSize defines the largest request size that the http handler
// would be willing to accept before dropping the request. The implementation
// uses the default MaxBytesHandler to limit the request size.
const maxHTTPRequestSize = 20 * 1024 * 1024 // 20 megabyte

type Cfg struct {
	RequestBacklogGlobalQueueLimit   int
	RequestExecutionWarningThreshold time.Duration
	MaxRequestExecutionDuration      time.Duration
	MaxOfferTaskExecutionDuration    time.Duration
}

var (
	cfg = Cfg{
		RequestBacklogGlobalQueueLimit:   5000,
		RequestExecutionWarningThreshold: 5 * time.Second,
		MaxRequestExecutionDuration:      5 * time.Minute, // sync task may take super long time
		MaxOfferTaskExecutionDuration:    store.TaskTTL,
	}
)

// Handler is the HTTP handler which serves the Soroban JSON RPC responses
type Handler struct {
	bridge jhttp.Bridge
	logger *log.Entry
	http.Handler
}

func logRequest(logger *log.Entry, reqID string, req *jrpc2.Request) {
	logger = logger.WithFields(log.F{
		"subsys":   "jsonrpc",
		"req":      reqID,
		"json_req": req.ID(),
		"method":   req.Method(),
	})
	logger.Info("starting JSONRPC request")

	// Params are useful but can be really verbose, let's only print them in debug level
	logger = logger.WithField("params", req.ParamString())
	logger.Debug("starting JSONRPC request params")
}

func logResponse(logger *log.Entry, reqID string, duration time.Duration, status string, response any) {
	logger = logger.WithFields(log.F{
		"subsys":   "jsonrpc",
		"req":      reqID,
		"duration": duration.String(),
		"json_req": reqID,
		"status":   status,
	})
	logger.Info("finished JSONRPC request")

	if status == "ok" {
		responseBytes, err := json.Marshal(response)
		if err == nil {
			// the result is useful but can be really verbose, let's only print it with debug level
			logger = logger.WithField("result", string(responseBytes))
			logger.Debug("finished JSONRPC request result")
		}
	}
}

// NewJSONRPCHandler constructs a Handler instance
func NewJSONRPCHandler(params HandlerParams) Handler {
	taskStore := params.TaskStore
	// GPU provider store automatically cleans up outdated entries whenever
	// providers are listed via ListGPUProviders.
	gps := store.NewGPUProviderStore()
	ethC, err := ethclient.Dial(rpcURL)
	if err != nil {
		params.Logger.WithError(err).Error("failed to initiate eth client")
	}
	stk, err := staking.NewStaking(params.Logger, ethC)
	if err != nil {
		params.Logger.WithError(err).Error("failed to NewStaking")
	}
	ethPrivateKey := os.Getenv("ETH_PRIVATE_KEY")
	if ethPrivateKey != "" {
		params.Logger.Info("ETH_PRIVATE_KEY already set in the environment variables")
	}
	rwd, err := rewards.NewRewarder(ethC, ethPrivateKey)
	if err != nil {
		params.Logger.WithError(err).Error("failed to NewRewarder")
	}

	bridgeOptions := jhttp.BridgeOptions{
		Server: &jrpc2.ServerOptions{
			Logger: func(text string) { params.Logger.Debug(text) },
		},

		ParseRequest: func(req *http.Request) ([]*jrpc2.ParsedRequest, error) {
			body, err := io.ReadAll(req.Body)
			if err != nil {
				return nil, err
			}

			prs, err := jrpc2.ParseRequests(body)
			if err != nil {
				return nil, err
			}

			// Decorate the incoming request parameters with the headers.
			for _, pr := range prs {
				// TODO(lark): if there is no params then there won't be headers neither
				if pr.Params == nil {
					continue
				}
				w, err := json.Marshal(paramsAndHeaders{
					Headers: headersToMetadata(req),
					Params:  pr.Params,
				})
				if err != nil {
					return nil, err
				}
				pr.Params = w
			}
			return prs, nil
		},
	}
	sharedHandlers := []HandlerCfg{
		{
			methodName:           "reward",
			underlyingHandler:    methods.NewRewardHandler(gps, rwd, stk),
			longName:             "reward",
			queueLimit:           uint(1000),
			requestDurationLimit: 5 * time.Minute,
		},
		{
			methodName:           "getHealth",
			underlyingHandler:    methods.NewHealthCheck(),
			longName:             "get_health",
			queueLimit:           uint(1000),
			requestDurationLimit: 5 * time.Second,
		},
		{
			methodName:           "listGPUProviders",
			underlyingHandler:    methods.ListGPUProviders(gps, stk, params.Worker),
			longName:             "list_gpu_providers",
			queueLimit:           uint(1000),
			requestDurationLimit: 5 * time.Second,
		},
		{
			methodName:           "offerTask",
			underlyingHandler:    methods.OfferTask(taskStore, params.Worker),
			longName:             "offer_task",
			queueLimit:           uint(1000),
			requestDurationLimit: cfg.MaxOfferTaskExecutionDuration, // sync task may take super long time
		},
	}

	coordinatorHandlers := []HandlerCfg{
		{
			methodName:           "listPendingTasks",
			underlyingHandler:    methods.ListPendingTasks(taskStore, gps, stk),
			longName:             "list_pending_tasks",
			queueLimit:           uint(1000),
			requestDurationLimit: 5 * time.Second,
		},
		{
			methodName:           "submitTaskResult",
			underlyingHandler:    methods.SubmitTaskResult(taskStore, params.Logger),
			longName:             "submit_task_result",
			queueLimit:           uint(1000),
			requestDurationLimit: cfg.MaxOfferTaskExecutionDuration, // sync task may take super long time
		},
		{
			methodName:           "offerTask",
			underlyingHandler:    methods.OfferTask(taskStore, params.Worker),
			longName:             "offer_task",
			queueLimit:           uint(1000),
			requestDurationLimit: cfg.MaxOfferTaskExecutionDuration, // sync task may take super long time
		},
		{
			methodName:           "submitTaskResult",
			underlyingHandler:    methods.SubmitTaskResult(taskStore, params.Logger),
			longName:             "submit_task_result",
			queueLimit:           uint(1000),
			requestDurationLimit: cfg.MaxOfferTaskExecutionDuration, // sync task may take super long time
		},
	}

	if os.Getenv("NODE_TYPE") == "COORDINATOR" {
		sharedHandlers = append(sharedHandlers, coordinatorHandlers...)
	}

	handlersMap := handler.Map{}
	for _, handler := range sharedHandlers {
		queueLimiterGaugeName := handler.longName + "_inflight_requests"
		queueLimiterGaugeHelp := "Number of concurrenty in-flight " + handler.methodName + " requests"

		queueLimiterGauge := prometheus.NewGauge(prometheus.GaugeOpts{
			Namespace: "params.Daemon.MetricsNamespace()", Subsystem: "network",
			Name: queueLimiterGaugeName,
			Help: queueLimiterGaugeHelp,
		})
		queueLimiter := network.MakeJrpcBacklogQueueLimiter(
			handler.underlyingHandler,
			queueLimiterGauge,
			uint64(handler.queueLimit),
			params.Logger)

		durationWarnCounterName := handler.longName + "_execution_threshold_warning"
		durationLimitCounterName := handler.longName + "_execution_threshold_limit"
		durationWarnCounterHelp := "The metric measures the count of " + handler.methodName + " requests that surpassed the warning threshold for execution time"
		durationLimitCounterHelp := "The metric measures the count of " + handler.methodName + " requests that surpassed the limit threshold for execution time"

		requestDurationWarnCounter := prometheus.NewCounter(prometheus.CounterOpts{
			Namespace: "params.Daemon.MetricsNamespace()", Subsystem: "network",
			Name: durationWarnCounterName,
			Help: durationWarnCounterHelp,
		})
		requestDurationLimitCounter := prometheus.NewCounter(prometheus.CounterOpts{
			Namespace: "params.Daemon.MetricsNamespace()", Subsystem: "network",
			Name: durationLimitCounterName,
			Help: durationLimitCounterHelp,
		})
		// set the warning threshold to be one third of the limit.
		requestDurationWarn := handler.requestDurationLimit / 3
		durationLimiter := network.MakeJrpcRequestDurationLimiter(
			queueLimiter.Handle,
			requestDurationWarn,
			handler.requestDurationLimit,
			requestDurationWarnCounter,
			requestDurationLimitCounter,
			params.Logger)
		handlersMap[handler.methodName] = durationLimiter.Handle
	}
	bridge := jhttp.NewBridge(decorateHandlers(
		params.Logger,
		handlersMap),
		&bridgeOptions)
	// globalQueueRequestBacklogLimiter is a metric for measuring the total concurrent inflight requests
	globalQueueRequestBacklogLimiter := prometheus.NewGauge(prometheus.GaugeOpts{
		Namespace: "params.Daemon.MetricsNamespace()", Subsystem: "network", Name: "global_inflight_requests",
		Help: "Number of concurrenty in-flight http requests",
	})

	queueLimitedBridge := network.MakeHTTPBacklogQueueLimiter(
		bridge,
		globalQueueRequestBacklogLimiter,
		uint64(cfg.RequestBacklogGlobalQueueLimit),
		params.Logger)
	globalQueueRequestExecutionDurationWarningCounter := prometheus.NewCounter(prometheus.CounterOpts{
		Namespace: "params.Daemon.MetricsNamespace()", Subsystem: "network", Name: "global_request_execution_duration_threshold_warning",
		Help: "The metric measures the count of requests that surpassed the warning threshold for execution time",
	})
	globalQueueRequestExecutionDurationLimitCounter := prometheus.NewCounter(prometheus.CounterOpts{
		Namespace: "params.Daemon.MetricsNamespace()", Subsystem: "network", Name: "global_request_execution_duration_threshold_limit",
		Help: "The metric measures the count of requests that surpassed the limit threshold for execution time",
	})
	var handler http.Handler = network.MakeHTTPRequestDurationLimiter(
		queueLimitedBridge,
		cfg.RequestExecutionWarningThreshold,
		cfg.MaxRequestExecutionDuration,
		globalQueueRequestExecutionDurationWarningCounter,
		globalQueueRequestExecutionDurationLimitCounter,
		params.Logger)

	handler = http.MaxBytesHandler(handler, maxHTTPRequestSize)

	corsMiddleware := cors.New(cors.Options{
		AllowedOrigins:         []string{},
		AllowOriginRequestFunc: func(*http.Request, string) bool { return true },
		AllowedHeaders:         []string{"*"},
		AllowedMethods:         []string{"GET", "PUT", "POST", "PATCH", "DELETE", "HEAD", "OPTIONS"},
	})

	return Handler{
		bridge: bridge,
		logger: params.Logger,
		Handler: corsMiddleware.Handler(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			r.Header.Add("x-ip", r.Header.Get("X-Forwarded-For"))
			handler.ServeHTTP(w, r)
		})),
	}
}

func decorateHandlers(logger *log.Entry, m handler.Map) handler.Map {
	requestMetric := prometheus.NewSummaryVec(prometheus.SummaryOpts{
		Namespace:  "cuckoo_node",
		Subsystem:  "json_rpc",
		Name:       "request_duration_seconds",
		Help:       "JSON RPC request duration",
		Objectives: map[float64]float64{0.5: 0.05, 0.9: 0.01, 0.99: 0.001},
	}, []string{"endpoint", "status"})
	decorated := handler.Map{}
	for endpoint, h := range m {
		// create copy of h so it can be used in closure bleow
		h := h
		decorated[endpoint] = handler.New(func(ctx context.Context, r *jrpc2.Request) (interface{}, error) {
			reqID := strconv.FormatUint(middleware.NextRequestID(), 10)
			logRequest(logger, reqID, r)
			startTime := time.Now()
			result, err := h(ctx, r)
			duration := time.Since(startTime)
			label := prometheus.Labels{"endpoint": r.Method(), "status": "ok"}
			if jsonRPCErr, ok := err.(*jrpc2.Error); ok {
				prometheusLabelReplacer := strings.NewReplacer(" ", "_", "-", "_", "(", "", ")", "")
				status := prometheusLabelReplacer.Replace(jsonRPCErr.Code.String())
				label["status"] = status
			}
			requestMetric.With(label).Observe(duration.Seconds())
			logResponse(logger, reqID, duration, label["status"], result)
			return result, err
		})
	}
	return decorated
}
