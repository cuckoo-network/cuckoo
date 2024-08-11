---
title: "Cuckoo Chainノードの実行方法"
description: "ローカルマシンでCuckooノードを実行する方法を学びます。"
---

このガイドでは、ローカルマシンでCuckooノードを実行するためのステップバイステップの手順を提供します。

## 前提条件

開始する前に、最新のDockerイメージを取得しておいてください:

```sh
offchainlabs/nitro-node:v2.3.4-b4cc111
```

### 最低ハードウェア構成

| コンポーネント   | 要件                           |
| ----------- | --------------------------------- |
| **RAM**     | 8-16 GB                           |
| **CPU**     | 2-4 コアCPU (AWSの場合: t3 xLarge) |
| **ストレージ** | トラフィック量に依存         |

## メインネットでのCuckooノードの実行

### ステップバイステップの手順

1. **チェーン状態のためのディレクトリを作成**

    ```sh
    mkdir -p ~/cuckoo-chain
    ```

2. **ノードを実行**

    ```sh
    docker run --rm -it  -v ~/cuckoo-chain:/home/user/.arbitrum \
      -p 0.0.0.0:8547:8547 \
      -p 0.0.0.0:8548:8548 \
      offchainlabs/nitro-node:v2.3.3-6a1c1a7 \
      --parent-chain.connection.url=https://arbitrum-one-rpc.publicnode.com \
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

3. **ノードのステータスを確認**

   ノードが正常に実行されているか確認し、次のコマンドを使用してブロックの高さをチェックします:

    ```sh
    curl -X POST http://localhost:8547/ \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
    ```

## ノードのシャットダウン

現在の状態が正しく保存されるように、以下のコマンドで優雅にシャットダウンします:

```sh
docker stop --time=300 $(docker ps -aq)
```

## 権限の処理

LinuxやmacOSでDockerイメージを実行中に権限エラーが発生した場合、次のコマンドを使用して権限を調整します:

```sh
chmod -fR 777 /path-to-data/
```

## よくある質問

<details class="p-4 bg-white rounded-lg shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
  <summary class="cursor-pointer text-xl font-semibold">
    Data Availability Server (DAS) の状態を確認する方法は？
  </summary>
  <p class="mt-2">
    Cuckoo Chain: <a href="https://mainnet-das.cuckoo.network/health">https://mainnet-das.cuckoo.network/health</a>
  </p>
  <p class="mt-2">
    Cuckoo Sepolia: <a href="https://testnet-das.cuckoo.network/health">https://testnet-das.cuckoo.network/health</a>
  </p>
</details>

<details class="p-4 bg-white rounded-lg shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
  <summary class="cursor-pointer text-xl font-semibold">
    シーケンサーフィードの状態を確認する方法は？
  </summary>
  <p class="mt-2">
    Cuckoo Chain:

    ```sh
    wscat -c wss://mainnet-sequencer-feed.cuckoo.network
    ```

  </p>
  <p class="mt-2">
    Cuckoo Sepolia:

    ```sh
    wscat -c wss://testnet-sequencer-feed.cuckoo.network
    ```
  </p>
</details>

## テストネットでのCuckooノードの実行

### ステップバイステップの手順

1. **チェーン状態のためのディレクトリを作成**

    ```sh
    mkdir -p ~/cuckoo-sepolia
    ```

2. **ノードを実行**

    ```sh
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
      --chain.info-json="[{\"chain-id\":1210,\"parent-chain-id\":421614,\"parent-chain-is-arbitrum\":true,\"chain-name\":\"Cuckoo Sepolia\",\"chain-config\":{\"homesteadBlock\":0,\"daoForkBlock\":null,\"daoForkSupport\":true,\"eip150Block\":0,\"eip150Hash\":\"0x0000000000000000000000000000000000000000000000000000000000000000\",\"eip155Block\":0,\"eip158Block\":0,\"byzantiumBlock\":0,\"constantinopleBlock\":0,\"petersburgBlock\":0,\"istanbulBlock\":0,\"muirGlacierBlock\":0,\"berlinBlock\":0,\"londonBlock\":0,\"clique\":{\"period\":0,\"epoch\":0},\"arbitrum\":{\"EnableArbOS\":true,\"AllowDebugPrecompiles\":false,\"DataAvailabilityCommittee\":true,\"InitialArbOSVersion\":11,\"GenesisBlockNum
   ```
