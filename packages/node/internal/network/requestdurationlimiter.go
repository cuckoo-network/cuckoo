package network

import (
	"context"
	"fmt"
	"github.com/creachadair/jrpc2"
	"github.com/stellar/go/support/log"
	"net/http"
	"reflect"
	"runtime"
	"runtime/debug"
	"strings"
	"time"
)

const maxUint = ^uint64(0)         //18446744073709551615
const maxInt = int64(maxUint >> 1) // 9223372036854775807
const maxDuration = time.Duration(maxInt)

const RequestDurationLimiterNoLimit = maxDuration

// The increasingCounter is a subset of prometheus.Counter, and it allows us to mock the
// counter usage for testing purposes without requiring the implementation of the true
// prometheus.Counter.
type increasingCounter interface {
	// Inc increments the counter by 1. Use Add to increment it by arbitrary
	// non-negative values.
	Inc()
}

type requestDurationLimiter struct {
	warningThreshold time.Duration
	limitThreshold   time.Duration
	logger           *log.Entry
	warningCounter   increasingCounter
	limitCounter     increasingCounter
}

type httpRequestDurationLimiter struct {
	httpDownstreamHandler http.Handler
	requestDurationLimiter
}

func MakeHTTPRequestDurationLimiter(
	downstream http.Handler,
	warningThreshold time.Duration,
	limitThreshold time.Duration,
	warningCounter increasingCounter,
	limitCounter increasingCounter,
	logger *log.Entry) *httpRequestDurationLimiter {
	// make sure the warning threshold is less then the limit threshold; otherwise, just set it to the limit threshold.
	if warningThreshold > limitThreshold {
		warningThreshold = limitThreshold
	}
	return &httpRequestDurationLimiter{
		httpDownstreamHandler: downstream,
		requestDurationLimiter: requestDurationLimiter{
			warningThreshold: warningThreshold,
			limitThreshold:   limitThreshold,
			logger:           logger,
			warningCounter:   warningCounter,
			limitCounter:     limitCounter,
		},
	}
}

type bufferedResponseWriter struct {
	header     http.Header
	buffer     []byte
	statusCode int
}

func makeBufferedResponseWriter(rw http.ResponseWriter) *bufferedResponseWriter {
	header := rw.Header()
	bw := &bufferedResponseWriter{
		header: make(http.Header, 0),
	}
	for k, v := range header {
		bw.header[k] = v
	}
	return bw
}

func (w *bufferedResponseWriter) Header() http.Header {
	return w.header
}
func (w *bufferedResponseWriter) Write(buf []byte) (int, error) {
	w.buffer = append(w.buffer, buf...)
	return len(buf), nil
}
func (w *bufferedResponseWriter) WriteHeader(statusCode int) {
	w.statusCode = statusCode
}

func (w *bufferedResponseWriter) WriteOut(ctx context.Context, rw http.ResponseWriter) {
	// update the headers map.
	headers := rw.Header()
	for k := range headers {
		delete(headers, k)
	}
	for k, v := range w.header {
		headers[k] = v
	}

	if len(w.buffer) == 0 {
		if w.statusCode != 0 {
			rw.WriteHeader(w.statusCode)
		}
		return
	}
	if w.statusCode != 0 {
		rw.WriteHeader(w.statusCode)
	}

	if ctx.Err() == nil {
		// the following return size/error won't help us much at this point. The request is already finalized.
		rw.Write(w.buffer) //nolint:errcheck
	}
}

func (q *httpRequestDurationLimiter) ServeHTTP(res http.ResponseWriter, req *http.Request) {
	if q.limitThreshold == RequestDurationLimiterNoLimit {
		// if specified max duration, pass-through
		q.httpDownstreamHandler.ServeHTTP(res, req)
		return
	}
	var warningCh <-chan time.Time
	if q.warningThreshold != time.Duration(0) && q.warningThreshold < q.limitThreshold {
		warningCh = time.NewTimer(q.warningThreshold).C
	}
	var limitCh <-chan time.Time
	if q.limitThreshold != time.Duration(0) {
		limitCh = time.NewTimer(q.limitThreshold).C
	}
	requestCompleted := make(chan []string, 1)
	requestCtx, requestCtxCancel := context.WithTimeout(req.Context(), q.limitThreshold)
	defer requestCtxCancel()
	timeLimitedRequest := req.WithContext(requestCtx)
	responseBuffer := makeBufferedResponseWriter(res)
	go func() {
		defer func() {
			if err := recover(); err != nil {
				functionName := runtime.FuncForPC(reflect.ValueOf(q.httpDownstreamHandler.ServeHTTP).Pointer()).Name()
				callStack := CallStack(err, functionName, "(*httpRequestDurationLimiter).ServeHTTP.func1()", 8)
				requestCompleted <- callStack
			} else {
				close(requestCompleted)
			}
		}()
		q.httpDownstreamHandler.ServeHTTP(responseBuffer, timeLimitedRequest)
	}()

	warn := false
	for {
		select {
		case <-warningCh:
			// warn
			warn = true
		case <-limitCh:
			// limit
			requestCtxCancel()
			if q.limitCounter != nil {
				q.limitCounter.Inc()
			}
			if q.logger != nil {
				q.logger.Infof("Request processing for %s exceed limiting threshold of %v", req.URL.Path, q.limitThreshold)
			}
			if req.Context().Err() == nil {
				res.WriteHeader(http.StatusGatewayTimeout)
			}
			return
		case errStrings := <-requestCompleted:
			if warn {
				if q.warningCounter != nil {
					q.warningCounter.Inc()
				}
				if q.logger != nil {
					q.logger.Infof("Request processing for %s exceed warning threshold of %v", req.URL.Path, q.warningThreshold)
				}
			}
			if len(errStrings) == 0 {
				responseBuffer.WriteOut(req.Context(), res)
			} else {
				res.WriteHeader(http.StatusInternalServerError)
				for _, errStr := range errStrings {
					if q.logger != nil {
						q.logger.Warn(errStr)
					}
				}
			}
			return
		}
	}
}

