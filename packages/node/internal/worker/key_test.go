package worker

import (
	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/crypto"
	"os"
	"testing"
	"time"
)

func TestIsValidSig(t *testing.T) {
	// Use the same private key setup from the previous test
	privateKey, _ := crypto.GenerateKey()
	privateKeyHex := hexutil.Encode(crypto.FromECDSA(privateKey))[2:]
	os.Setenv("ETH_PRIVATE_KEY", privateKeyHex)
	defer os.Unsetenv("ETH_PRIVATE_KEY")

	expectedAddress := crypto.PubkeyToAddress(privateKey.PublicKey).Hex()

	// Test valid signature and timing
	createdAt := time.Now()
	signedDate := SignCurrentDate(createdAt)
	if !IsValidSig(createdAt, signedDate.Sig, expectedAddress) {
		t.Error("Expected valid signature to be valid")
	}

	// Test invalid address
	if IsValidSig(createdAt, signedDate.Sig, "0x1234567890123456789012345678901234567890") {
		t.Error("Expected signature with wrong address to be invalid")
	}

	// Test expired timestamp
	expiredTime := createdAt.Add(-2 * time.Hour)
	if IsValidSig(expiredTime, signedDate.Sig, expectedAddress) {
		t.Error("Expected expired signature to be invalid")
	}
}
