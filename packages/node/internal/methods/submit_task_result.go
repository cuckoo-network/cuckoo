package methods

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/creachadair/jrpc2"
	"github.com/creachadair/jrpc2/handler"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins"
	s "github.com/cuckoo-network/cuckoo/packages/node/internal/store"
	"github.com/stellar/go/support/log"
	"google.golang.org/grpc/metadata"
)

type SubmitTaskResultRequest struct {
	Id         string             `json:"id"`
	CoinSymbol plugins.CoinSymbol `json:"coinSymbol"`
	Status     s.TaskStatus       `json:"status"`
	Payload    json.RawMessage    `json:"payload"`
}

func (r SubmitTaskResultRequest) MarshalJSON() ([]byte, error) {
	type Alias SubmitTaskResultRequest
	return json.Marshal(&struct {
		CoinSymbol string `json:"coinSymbol"`
		Status     string `json:"status"`
		*Alias
	}{
		CoinSymbol: r.CoinSymbol.String(), // Assuming CoinSymbol also has a String method
		Status:     r.Status.String(),
		Alias:      (*Alias)(&r),
	})
}

func (r *SubmitTaskResultRequest) UnmarshalJSON(data []byte) error {
	type Alias SubmitTaskResultRequest
	aux := &struct {
		CoinSymbol string `json:"coinSymbol"`
		Status     string `json:"status"`
		*Alias
	}{
		Alias: (*Alias)(r),
	}
	if err := json.Unmarshal(data, &aux); err != nil {
		return err
	}

	// Convert CoinSymbol from string
	var err error
	r.CoinSymbol = plugins.CoinSymbolFromString(aux.CoinSymbol)
	if err != nil {
		return fmt.Errorf("invalid CoinSymbol: %s", aux.CoinSymbol)
	}

	// Convert Status from string
	r.Status, err = s.TaskStatusFromString(aux.Status)
	if err != nil {
		return fmt.Errorf("invalid TaskStatus: %s", aux.Status)
	}

	return nil
}

type SubmitTaskResultResult struct {
}

type paramsAndHeaders4 struct {
	Headers metadata.MD               `json:"headers,omitempty"`
	Params  []SubmitTaskResultRequest `json:"params"`
}

func SubmitTaskResult(store *s.InMemoryTaskStore, logger *log.Entry) jrpc2.Handler {
	return handler.New(func(ctx context.Context, request paramsAndHeaders4) (*SubmitTaskResultResult, error) {
		if request.Params[0].CoinSymbol == plugins.SD {
			result := request.Params[0]
			storedTask, err := store.Read(result.Id)
			if err != nil {
				logger.WithError(err).Error("failed to read from task store")
				return nil, jrpc2.Errorf(jrpc2.InvalidParams, "task id %s not recognized", result.Id)
			}

			status := request.Params[0].Status

			if status == s.Completed {
				storedTask.ResultPayloadChan <- result.Payload
			} else if status == s.InProgress {
				storedTask.Status = s.InProgress
				store.Update(storedTask)
			} else {
				return nil, jrpc2.Errorf(jrpc2.InvalidParams, "status type %s not recognized", status)
			}
			return nil, nil
		}

		return nil, jrpc2.Errorf(jrpc2.InvalidParams, "task type %s not recognized", request.Params[0].CoinSymbol)
	})
}
