package methods

import (
	"context"
	"github.com/creachadair/jrpc2"
	"github.com/creachadair/jrpc2/handler"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins/sd/sdcli"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/staking"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/store"
	"time"
)

type GPUProvider struct {
	WalletAddress   string                `json:"walletAddress"` // primary key
	Platform        string                `json:"platform"`
	Python          string                `json:"python"`
	Version         string                `json:"version"`
	Commit          string                `json:"commit"`
	Checksum        string                `json:"checksum"`
	OS              string                `json:"os"`
	NvidiaGPUModles sdcli.NvidiaGPUModels `json:"nvidia_gpu_models"`
	CPU             sdcli.CPUInfo         `json:"CPU"`
	RAM             sdcli.RAMInfo         `json:"RAM"`
	CreatedAt       time.Time             `json:"createdAt"`
	UpdatedAt       time.Time             `json:"updatedAt"`
}

func ListPendingTasks(ts *store.InMemoryTaskStore, gps *store.GPUProviderStore, stk *staking.Staking) jrpc2.Handler {
	return handler.New(func(ctx context.Context, req []plugins.GPUProvider) ([]*store.TaskOffer, error) {
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
