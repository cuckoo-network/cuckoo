package util

import (
	"crypto/ecdsa"
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/stellar/go/support/log"
	"os"
)

func KeyGenIfNeeded(logger *log.Entry) {
	// Check if ETH_PRIVATE_KEY is set
	ethPrivateKey := os.Getenv("ETH_PRIVATE_KEY")
	if ethPrivateKey != "" {
		logger.Info("ETH_PRIVATE_KEY already set in the environment variables")
		return
	}

	// Generate a new private key
	privateKey, err := ecdsa.GenerateKey(crypto.S256(), rand.Reader)
	if err != nil {
		log.Fatalf("Failed to generate private key: %v", err)
	}

	// Convert the private key to bytes
	privateKeyBytes := crypto.FromECDSA(privateKey)
	ethPrivateKey = hex.EncodeToString(privateKeyBytes)

	// Derive the Ethereum address from the private key
	publicKey := privateKey.PublicKey
	address := crypto.PubkeyToAddress(publicKey).Hex()

	// Prepare the content to append to the .env file
	envContent := fmt.Sprintf("# Address is %s\nETH_PRIVATE_KEY=%s\n", address, ethPrivateKey)
	err = appendToFile(".env", envContent)
	if err != nil {
		log.Fatalf("Failed to write to .env file: %v", err)
	}

	logger.Info("ETH_PRIVATE_KEY has been generated and added to .env file")

	// Set the ETH_PRIVATE_KEY in the current environment
	os.Setenv("ETH_PRIVATE_KEY", ethPrivateKey)
}

func appendToFile(filename, text string) error {
	f, err := os.OpenFile(filename, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		return err
	}
	defer f.Close()

	_, err = f.WriteString(text)
	return err
}
