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

	err := s.votingContract.Call(callOpts, &rawResult, "getVotersForMiner", voteeAddress)
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

const votingContractAddress = "0x376bcdBcc649Df441B5F5AE420D6b79a2fCe92A3"

const votingContractABI = `[
    {
      "inputs": [],
      "name": "ContractMetadataUnauthorized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OwnableUnauthorized",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "prevURI",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "newURI",
          "type": "string"
        }
      ],
      "name": "ContractURIUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "prevOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "miner",
          "type": "address"
        }
      ],
      "name": "VoteRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "miner",
          "type": "address"
        }
      ],
      "name": "Voted",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "miners",
          "type": "address[]"
        }
      ],
      "name": "batchVoteForMiners",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "voter",
          "type": "address"
        }
      ],
      "name": "getMinersForVoter",
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
          "name": "miner",
          "type": "address"
        }
      ],
      "name": "getVotersForMiner",
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
          "name": "voter",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "miner",
          "type": "address"
        }
      ],
      "name": "hasVotedForMiner",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
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
          "name": "miner",
          "type": "address"
        }
      ],
      "name": "removeVoteForMiner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
        }
      ],
      "name": "setContractURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "setOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "miner",
          "type": "address"
        }
      ],
      "name": "voteForMiner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]`
