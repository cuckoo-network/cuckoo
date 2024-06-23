---
title: "How to run a Cuckoo Chain node?"
description: "Learn how to run a Cuckoo node on your local machine"
---

This how-to provides step-by-step instructions for running a Cuckoo node on your local machine.

## Prerequisites

Latest Docker Image: `offchainlabs/nitro-node:v2.3.4-b4cc111`

| Minimum Hardware Configuration               |
| :------------------------------------------- |
| **RAM**: 8-16 GB                             |
| **CPU**: 2-4 core CPU (For AWS: t3 xLarge)   |
| **Storage**: Depends on the traffic overtime |

## Mainnet


```sh
# create a directory to store chain states
mkdir -p ~/cuckoo-chain

# run the node
docker run --rm -it  -v ~/cuckoo-chain:/home/user/.arbitrum \
  -p 0.0.0.0:8547:8547 \
  -p 0.0.0.0:8548:8548 \
  offchainlabs/nitro-node:v2.3.3-6a1c1a7 \
  --parent-chain.connection.url=wss://arbitrum-one-rpc.publicnode.com \
  --chain.id=1200 \
  --chain.name="Cuckoo Chain" \
  --http.api=net,web3,eth \
  --http.addr=0.0.0.0 \
  --execution.forwarding-target=https://mainnet-rpc.cuckoo.network \
  --node.data-availability.enable \
  --node.data-availability.rest-aggregator.enable \
  --node.data-availability.rest-aggregator.online-url-list=https://cuckoo.network/mainnet-das-servers \
  --node.feed.input.url=wss://mainnet-sequencer-feed.cuckoo.network \
  --chain.info-json="[{\"chain-id\":1200,\"parent-chain-id\":42161,\"parent-chain-is-arbitrum\":true,\"chain-name\":\"Cuckoo Chain\",\"chain-config\":{\"homesteadBlock\":0,\"daoForkBlock\":null,\"daoForkSupport\":true,\"eip150Block\":0,\"eip150Hash\":\"0x0000000000000000000000000000000000000000000000000000000000000000\",\"eip155Block\":0,\"eip158Block\":0,\"byzantiumBlock\":0,\"constantinopleBlock\":0,\"petersburgBlock\":0,\"istanbulBlock\":0,\"muirGlacierBlock\":0,\"berlinBlock\":0,\"londonBlock\":0,\"clique\":{\"period\":0,\"epoch\":0},\"arbitrum\":{\"EnableArbOS\":true,\"AllowDebugPrecompiles\":false,\"DataAvailabilityCommittee\":true,\"InitialArbOSVersion\":11,\"GenesisBlockNum\":0,\"MaxCodeSize\":24576,\"MaxInitCodeSize\":49152,\"InitialChainOwner\":\"0x15c7C3E9673F8900Ac66Dd040aCF2169E79429A3\"},\"chainId\":1200},\"rollup\":{\"bridge\":\"0x6a075fbDFEd3d18bCdc62668fE0f02c639144ed8\",\"inbox\":\"0x2b25AAC8ef6F1a405E824C257a349b79c79Ed45c\",\"sequencer-inbox\":\"0x43c51b92bA8b9e89484D5eFa4a87Fa7526793b04\",\"rollup\":\"0xfEE1e4386fee1E337178ce0814e7959b9E67b5F5\",\"validator-utils\":\"0x6c21303F5986180B1394d2C89f3e883890E2867b\",\"validator-wallet-creator\":\"0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF\",\"deployed-at\":222314851}}]"
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


## FAQ


<details class="p-4 bg-white rounded-lg shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
  <summary class="cursor-pointer text-xl font-semibold">
    How to check if the Data Availability Server (DAS) is healthy?
  </summary>
  <p class="mt-2">
    Cuckoo Chain: https://mainnet-das.cuckoo.network/health
  </p>
  <p class="mt-2">
    Cuckoo Sepolia: https://testnet-das.cuckoo.network/health
  </p>
</details>

<details class="p-4 bg-white rounded-lg shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
  <summary class="cursor-pointer text-xl font-semibold">
    How to check if the sequencer feed is healthy?
  </summary>
  <p class="mt-2">
    Cuckoo Chain

    <pre>
wscat -c wss://mainnet-sequencer-feed.cuckoo.network
    </pre>
  </p>
  <p class="mt-2">
    Cuckoo Sepolia
    <pre>
wscat -c wss://testnet-sequencer-feed.cuckoo.network
    </pre>
  </p>
</details>

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

## References

For more details, please refer to [Arbitrum Docs](https://docs.arbitrum.io/node-running/how-tos/running-an-orbit-node).
