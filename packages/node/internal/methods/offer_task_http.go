package methods

import (
	"context"
	"encoding/json"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/store"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/util"
	"github.com/go-chi/chi"
	"io"
	"net/http"
	"strings"
	"time"
)

type OfferTaskRequestPayload struct {
	Method string          `json:"Method"`
	Path   string          `json:"Path"`
	Body   json.RawMessage `json:"Body"`
}

func OfferTaskHandler(ts *store.InMemoryTaskStore) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		allTheRestSegments := strings.Split(chi.URLParam(r, "*"), "/")

		coinSymbolStr := allTheRestSegments[0]
		coin := plugins.CoinSymbolFromString(strings.ToUpper(coinSymbolStr))
		forwardedURLPath := "/" + strings.Join(allTheRestSegments[1:], "/")

		id := r.Header.Get("X-Id")
		if id == "" {
			id = util.TaskID()
		}
		maxOfferPrice := r.Header.Get("X-Max-Offer-Price")

		// Read and parse the JSON Body
		body, err := io.ReadAll(r.Body)
		if err != nil {
			http.Error(w, "Failed to read request Body", http.StatusBadRequest)
			return
		}
		defer r.Body.Close()

		rp := OfferTaskRequestPayload{
			Method: r.Method,
			Path:   forwardedURLPath,
			Body:   body,
		}
		rpBytes, err := json.Marshal(rp)
		if err != nil {
			http.Error(w, "Failed to marshal offer task request payload", http.StatusBadRequest)
			return
		}

		request := OfferTaskRequest{
			ID:            id,
			Payload:       rpBytes,
			CoinSymbol:    coin,
			MaxOfferPrice: util.NewBigIntFromString(maxOfferPrice),
		}

		// Create a new task based on the headers and parsed Body
		task := &store.TaskOffer{
			Id:                id,
			Status:            store.Pending,
			CoinSymbol:        coin,
			MaxOfferPrice:     util.NewBigIntFromString(maxOfferPrice),
			CreatedAt:         time.Now(),
			ResultPayloadChan: make(chan json.RawMessage),
			Payload:           request.Payload,
		}
		ts.Create(task)

		ctx, cancel := context.WithCancel(context.Background())
		defer cancel()

		go func() {
			<-ctx.Done()
			ts.Delete(task.Id)
		}()

		select {
		case p := <-task.ResultPayloadChan:
			ts.Delete(task.Id)
			result := store.TaskResult{Payload: p, Id: task.Id, Status: store.Completed}
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(result)
		case <-ctx.Done():
			ts.Delete(task.Id)
			http.Error(w, "Request cancelled by the client", http.StatusRequestTimeout)
		}
	}
}
