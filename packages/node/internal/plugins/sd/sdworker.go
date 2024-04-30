package sd

import (
	"bytes"
	"context"
	"encoding/json"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins/sd/sdcli"
	"github.com/stellar/go/support/errors"
	"github.com/stellar/go/support/log"
	"io"
	"net/http"
	"os"
	"time"
)

type Config struct {
	Logger *log.Entry
}

func MustNew(cfg Config) plugins.IWorker {
	sdURL := os.Getenv("SD_URL")
	if sdURL == "" {
		sdURL = "https://localhost.magicwand.so"
	}
	sdCli, err := sdcli.New(sdURL)
	if err != nil {
		cfg.Logger.Panicf("failed to create adcli")
		panic("failed to create adcli")
	}
	return &Worker{
		sdCli:  sdCli,
		logger: cfg.Logger,
		sdURL:  sdURL,
	}
}

type Worker struct {
	gpuProvider *plugins.GPUProvider
	sdCli       *sdcli.ClientWrapper
	logger      *log.Entry
	sdURL       string
}

func (w *Worker) CoinSymbol() plugins.CoinSymbol {
	return plugins.SD
}

func (w *Worker) SysInfo() *plugins.GPUProvider {
	return w.checkAndUpdateGPUProvider(context.Background())
}

var allowedPath = []string{
	"/sdapi/v1/txt2img",
	"/sdapi/v1/img2img",
	"/controlnet/detect",
}

// Function to check if a path is allowed
func checkPath(path string) error {
	// Iterate over the slice of allowed paths
	for _, p := range allowedPath {
		if path == p {
			return nil // Return no error if the path is found
		}
	}
	// If the path is not found in the allowed paths, return an error
	return errors.Errorf("path '%s' is not allowed", path)
}

// TaskPayload struct definition with JSON tags for unmarshalling
type TaskPayload struct {
	Path string          `json:"path"`
	Body json.RawMessage `json:"body"`
}

func (w *Worker) ExecuteTask(payload json.RawMessage) (json.RawMessage, error) {
	// Unmarshal the JSON into the TaskPayload struct
	var taskPayload TaskPayload
	if err := json.Unmarshal(payload, &taskPayload); err != nil {
		return nil, errors.Errorf("error unmarshalling payload: %s", err)
	}

	if err := checkPath(taskPayload.Path); err != nil {
		return nil, err
	}

	// Construct the request URL
	url := w.sdURL + taskPayload.Path

	// Create a new HTTP request with the method, URL, and body provided in TaskPayload
	req, err := http.NewRequest("POST", url, bytes.NewReader(taskPayload.Body))
	if err != nil {
		return nil, errors.Errorf("error creating request: %s", err)
	}

	// Set headers as needed, for example, Content-Type for JSON
	req.Header.Set("Content-Type", "application/json")

	// Perform the HTTP request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, errors.Errorf("error making HTTP request: %s", err)
	}
	defer resp.Body.Close()

	// Optionally read the response body
	responseBody, err := io.ReadAll(resp.Body)
	if err != nil {
		w.logger.WithError(err).Error("failed to ExecuteTask for sd")
		return nil, errors.Errorf("error reading response body: %s", err)
	}

	return responseBody, nil
}

// checkAndUpdateGPUProvider checks if the gpuProviderUpdatedAt is older than 5 minutes, and calls getGPUProvider if it is.
func (w *Worker) checkAndUpdateGPUProvider(ctx context.Context) *plugins.GPUProvider {
	if w.gpuProvider == nil || time.Since(w.gpuProvider.UpdatedAt) > 5*time.Minute {
		ctx, cancel := context.WithTimeout(ctx, time.Second*5)
		defer cancel()
		resp, err := w.sdCli.SysInfo(ctx)
		if err != nil {
			w.logger.WithError(err).Error("failed to get sys info from sd")
			return nil
		}

		createdAt := time.Now()
		if w.gpuProvider != nil {
			createdAt = w.gpuProvider.CreatedAt
		}

		addr := os.Getenv("WALLET_ADDRESS")
		if addr == "" {
			// TODO: pad for now
			addr = "0x4847b796EF3122108306bA1e5d78D1d275d7A6A1"
		}
		w.gpuProvider = &plugins.GPUProvider{
			WalletAddress:   addr,
			Platform:        resp.Platform,
			Python:          resp.Python,
			Version:         resp.Version,
			Commit:          resp.Commit,
			Checksum:        resp.Checksum,
			OS:              resp.TorchEnvInfo.OS,
			NvidiaGPUModles: resp.TorchEnvInfo.NvidiaGPUModels,
			CPU:             resp.CPU,
			RAM:             resp.RAM,
			CreatedAt:       createdAt,
			UpdatedAt:       time.Now(),
		}
	}
	return w.gpuProvider
}
