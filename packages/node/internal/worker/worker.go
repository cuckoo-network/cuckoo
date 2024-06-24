package worker

import (
	"context"
	"encoding/json"
	e "errors"
	"fmt"
	"github.com/cenkalti/backoff/v4"
	nodegen "github.com/cuckoo-network/cuckoo/packages/node/internal/nodecli/gen"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins/sd"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/util"
	"github.com/stellar/go/support/errors"
	"github.com/stellar/go/support/log"
	"math/rand"
	"os"
	"sync"
	"time"
)

var errEmptyTasks = fmt.Errorf("cannot start with empty tasks from content moderator")

type Config struct {
	Logger         *log.Entry
	OnRunTaskRetry backoff.Notify
}

type Service struct {
	logger         *log.Entry
	done           context.CancelFunc
	wg             sync.WaitGroup
	nodeClient     *nodegen.ClientWithResponses
	Worker         plugins.IWorker
	onRunTaskRetry backoff.Notify
}

func NewService(cfg Config) *Service {
	service := newService(cfg)
	return service
}

func newService(cfg Config) *Service {
	coordinatorURL := os.Getenv("COORDINATOR_URL")
	if coordinatorURL == "" {
		coordinatorURL = "https://ai-content-moderator-node.cuckoo.network"
	}
	cli, err := nodegen.NewClientWithResponses(coordinatorURL)
	if err != nil {
		cfg.Logger.WithError(err).Error(`failed to new nodecli`)
	}

	service := &Service{
		logger: cfg.Logger,
		Worker: sd.MustNew(sd.Config{
			Logger: cfg.Logger,
		}),
		nodeClient:     cli,
		onRunTaskRetry: cfg.OnRunTaskRetry,
	}
	return service
}

func (s *Service) claimTask(ctx context.Context, gpu *plugins.GPUProvider) (*nodegen.TaskOffer, error) {
	s.logger.Info("check pending tasks")
	rand.New(rand.NewSource(time.Now().UnixNano()))
	randomInt := rand.Intn(1_000_000_000)
	signed := SignCurrentDate(time.Now())
	lptReq := nodegen.ListPendingTasksJSONRequestBody{
		Id:      randomInt,
		Jsonrpc: "2.0",
		Method:  "listPendingTasks",
		Params: []nodegen.GPUProvider{
			{
				WalletAddress:   signed.Address,
				Sig:             &signed.Sig,
				Platform:        &gpu.Platform,
				Python:          &gpu.Python,
				Version:         &gpu.Version,
				Commit:          &gpu.Commit,
				Checksum:        &gpu.Checksum,
				Os:              &gpu.OS,
				NvidiaGpuModels: gpu.NvidiaGPUModles,
				CPU: &nodegen.CPUInfo{
					CountLogical:  &gpu.CPU.CountLogical,
					CountPhysical: &gpu.CPU.CountPhysical,
					Model:         &gpu.CPU.Model,
				},
				RAM: &nodegen.RAMInfo{
					Active:   &gpu.RAM.Active,
					Buffers:  &gpu.RAM.Buffers,
					Cached:   &gpu.RAM.Cached,
					Free:     &gpu.RAM.Free,
					Inactive: &gpu.RAM.Inactive,
					Shared:   &gpu.RAM.Shared,
					Total:    &gpu.RAM.Total,
					Used:     &gpu.RAM.Used,
				},
			},
		},
	}
	ctx2, cancel2 := context.WithTimeout(ctx, time.Second*5)
	defer cancel2()
	resp, err := s.nodeClient.ListPendingTasksWithResponse(ctx2, lptReq)
	if err != nil {
		return nil, errors.Wrap(err, "failed to ListPendingTasks")
	}
	if resp.JSON200 == nil {
		return nil, errors.Errorf("failed to ListPendingTasks JSON200: %+v", string(resp.Body))
	}
	if resp.JSON200.Error != nil {
		return nil, errors.Errorf("failed to ListPendingTasks JSON200.Error: %s", *resp.JSON200.Error.Message)
	}

	if len(resp.JSON200.Result) == 0 {
		s.logger.Info("no pending tasks")
		return nil, errEmptyTasks
	}

	task := resp.JSON200.Result[0]

	s.logger.Info("change the task status to in progress")
	rand.New(rand.NewSource(time.Now().UnixNano()))
	randomInt = rand.Intn(1_000_000_000)
	status := nodegen.StatusInProgress
	symbol := nodegen.CoinSymbolSD
	ctx3, cancel3 := context.WithTimeout(ctx, time.Second*5)
	defer cancel3()
	submitted, err := s.nodeClient.SubmitTaskResultWithResponse(ctx3, nodegen.SubmitTaskResultJSONRequestBody{
		Id:      randomInt,
		Jsonrpc: "2.0",
		Method:  "submitTaskResult",
		Params: []nodegen.SubmitTaskResultRequest{
			{
				Id:         &task.Id,
				CoinSymbol: &symbol,
				Status:     &status,
			},
		},
	})
	if err != nil {
		return nil, errors.Wrap(err, "failed to SubmitTaskResultWithResponse")
	}
	if submitted.JSON200.Error != nil {
		return nil, errors.Errorf("failed to SubmitTaskResultWithResponse to in progress: (%d) - msg: %s - data: %s", *submitted.JSON200.Error.Code, *submitted.JSON200.Error.Message, *submitted.JSON200.Error.Data)
	}

	return &task, nil
}

