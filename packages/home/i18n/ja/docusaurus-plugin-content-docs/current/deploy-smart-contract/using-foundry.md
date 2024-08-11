# Cuckoo ChainでのFoundryを使用したデプロイ

このチュートリアルでは、[Foundry](https://book.getfoundry.sh/) を使用してCuckoo Chain上にERC20トークンをデプロイする手順を紹介します。Foundryは、依存関係の管理、プロジェクトのコンパイル、テストの実行、デプロイ、およびコマンドラインとSolidityスクリプトを介したチェーンとのインタラクションを可能にするRustベースのスマートコントラクト開発ツールチェーンです。

Cuckoo ChainはArbitrumとEthereumスタックに基づいており、そのEVM互換性により、Ethereumベースのスマートコントラクトは最小限の調整で簡単に移植できます。

## 前提条件

以下の手順を完了する必要があります。所要時間は約10分です：

- **Cuckoo Testnet Networkで$CAIを取得する:** [このファウセット](https://cuckoo.network/portal/faucet/) を使用して、CAIを請求します。

- **Rustのインストール:** Rustがインストールされていない場合は、[このガイド](https://doc.rust-lang.org/book/ch01-01-installation.html) に従ってインストールします。

- **Foundryのインストール:** Foundryがインストールされていない場合は、[このガイド](https://book.getfoundry.sh/getting-started/installation) に従ってインストールします。

それでは、始めましょう！

## ステップ1: プロジェクトの設定

### 1.1 新しいFoundryプロジェクトを初期化する

ターミナルを開き、次のコマンドを実行します：

```bash
forge init my-project
```

### 1.2 OpenZeppelin Contractsのインストール

プロジェクトにOpenZeppelin Contractsライブラリを追加します：

```bash
forge install OpenZeppelin/openzeppelin-contracts
```

## ステップ2: ERC20トークンコントラクトの作成

### 2.1 コントラクトファイルの作成

`/src`ディレクトリに`MyERC20.sol`という名前のファイルを作成し、以下のコードを追加します：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract MyERC20 is ERC20 {
    constructor() ERC20("MyToken", "MTK") {}
}
```

このシンプルなERC20トークンは「MyToken」という名前で、シンボルは「MTK」です。名前やシンボルは必要に応じて変更できます。

プロジェクトは次のようになっているはずです：

![img](https://cuckoo-network.b-cdn.net/using-hardhat-1.webp)

## ステップ3: コントラクトのビルド

### 3.1 スマートコントラクトのコンパイル

Foundryを使用してコントラクトをコンパイルします：

```bash
forge build
```

## ステップ4: ERC20トークンコントラクトのデプロイ

### 4.1 コントラクトのデプロイ

以下のコマンドを実行してコントラクトをデプロイします。`<YOUR_PRIVATE_KEY>`を実際のプライベートキーに置き換えてください：

```bash
forge create --rpc-url https://testnet-rpc.cuckoo.network --private-key <YOUR_PRIVATE_KEY> src/MyERC20.sol:MyERC20
```

プライベートキーを公開しないでください。安全に保管して、不正アクセスを防ぎます。

### オプション: デプロイ時にコントラクトを検証

デプロイ時にコントラクトを検証するには、`--verify`フラグを追加します：

```bash
forge create --rpc-url https://testnet-rpc.cuckoo.network --private-key <YOUR_PRIVATE_KEY> src/MyERC20.sol:MyERC20 --verify --verifier blockscout --verifier-url https://testnet-scan.cuckoo.network/api\?
```

次のような出力が表示されるはずです：

```bash
[⠢] Compiling... No files changed, compilation skipped
Deployer: 0x3F26b51E23D01b09f4079B2a9e00e6873a8409D8
Deployed to: 0x628F56856386A4De8414A4D8217D519bF94d03f0
Transaction hash: 0xbe2d27554f130a720c4dd82dad055c941ca44dee836f6333a8507d76022c158
```

「Deployed to」アドレスを後で使用するためにコピーして保存します。

## ステップ5: デプロイ後のコントラクトの検証

### 5.1 コントラクトの検証

すでにデプロイされたコントラクトの場合は、`verify-contract`コマンドを使用します：

```bash
forge verify-contract <CONTRACT_ADDRESS> src/MyERC20.sol:MyERC20 --verifier blockscout --verifier-url https://testnet-scan.cuckoo.network/api\?
```

## ステップ6: デプロイされたコントラクトとのインタラクション

[Blockscout](https://testnet-scan.cuckoo.network/) を使用して、コントラクトの詳細を確認します。デプロイ時に出力されたコントラクトアドレスをBlockscoutの検索バーに貼り付けます。「Contract」タブで検証されたコントラクトが見つかります。

![img](https://cuckoo-network.b-cdn.net/using-hardhat-2.webp)

---

おめでとうございます！Foundryを使用してCuckoo Chain上にスマートコントラクトをデプロイし、検証することができました。

Cuckoo Chainについてもっと学び、ビジネスチャンスを探るために、[Discord](https://cuckoo.network/dc) に参加してこんにちはと言ってください👋。
