package methods

import (
	"context"
	"encoding/json"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/store"
	"io/ioutil"
	"math/big"
	"net/http"
	"time"
)

func OfferTaskHandler(ts *store.InMemoryTaskStore) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id := r.Header.Get("X-Id")
		coinSymbol := r.Header.Get("X-Coin-Symbol")
		maxOfferPrice := r.Header.Get("X-MaxOfferPrice")

		// Read and parse the JSON body
		body, err := ioutil.ReadAll(r.Body)
		if err != nil {
			http.Error(w, "Failed to read request body", http.StatusBadRequest)
			return
		}
		defer r.Body.Close()

		var request OfferTaskRequest
		if err := json.Unmarshal(body, &request); err != nil {
			http.Error(w, "Failed to parse JSON body", http.StatusBadRequest)
			return
		}

		// Create a new task based on the headers and parsed body
		task := &store.TaskOffer{
			Id:                id,
			Status:            store.Pending,
			CoinSymbol:        plugins.CoinSymbolFromString(coinSymbol),
			MaxOfferPrice:     newBigIntFromString(maxOfferPrice),
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

func newBigIntFromString(s string) *big.Int {
	bigInt := new(big.Int)
	if _, ok := bigInt.SetString(s, 10); !ok {
		return big.NewInt(0)
	}
	return bigInt
}
