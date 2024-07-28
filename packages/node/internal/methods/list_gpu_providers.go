package methods

import (
	"context"
	"github.com/creachadair/jrpc2"
	"github.com/creachadair/jrpc2/handler"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins/sd/sdcli"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/staking"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/store"
	"os"
	"time"
)

type MinerInfo struct {
	WalletAddress   string                `json:"walletAddress"` // primary key
	Votes           string                `json:"votes"`
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
	IP              string                `json:"ip"`
}

func ListGPUProviders(gps *store.GPUProviderStore, stk *staking.Staking, wk plugins.IWorker) jrpc2.Handler {
	return handler.New(func(ctx context.Context) ([]*MinerInfo, error) {
		nodeType := os.Getenv("NODE_TYPE")
		if nodeType != "COORDINATOR" {
			p := wk.SysInfo()
			votes, _ := stk.TotalVotedStakesCached(p.WalletAddress)
			return []*MinerInfo{{
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
			}}, nil
		}

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
		return miners, nil
	})
}
