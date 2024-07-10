package util_test

import (
	"crypto/ecdsa"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/util"
	"os"
	"testing"
	"time"

	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/crypto"
)

// TestIsValidSig tests the IsValidSig function for various scenarios
func TestIsValidSig(t *testing.T) {
	// Setup a private key for testing
	privateKey, err := crypto.GenerateKey()
	if err != nil {
		t.Fatalf("Error generating private key: %v", err)
	}
	privateKeyHex := hexutil.Encode(crypto.FromECDSA(privateKey))[2:]
	os.Setenv("ETH_PRIVATE_KEY", privateKeyHex)
	defer os.Unsetenv("ETH_PRIVATE_KEY")

	// Generate the public key and address
	publicKey := privateKey.Public()
	publicKeyECDSA, _ := publicKey.(*ecdsa.PublicKey)
	address := crypto.PubkeyToAddress(*publicKeyECDSA).Hex()

	// Create a signature
	createdAt := time.Now()
	signedData := util.SignCurrentDate(createdAt)

	// Test 1: Valid signature
	if !util.IsValidSig(signedData.Sig, address) {
		t.Error("Expected signature to be valid")
	}

	// Test 2: Invalid address
	if util.IsValidSig(signedData.Sig, "0x1234567890123456789012345678901234567890") {
		t.Error("Expected signature with wrong address to be invalid")
	}

	// Test 3: Old timestamp
	oldDate := time.Now().Add(-2 * time.Hour)
	oldSigData := util.SignCurrentDate(oldDate)
	if util.IsValidSig(oldSigData.Sig, address) {
		t.Error("Expected old signature to be invalid")
	}

	// Test 4: Incorrectly formatted signature
	if util.IsValidSig("not_a_real_signature", address) {
		t.Error("Expected incorrectly formatted signature to be invalid")
	}
}
