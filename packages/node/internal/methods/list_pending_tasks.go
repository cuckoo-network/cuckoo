package methods

import (
	"context"
	"github.com/creachadair/jrpc2"
	"github.com/creachadair/jrpc2/handler"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/staking"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/store"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/util"
	"github.com/stellar/go/support/errors"
	"google.golang.org/grpc/metadata"
	"strings"
)

type paramsAndHeaders struct {
	Headers metadata.MD           `json:"headers,omitempty"`
	Params  []plugins.GPUProvider `json:"params"`
}

func ListPendingTasks(ts *store.InMemoryTaskStore, gps *store.GPUProviderStore, stk *staking.Staking) jrpc2.Handler {
	return handler.New(func(ctx context.Context, req paramsAndHeaders) ([]*store.TaskOffer, error) {
		if !util.IsValidSig(req.Params[0].Sig, req.Params[0].WalletAddress) {
			return nil, errors.New("unauthorized wallet")
		}
		req.Params[0].IP = firstIPHeader(req.Headers)

		gps.Upsert(&req.Params[0])

		allProviders := gps.ListAllProviders()
		weights := weights(allProviders, stk)

		tasks := ts.GetPendingTasksByWeights(weights, req.Params[0].WalletAddress)

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

func firstIPHeader(md metadata.MD) string {
	// Check if the metadata is nil to avoid a nil pointer exception.
	if md == nil {
		return ""
	}

	// Get the "x-ip" metadata.
	ipHeaders := md.Get("x-ip")

	// If the metadata is empty, return an empty string.
	if len(ipHeaders) == 0 {
		return ""
	}

	// Split the first header value by comma and return the first part.
	ips := strings.Split(ipHeaders[0], ",")
	if len(ips) > 0 {
		return ips[0]
	}

	return ""
}
