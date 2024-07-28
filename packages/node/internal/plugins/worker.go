package plugins

import (
	"encoding/json"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins/sd/sdcli"
	"time"
)

type IWorker interface {
	CoinSymbol() CoinSymbol
	SysInfo() *GPUProvider
	ExecuteTask(payload json.RawMessage) (json.RawMessage, error)
}

type CoinSymbol int

const (
	// Define task statuses using iota for auto-incrementing.
	Unknown CoinSymbol = iota
	SD
)

func (t CoinSymbol) String() string {
	switch t {
	case Unknown:
		return "Unknown"
	case SD:
		return "SD"
	default:
		return "Unknown"
	}
}

func CoinSymbolFromString(s string) CoinSymbol {
	switch s {
	case "Unknown":
		return Unknown
	case "SD":
		return SD
	default:
		return Unknown
	}
}

type GPUProvider struct {
	WalletAddress   string                `json:"walletAddress"` // primary key
	Sig             string                `json:"sig"`
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
	IP              string
}
