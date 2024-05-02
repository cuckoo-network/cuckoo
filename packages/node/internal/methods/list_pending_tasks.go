package methods

import (
	"context"
	"github.com/creachadair/jrpc2"
	"github.com/creachadair/jrpc2/handler"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/staking"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/store"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/worker"
	"github.com/stellar/go/support/errors"
)

func ListPendingTasks(ts *store.InMemoryTaskStore, gps *store.GPUProviderStore, stk *staking.Staking) jrpc2.Handler {
	return handler.New(func(ctx context.Context, req []plugins.GPUProvider) ([]*store.TaskOffer, error) {
		if !worker.IsValidSig(req[0].Sig, req[0].WalletAddress) {
			return nil, errors.New("unauthorized wallet")
		}

		gps.Upsert(&req[0])

		allProviders := gps.ListAllProviders()
		weights := weights(allProviders, stk)

		tasks := ts.GetPendingTasksByWeights(weights, req[0].WalletAddress)

		return tasks, nil
	})
}

func weights(allProviders []*plugins.GPUProvider, stk *staking.Staking) []store.WalletWeight {
	weights := make([]store.WalletWeight, len(allProviders))
	for i, p := range allProviders {
		stakes, _ := stk.TotalVotedStakesCached(p.WalletAddress)
		weights[i] = store.WalletWeight{Weight: stakes, WalletAddress: p.WalletAddress}
	}
	return weights
}
