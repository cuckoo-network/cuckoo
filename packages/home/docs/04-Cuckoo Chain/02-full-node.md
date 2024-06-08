---
title: 'How to run a full node for Cuckoo chain'
description: 'Learn how to run a Cuckoo node on your local machine'
---

This how-to provides step-by-step instructions for running a Cuckoo node on your local machine.

## Prerequisites

Latest Docker Image: `offchainlabs/nitro-node:v2.3.4-b4cc111`

| Minimum Hardware Configuration               |
|:---------------------------------------------|
| **RAM**: 8-16 GB                             |
| **CPU**: 2-4 core CPU (For AWS: t3 xLarge)   |
| **Storage**: Depends on the traffic overtime |

## Mainnet

Cuckoo Chain is still in testnet v2. Follow https://cuckoo.network/x to stay updated.

## Testnet

```sh
# create a directory to store chain states
mkdir -p ~/cuckoo-sepolia

# run the node
docker run --rm -it  -v ~/cuckoo-sepolia:/home/user/.arbitrum \
  -p 0.0.0.0:8547:8547 \
  -p 0.0.0.0:8548:8548 \
  offchainlabs/nitro-node:v2.3.3-6a1c1a7 \
  --parent-chain.connection.url=https://sepolia-rollup.arbitrum.io/rpc \
  --chain.id=1210 \
  --chain.name="Cuckoo Sepolia" \
  --http.api=net,web3,eth \
  --http.addr=0.0.0.0 \
  --execution.forwarding-target=https://testnet-rpc.cuckoo.network \
  --node.data-availability.enable \
  --node.data-availability.rest-aggregator.enable \
  --node.data-availability.rest-aggregator.online-url-list=https://cuckoo.network/testnet-das-servers \
  --node.feed.input.url=wss://testnet-sequencer-feed.cuckoo.network \
  --chain.info-json="[{\"chain-id\":1210,\"parent-chain-id\":421614,\"parent-chain-is-arbitrum\":true,\"chain-name\":\"Cuckoo Sepolia\",\"chain-config\":{\"homesteadBlock\":0,\"daoForkBlock\":null,\"daoForkSupport\":true,\"eip150Block\":0,\"eip150Hash\":\"0x0000000000000000000000000000000000000000000000000000000000000000\",\"eip155Block\":0,\"eip158Block\":0,\"byzantiumBlock\":0,\"constantinopleBlock\":0,\"petersburgBlock\":0,\"istanbulBlock\":0,\"muirGlacierBlock\":0,\"berlinBlock\":0,\"londonBlock\":0,\"clique\":{\"period\":0,\"epoch\":0},\"arbitrum\":{\"EnableArbOS\":true,\"AllowDebugPrecompiles\":false,\"DataAvailabilityCommittee\":true,\"InitialArbOSVersion\":11,\"GenesisBlockNum\":0,\"MaxCodeSize\":24576,\"MaxInitCodeSize\":49152,\"InitialChainOwner\":\"0xF66eE80aC2331914F0193a56cdd3511F66f531d5\"},\"chainId\":1210},\"rollup\":{\"bridge\":\"0x84c599703Fd5d3031c2AaF0a32c3a89bB64Ad89A\",\"inbox\":\"0x31Ec68f7B326a45D8CDC3644569230A322bA9C50\",\"sequencer-inbox\":\"0x904b97f741BFD8d00c7D7644E05fFAF71985b5c1\",\"rollup\":\"0xA5f8EA23030F2cDE95f8ffeb56315BaF86f2E64c\",\"validator-utils\":\"0xB11EB62DD2B352886A4530A9106fE427844D515f\",\"validator-wallet-creator\":\"0xEb9885B6c0e117D339F47585cC06a2765AaE2E0b\",\"deployed-at\":51326201}}]"
```

Curl the node's RPC to check block height and see if it is alive.

```
curl -X POST http://localhost:8547/ \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

## Shutting Down

When shutting down the Docker image, it is important to allow a graceful shutdown so that the current state can be saved to disk. Here is an example of how to do a graceful shutdown of all Docker images currently running

  ```sh
  docker stop --time=300 $(docker ps -aq)
  ```

## Note on permissions

The Docker image is configured to run as non-root `UID 1000`. If you are running Linux or macOS and you are getting permission errors when trying to run the Docker image, run this command to allow all users to update the persistent folders:

```shell
mkdir /data/arbitrum
chmod -fR 777 /data/arbitrum
```

## References

For more details, please refer to [Arbitrum Docs](https://docs.arbitrum.io/node-running/how-tos/running-an-orbit-node).
