package methods

import (
	"context"
	"github.com/creachadair/jrpc2"
	"github.com/creachadair/jrpc2/handler"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/rewards"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/store"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/util"
	"github.com/stellar/go/support/errors"
	"os"
)

func NewRewardHandler(gps *store.GPUProviderStore, rewarder *rewards.Rewarder) jrpc2.Handler {
	return handler.New(func(ctx context.Context, request []OfferTaskRequest) (bool, error) {
		nodeType := os.Getenv("NODE_TYPE")
		if nodeType != "COORDINATOR" {
			return false, errors.New("Endpoint not supported")
		}

		filtered := rewards.DistributedAddresses()

		var addrs []string

		ps := gps.ListAllProviders()
		for _, p := range ps {
			if !filtered[p.WalletAddress] {
				addrs = append(addrs, p.WalletAddress)
			}
		}

		err := rewarder.Reward(addrs, util.NewBigIntFromString("300000000000000000000"))
		return true, errors.Wrap(err, "failed to distribute rewards")
	})
}
