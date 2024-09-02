package methods

import (
	"context"
	"github.com/creachadair/jrpc2"
	"github.com/creachadair/jrpc2/handler"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/rewards"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/staking"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/store"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/util"
	"github.com/stellar/go/support/errors"
	"google.golang.org/grpc/metadata"
	"math/big"
	"os"
	"sort"
)

type paramsAndHeaders3 struct {
	Headers metadata.MD        `json:"headers,omitempty"`
	Params  []OfferTaskRequest `json:"params"`
}

func NewRewardHandler(gps *store.GPUProviderStore, rewarder *rewards.Rewarder, stk *staking.Staking) jrpc2.Handler {
	return handler.New(func(ctx context.Context, request paramsAndHeaders3) (bool, error) {
		nodeType := os.Getenv("NODE_TYPE")
		if nodeType != "COORDINATOR" {
			return false, errors.New("Endpoint not supported")
		}

		filtered := rewards.DistributedAddresses()

		providers := gps.ListAllProviders()
		miners := make([]*MinerInfo, len(providers))

		for i, p := range providers {
			votes, _ := stk.TotalVotedStakesCached(p.WalletAddress)
			miners[i] = &MinerInfo{
				WalletAddress:   p.WalletAddress,
				Votes:           votes.String(),
				Platform:        p.Platform,
				Python:          p.Python,
				Version:         p.Version,
				Commit:          p.Commit,
				Checksum:        p.Checksum,
				OS:              p.OS,
				NvidiaGPUModles: p.NvidiaGPUModles,
				CPU:             p.CPU,
				RAM:             p.RAM,
				CreatedAt:       p.CreatedAt,
				UpdatedAt:       p.UpdatedAt,
				IP:              p.IP,
			}
		}

		// Sort miners by Votes in descending order
		sort.Slice(miners, func(i, j int) bool {
			votesI, _ := new(big.Int).SetString(miners[i].Votes, 10)
			votesJ, _ := new(big.Int).SetString(miners[j].Votes, 10)
			return votesI.Cmp(votesJ) > 0
		})

		// Select top 10 miners
		if len(miners) > 10 {
			miners = miners[:10]
		}

		// Prepare addresses for reward distribution
		var addrs []string
		for _, miner := range miners {
			if !filtered[miner.WalletAddress] {
				addrs = append(addrs, miner.WalletAddress)
			}
		}

		// Distribute rewards
		err := rewarder.Reward(addrs, util.NewBigIntFromString("300000000000000000000"))
		return true, errors.Wrap(err, "failed to distribute rewards")
	})
}