func (s *Service) run(ctx context.Context) error {
	s.logger.Info("running worker task")

	gpu, err := s.connectToGPU()
	if err != nil {
		return errors.Wrap(err, "failed to connectToGPU")
	}

	task, err := s.claimTask(ctx, gpu)
	if err != nil {
		return errors.Wrap(err, "failed to claimTask")
	}

	s.logger.Info("start to render")
	jsonBytes, err := json.Marshal(task.Payload)
	if err != nil {
		return errors.Wrap(err, "failed to json.Marshal(task.Payload)")
	}

	res, err := s.Worker.ExecuteTask(jsonBytes)
	if err != nil {
		return errors.Wrap(err, "failed to ExecuteTask")
	}

	var resObj map[string]interface{}
	if err := json.Unmarshal(res, &resObj); err != nil {
		return errors.Wrap(err, "Error unmarshaling json.RawMessage")
	}

	s.logger.Info("submit result")
	rand.New(rand.NewSource(time.Now().UnixNano()))
	randomInt := rand.Intn(1_000_000_000)
	status := nodegen.StatusCompleted
	ctx5, cancel5 := context.WithTimeout(ctx, time.Second*120)
	defer cancel5()
	finalSubmission, err := s.nodeClient.SubmitTaskResultWithResponse(ctx5, nodegen.SubmitTaskResultJSONRequestBody{
		Id:      randomInt,
		Jsonrpc: "2.0",
		Method:  "submitTaskResult",
		Params: []nodegen.SubmitTaskResultRequest{
			{
				Id:         &task.Id,
				Status:     &status,
				CoinSymbol: &task.CoinSymbol,
				Payload:    &resObj,
			},
		},
	})
	if err != nil {
		return errors.Wrap(err, "failed to SubmitTaskResultWithResponse")
	}
	if finalSubmission.JSON200 != nil && finalSubmission.JSON200.Error != nil {
		return errors.Errorf("failed to SubmitTaskResultWithResponse to completed: %+v", *finalSubmission.JSON200.Error.Message)
	}

	s.logger.Infof("submitted")

	return errEmptyTasks
}

func (s *Service) connectToGPU() (*plugins.GPUProvider, error) {
	s.logger.Info("connect to GPU")
	gpu := s.Worker.SysInfo()
	if gpu == nil {
		s.logger.Error("failed to get GPU info")
		return nil, errors.New("failed to get GPU info")
	}
	return gpu, nil
}

func (service *Service) StartPolling() {
	ctx, done := context.WithCancel(context.Background())
	service.done = done
	service.wg.Add(1)
	panicGroup := util.UnrecoverablePanicGroup.Log(service.logger)
	panicGroup.Go(func() {
		defer service.wg.Done()
		// Retry running ingestion every second for 5 seconds.
		constantBackoff := backoff.WithMaxRetries(backoff.NewConstantBackOff(1*time.Second), 5)
		// Don't want to keep retrying if the context gets canceled.
		contextBackoff := backoff.WithContext(constantBackoff, ctx)
		err := backoff.RetryNotify(
			func() error {
				err := service.run(ctx)
				if e.Is(err, errEmptyTasks) {
					// keep retrying until history archives are published
					constantBackoff.Reset()
				} else {
					service.logger.WithError(err).Error("failed to poll tasks")
				}
				return err
			},
			contextBackoff,
			service.onRunTaskRetry)
		if err != nil && !e.Is(err, context.Canceled) {
			service.logger.WithError(err).Fatal("could not run ingestion")
		}
	})
}
