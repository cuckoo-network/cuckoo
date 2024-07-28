package methods

import (
	"context"
	"encoding/json"
	"github.com/creachadair/jrpc2"
	"github.com/creachadair/jrpc2/handler"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/store"
	"github.com/stellar/go/support/errors"
	"google.golang.org/grpc/metadata"
	"math/big"
	"os"
	"time"
)

type OfferTaskRequest struct {
	ID            string             `json:"id"`
	Payload       json.RawMessage    `json:"payload"`
	CoinSymbol    plugins.CoinSymbol `json:"coinSymbol"`
	MaxOfferPrice *big.Int           `json:"maxOfferPrice"`
}

// MarshalJSON customizes JSON output for OfferTaskRequest
func (o OfferTaskRequest) MarshalJSON() ([]byte, error) {
	type Alias OfferTaskRequest
	return json.Marshal(&struct {
		CoinSymbol    string `json:"coinSymbol"`
		MaxOfferPrice string `json:"maxOfferPrice"`
		*Alias
	}{
		CoinSymbol:    o.CoinSymbol.String(),    // Convert CoinSymbol to string
		MaxOfferPrice: o.MaxOfferPrice.String(), // Convert *big.Int to string
		Alias:         (*Alias)(&o),
	})
}

// UnmarshalJSON customizes JSON input for OfferTaskRequest
func (o *OfferTaskRequest) UnmarshalJSON(data []byte) error {
	type Alias OfferTaskRequest
	aux := &struct {
		CoinSymbol    string `json:"coinSymbol"`
		MaxOfferPrice string `json:"maxOfferPrice"`
		*Alias
	}{
		Alias: (*Alias)(o),
	}
	if err := json.Unmarshal(data, aux); err != nil {
		return err
	}

	// Convert string back to *big.Int
	if aux.MaxOfferPrice != "" {
		var ok bool
		o.MaxOfferPrice, ok = big.NewInt(0).SetString(aux.MaxOfferPrice, 10)
		if !ok {
			return errors.Errorf("invalid MaxOfferPrice format")
		}
	}

	// Convert string back to plugins.CoinSymbol
	var err error
	o.CoinSymbol = plugins.CoinSymbolFromString(aux.CoinSymbol)
	if err != nil {
		return errors.Errorf("invalid CoinSymbol format: %s", aux.CoinSymbol)
	}

	return nil
}

type paramsAndHeaders2 struct {
	Headers metadata.MD        `json:"headers,omitempty"`
	Params  []OfferTaskRequest `json:"params"`
}

func OfferTask(ts *store.InMemoryTaskStore, wk plugins.IWorker) jrpc2.Handler {
	return handler.New(func(ctx context.Context, request paramsAndHeaders2) (store.TaskResult, error) {
		nodeType := os.Getenv("NODE_TYPE")
		if nodeType != "COORDINATOR" {
			// local mode
			res, err := wk.ExecuteTask(request.Params[0].Payload)
			return store.TaskResult{Payload: res, Id: request.Params[0].ID, Status: store.Completed}, err
		}

		task := &store.TaskOffer{
			Id:                request.Params[0].ID,
			Status:            store.Pending,
			CoinSymbol:        request.Params[0].CoinSymbol,
			MaxOfferPrice:     request.Params[0].MaxOfferPrice,
			CreatedAt:         time.Now(),
			ResultPayloadChan: make(chan json.RawMessage),

			Payload: request.Params[0].Payload,
		}
		ts.Create(task)

		// Listen for context cancellation in a separate goroutine.
		go func() {
			<-ctx.Done()
			// Context was cancelled, delete the task.
			ts.Delete(task.Id)
		}()

		// This will block until a result is written to the task.ResultPayloadChan channel or
		// until the context is cancelled, in which case we'll return an error.
		select {
		case p := <-task.ResultPayloadChan:
			ts.Delete(task.Id)
			return store.TaskResult{Payload: p, Id: task.Id, Status: store.Completed}, nil
		case <-ctx.Done():
			// The context was cancelled before a result was available.
			// It's possible that the task was already deleted by the goroutine above,
			// but if the cancellation and the task completion happen simultaneously,
			// this ensures we don't leave a dangling task.
			ts.Delete(task.Id)
			return store.TaskResult{}, ctx.Err()
		}
	})
}
