# Hardhatを使用してCuckoo Chainにスマートコントラクトをデプロイする方法

このガイドでは、HardhatとTypeScriptを使用してCuckoo ChainのEthereum L2にスマートコントラクトをデプロイする手順を説明します。

#### 前提条件

- **Node.jsおよびnpm:** 両方がインストールされていることを確認してください。[こちらからダウンロード](https://nodejs.org/)できます。

- **Ethereumウォレット:** Cuckoo Testnet用のプライベートキーを持つウォレットで、testnet $CAIが必要です。[Testnet Faucets](https://cuckoo.network/portal/faucet/)から取得してください。セキュリティのために、本物の資金を含まない新しいウォレットを使用してください。

- **基本的なSolidityとCLIの知識:** 役立ちますが、必須ではありません！

## 学べること

- TypeScriptベースのHardhatプロジェクトのセットアップ
- シンプルなEthereumスマートコントラクトの作成
- Cuckoo Testnet用にHardhatを設定
- Cuckooへのスマートコントラクトのデプロイ

## ステップ1: Hardhat TypeScriptプロジェクトの初期化

ターミナルを開き、新しいプロジェクトディレクトリを作成して、そこに移動します：

```bash
mkdir my-hardhat-project && cd my-hardhat-project
```

npmプロジェクトを初期化します：

```bash
npm init -y
```

HardhatとTypeScriptに必要なパッケージをインストールします：

```bash
npm install --save-dev hardhat ts-node typescript @nomiclabs/hardhat-ethers ethers
```

TypeScriptを使用して新しいHardhatプロジェクトを開始します：

```bash
npx hardhat init
```

プロンプトに従ってください：

- "Create a TypeScript project" を選択します。
- `.gitignore` の追加を「Yes」にします。
- サンプルプロジェクトの依存関係のインストールを「Yes」にします。

```bash
[~/Cuckoo/my-hardhat-project]$ npx hardhat

888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888      88b 888P   d88  888 888  88b      88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888  Y888888 888      Y88888 888  888  Y888888  Y888

👷 Hardhat v2.18.2へようこそ 👷‍

✔ 何をしたいですか? · Create a TypeScript project
✔ Hardhatプロジェクトのルート: · /Users/Cuckoo/my-hardhat-project
✔ .gitignoreを追加しますか？ (Y/n) · y
✔ npm (@nomicfoundation/hardhat-toolbox)でこのサンプルプロジェクトの依存関係をインストールしますか？ (Y/n) · y
```

## ステップ2: スマートコントラクトの作成

`contracts`ディレクトリで`Lock.sol`を削除し、新しいファイル`HelloWorld.sol`を作成します：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public greet = "Hello, Cuckoo!";

    function setGreet(string memory _greet) public {
        greet = _greet;
    }

    function getGreet() public view returns (string memory) {
        return greet;
    }
}
```

## ステップ3: Cuckoo用にHardhatを設定する

`hardhat.config.ts`ファイルを編集し、Cuckoo Testnetの設定を追加します：

```typescript
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  networks: {
    cuckoo: {
      url: "https://testnet-rpc.cuckoo.network",
      chainId: 1210,
      accounts: ["YOUR_PRIVATE_KEY_HERE"] // プライベートキーに置き換えます
    }
  },
  solidity: "0.8.0",
};

export default config;
```

`YOUR_PRIVATE_KEY_HERE`をCuckoo Testnetのプライベートキーに置き換えます。**プライベートキーを共有したり、GitHubにプッシュしたりしないでください。**

## ステップ4: スマートコントラクトのコンパイル

スマートコントラクトをコンパイルします：

```bash
npx hardhat compile
```

## ステップ5: スマートコントラクトのデプロイ

`scripts`ディレクトリに新しいファイル`deploy.ts`を作成します：

```typescript
import { ethers } from "hardhat";

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const gasPrice = ethers.utils.parseUnits('10', 'gwei');
    const gasLimit = 500000;
    const helloWorld = await HelloWorld.deploy({ gasPrice: gasPrice, gasLimit: gasLimit });
    await helloWorld.deployed();
    console.log("HelloWorld deployed to:", helloWorld.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
```

`gasPrice`と`gasLimit`を必要に応じて調整します。チェーンの詳細については、[BlockScout](https://testnet-scan.cuckoo.network/) を参照してください。

スマートコントラクトをCuckoo Testnetにデプロイします：

```bash
npx hardhat run scripts/deploy.ts --network cuckoo
```

## ステップ6: デプロイの検証

Cuckoo Testnetブロックエクスプローラーでスマートコントラクトのデプロイを検証します：[BlockScout](https://testnet-scan.cuckoo.network/) 。コンソールから契約アドレスを使用して詳細を確認します。

## 結論

おめでとうございます！HardhatとTypeScriptを使用して、Cuckoo Testnetにスマートコントラクトを正常にデプロイしました。Cuckooについてもっと学び、コードをビジネスに変える方法を知るには、[Discord](https://cuckoo.network/dc) に参加してこんにちはと言ってください👋。
