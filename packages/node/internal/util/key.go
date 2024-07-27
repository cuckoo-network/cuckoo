package util

import (
	"crypto/ecdsa"
	"os"
	"strings"
	"time"

	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/crypto"
)

type SignedDate struct {
	Address string
	Sig     string
}

func WalletAddress() (string, *ecdsa.PrivateKey) {
	var privateKeyHex = os.Getenv("ETH_PRIVATE_KEY")
	if privateKeyHex == "" {
		return "", nil
	}

	privateKey, err := crypto.HexToECDSA(privateKeyHex)
	if err != nil {
		return "", nil
	}

	publicKey := privateKey.Public()
	publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)
	if !ok {
		return "", nil
	}

	address := crypto.PubkeyToAddress(*publicKeyECDSA).Hex()
	return address, privateKey
}

func SignCurrentDate(createdAt time.Time) SignedDate {
	address, privateKey := WalletAddress()

	// Include the createdAt in the data to be signed
	dateString := createdAt.Format(time.RFC3339)
	data := []byte(dateString)
	hash := crypto.Keccak256Hash(data)

	signature, err := crypto.Sign(hash.Bytes(), privateKey)
	if err != nil {
		return SignedDate{}
	}

	// Encode the timestamp and signature together, separated by a period
	sigWithDate := dateString + "." + hexutil.Encode(signature)

	return SignedDate{
		Address: address,
		Sig:     sigWithDate,
	}
}

func IsValidSig(sig string, address string) bool {
	// Split the combined sig into its components
	parts := strings.Split(sig, ".")
	if len(parts) != 2 {
		return false // Incorrect format
	}

	dateString := parts[0]
	signatureHex := parts[1]

	parsedDate, err := time.Parse(time.RFC3339, dateString)
	if err != nil {
		return false
	}

	// Check if the parsedDate matches createdAt and is within the valid time range
	if time.Since(parsedDate) > time.Hour {
		return false
	}

	signatureBytes, err := hexutil.Decode(signatureHex)
	if err != nil {
		return false
	}

	// Ensure the signature is in the correct format
	if len(signatureBytes) != 65 {
		return false
	}

	// Adjust the recovery id (v value)
	if signatureBytes[64] >= 27 {
		signatureBytes[64] -= 27
	}

	data := []byte(dateString)
	hash := crypto.Keccak256Hash(data)
	pubKey, err := crypto.SigToPub(hash.Bytes(), signatureBytes)
	if err != nil {
		return false
	}

	recoveredAddr := crypto.PubkeyToAddress(*pubKey).Hex()

	return strings.EqualFold(recoveredAddr, address)
}
