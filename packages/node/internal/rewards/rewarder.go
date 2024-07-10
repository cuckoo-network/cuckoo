package rewards

import (
	"context"
	"crypto/ecdsa"
	"fmt"
	"math/big"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
)

type Rewarder struct {
	client     *ethclient.Client
	privateKey *ecdsa.PrivateKey
	chainID    *big.Int
}

func NewRewarder(client *ethclient.Client, privateKey string) (*Rewarder, error) {
	// Load the private key
	pk, err := crypto.HexToECDSA(privateKey)
	if err != nil {
		return nil, err
	}

	// Get the chain ID
	chainID, err := client.NetworkID(context.Background())
	if err != nil {
		return nil, err
	}

	return &Rewarder{client: client, privateKey: pk, chainID: chainID}, nil
}

func (r *Rewarder) Reward(recipientStrs []string, amount *big.Int) error {
	// Get the sender address
	publicKey := r.privateKey.Public()
	publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)
	if !ok {
		return fmt.Errorf("error casting public key to ECDSA")
	}
	fromAddress := crypto.PubkeyToAddress(*publicKeyECDSA)

	// Get the nonce
	nonce, err := r.client.PendingNonceAt(context.Background(), fromAddress)
	if err != nil {
		return err
	}

	// Suggest gas price
	gasPrice, err := r.client.SuggestGasPrice(context.Background())
	if err != nil {
		return err
	}

	for _, recipientStr := range recipientStrs {
		recipient := common.HexToAddress(recipientStr)

		// Create the transaction
		tx := types.NewTransaction(nonce, recipient, amount, uint64(30000), gasPrice, nil)

		// Sign the transaction
		signedTx, err := types.SignTx(tx, types.NewEIP155Signer(r.chainID), r.privateKey)
		if err != nil {
			return err
		}

		// Send the transaction
		err = r.client.SendTransaction(context.Background(), signedTx)
		if err != nil {
			return err
		}

		// Increment the nonce for the next transaction
		nonce++
	}

	return nil
}