type rpcRequestDurationLimiter struct {
	jrpcDownstreamHandler jrpc2.Handler
	requestDurationLimiter
}

func MakeJrpcRequestDurationLimiter(
	downstream jrpc2.Handler,
	warningThreshold time.Duration,
	limitThreshold time.Duration,
	warningCounter increasingCounter,
	limitCounter increasingCounter,
	logger *log.Entry) *rpcRequestDurationLimiter {
	// make sure the warning threshold is less then the limit threshold; otherwise, just set it to the limit threshold.
	if warningThreshold > limitThreshold {
		warningThreshold = limitThreshold
	}

	return &rpcRequestDurationLimiter{
		jrpcDownstreamHandler: downstream,
		requestDurationLimiter: requestDurationLimiter{
			warningThreshold: warningThreshold,
			limitThreshold:   limitThreshold,
			logger:           logger,
			warningCounter:   warningCounter,
			limitCounter:     limitCounter,
		},
	}
}

func (q *rpcRequestDurationLimiter) Handle(ctx context.Context, req *jrpc2.Request) (interface{}, error) {
	if q.limitThreshold == RequestDurationLimiterNoLimit {
		// if specified max duration, pass-through
		return q.jrpcDownstreamHandler(ctx, req)
	}
	var warningCh <-chan time.Time
	if q.warningThreshold != time.Duration(0) && q.warningThreshold < q.limitThreshold {
		warningCh = time.NewTimer(q.warningThreshold).C
	}
	var limitCh <-chan time.Time
	if q.limitThreshold != time.Duration(0) {
		limitCh = time.NewTimer(q.limitThreshold).C
	}
	type requestResultOutput struct {
		data interface{}
		err  error
	}
	requestCompleted := make(chan requestResultOutput, 1)
	requestCtx, requestCtxCancel := context.WithTimeout(ctx, q.limitThreshold)
	defer requestCtxCancel()

	go func() {
		defer func() {
			if err := recover(); err != nil {
				q.logger.Errorf("Request for method %s resulted in an error : %v", req.Method(), err)
			}
			close(requestCompleted)
		}()
		var res requestResultOutput
		res.data, res.err = q.jrpcDownstreamHandler(requestCtx, req)
		requestCompleted <- res
	}()

	warn := false
	for {
		select {
		case <-warningCh:
			// warn
			warn = true
		case <-limitCh:
			// limit
			requestCtxCancel()
			if q.limitCounter != nil {
				q.limitCounter.Inc()
			}
			if q.logger != nil {
				q.logger.Infof("Request processing for %s exceed limiting threshold of %v", req.Method(), q.limitThreshold)
			}
			if ctxErr := ctx.Err(); ctxErr == nil {
				return nil, ErrRequestExceededProcessingLimitThreshold
			} else {
				return nil, ctxErr
			}
		case requestRes, ok := <-requestCompleted:
			if warn {
				if q.warningCounter != nil {
					q.warningCounter.Inc()
				}
				if q.logger != nil {
					q.logger.Infof("Request processing for %s exceed warning threshold of %v", req.Method(), q.warningThreshold)
				}
			}
			if ok {
				return requestRes.data, requestRes.err
			} else {
				// request panicked ?
				return nil, ErrFailToProcessDueToInternalIssue
			}
		}
	}
}

var ErrRequestExceededProcessingLimitThreshold = jrpc2.Error{
	Code:    -32001,
	Message: "request exceeded processing limit threshold",
}

var ErrFailToProcessDueToInternalIssue = jrpc2.Error{
	Code:    -32003, // internal error
	Message: "request failed to process due to internal issue",
}

// CallStack returns an array of strings representing the current call stack. The method is
// tuned for the purpose of panic handler, and used as a helper in contructing the list of entries we want
// to write to the log / stderr / telemetry.
func CallStack(recoverRes any, topLevelFunctionName string, lastCallstackMethod string, unwindStackLines int) (callStack []string) {
	if topLevelFunctionName != "" {
		callStack = append(callStack, fmt.Sprintf("%v when calling %v", recoverRes, topLevelFunctionName))
	} else {
		callStack = append(callStack, fmt.Sprintf("%v", recoverRes))
	}
	// while we're within the recoverRoutine, the debug.Stack() would return the
	// call stack where the panic took place.
	callStackStrings := string(debug.Stack())
	for i, callStackLine := range strings.FieldsFunc(callStackStrings, func(r rune) bool { return r == '\n' || r == '\t' }) {
		// skip the first (unwindStackLines) entries, since these are the "debug.Stack()" entries, which aren't really useful.
		if i < unwindStackLines {
			continue
		}
		callStack = append(callStack, callStackLine)
		// once we reached the limiter entry, stop.
		if strings.Contains(callStackLine, lastCallstackMethod) {
			break
		}
	}
	return callStack
}
