package staking

import (
	"context"
	"fmt"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
	"strings"
)

func votingContract(client *ethclient.Client) (*bind.BoundContract, error) {
	parsedABI, err := abi.JSON(strings.NewReader(votingContractABI))
	if err != nil {
		return nil, err
	}
	address := common.HexToAddress(votingContractAddress)
	return bind.NewBoundContract(address, parsedABI, client, client, client), nil
}

func (s *Staking) VotersForStaker(votee string) ([]string, error) {
	var rawResult []interface{}
	voteeAddress := common.HexToAddress(votee)
	callOpts := &bind.CallOpts{Context: context.Background()}

	err := s.votingContract.Call(callOpts, &rawResult, "getVotersForStaker", voteeAddress)
	if err != nil {
		return nil, err
	}

	var resultStrArr []string

	// Iterate over the slice of interfaces
	for _, item := range rawResult {
		innerSlice, ok := item.([]common.Address)
		if !ok {
			return nil, fmt.Errorf("expected inner slice of type []common.Address{} but got %T", item)
		}

		// Convert innerSlice of interface{} to []string
		for _, innerItem := range innerSlice {
			addrStr := innerItem.String()
			resultStrArr = append(resultStrArr, addrStr)
		}
	}

	return resultStrArr, nil
}

const votingContractAddress = "0xbf4D6eE528f2F7BE1A04AA280e5E27Be15897c9e"

const votingContractABI = `[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "staker",
          "type": "address"
        }
      ],
      "name": "getVotersForStaker",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "staker",
          "type": "address"
        }
      ],
      "name": "voteForStaker",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "voteesToVoters",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "votes",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]`
