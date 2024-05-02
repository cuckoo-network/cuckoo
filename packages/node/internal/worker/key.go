package worker

import (
	"crypto/ecdsa"
	"fmt"
	"github.com/ethereum/go-ethereum/common"
	"os"
	"time"

	"github.com/ethereum/go-ethereum/crypto"
)

type SignedDate struct {
	Address string
	Sig     string
}

func SignCurrentDate(createdAt time.Time) SignedDate {
	privateKeyHex := os.Getenv("ETH_PRIVATE_KEY")
	if privateKeyHex == "" {
		return SignedDate{}
	}

	privateKey, err := crypto.HexToECDSA(privateKeyHex)
	if err != nil {
		return SignedDate{}
	}

	publicKey := privateKey.Public()
	publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)
	if !ok {
		return SignedDate{}
	}

	address := crypto.PubkeyToAddress(*publicKeyECDSA).Hex()

	data := []byte(createdAt.Format(time.RFC3339))
	hash := crypto.Keccak256Hash(data)

	signature, err := crypto.Sign(hash.Bytes(), privateKey)
	if err != nil {
		return SignedDate{}
	}

	return SignedDate{
		Address: address,
		Sig:     fmt.Sprintf("%x", signature),
	}
}

func IsValidSig(createdAt time.Time, sig string, address string) bool {
	if time.Since(createdAt) > time.Hour {
		return false
	}

	data := []byte(createdAt.Format(time.RFC3339))
	hash := crypto.Keccak256Hash(data)

	signatureBytes := common.FromHex(sig)

	pubKey, err := crypto.SigToPub(hash.Bytes(), signatureBytes)
	if err != nil {
		return false
	}

	recoveredAddr := crypto.PubkeyToAddress(*pubKey).Hex()

	return recoveredAddr == address
}
