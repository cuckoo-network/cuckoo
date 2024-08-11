# Remixを使用してCuckoo Chainにデプロイする方法

**Remix IDEでCuckoo Chainにデプロイする方法**

Cuckoo Chainは、急成長を目指して設計されたArbitrumのLayer-2です。Arbitrumを基盤に構築されているため、Cuckoo ChainはEVM互換性を持ち、既存のEthereumベースのスマートコントラクトをコードの修正なしで簡単に移植できます。

このガイドでは、[Remix IDE](https://remix.ethereum.org/)を使用してCuckoo Chainにスマートコントラクトをデプロイする方法を紹介します。

このチュートリアルでは、Sepolia ETHを持ち、Cuckoo Testnet Networkにブリッジしていることを前提としています。

## 1. Remixを使用してデプロイ

まず、CuckooネットワークをMetaMaskに追加していることを確認してください。MetaMaskにCuckoo Testnetを追加するためのステップバイステップのガイドに従ってください。

準備が整いました！

[Remix](https://remix.ethereum.org/)は、スマートコントラクトを開発するためのセットアップ不要のツールで、グラフィカルインターフェースを備えています。これにより、デプロイ、デバッグ、スマートコントラクトとのインタラクションが容易になり、デプロイ済みのコントラクトとの迅速な変更やインタラクションが可能です。

![このスクリーンショットはRemix IDEを示しています。チュートリアルで使用される基本的なスマートコントラクトが表示されています。](https://cuckoo-network.b-cdn.net/using-remix2.webp)

このチュートリアルでは、Remixに付属している'1_Storage.sol'スマートコントラクトをデプロイしますが、ご自身のコードを使用することもできます。以下は、任意の`.sol`ファイルに貼り付けることができるサンプルコードです：

### 1_Storage.sol

```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Storage {
    uint256 number;

    function store(uint256 num) public {
        number = num;
    }

    function retrieve() public view returns (uint256) {
        return number;
    }
}
```

スマートコントラクトをコンパイルするには、Solidity Compilerタブに移動し、コンパイルしたいコントラクトを選択して「Compile」をクリックします。コードを変更するたびに自動的にコンパイルされる「Auto Compile」を有効にすることもできます。

高度な設定を開き、EVMバージョンを「London」に設定してください。これは、PUSH0オペコードの問題を回避するためです。この問題について詳しくは、[Optimismチェーンのドキュメント](https://community.optimism.io/docs/developers/build/differences/#opcode-differences)をご覧ください。

<img src="https://cuckoo-network.b-cdn.net/using-remix3.webp" style={{height: "500px"}} />

### Solidity Compilerタブ

スマートコントラクトが正常にコンパイルされたら、「Deploy & Run Transactions」タブに切り替えます。

「Environment」ドロップダウンメニューで、「Injected Provider - MetaMask」を選択します。これにより、MetaMaskがRemixに接続され、接続されたウォレットからトランザクションを実行できるようになります。

MetaMaskでCuckoo Chainを選択したネットワークとして設定してからデプロイを行ってください。

<img src="https://cuckoo-network.b-cdn.net/using-remix3.webp" style={{height: "500px"}} />

<img src="https://cuckoo-network.b-cdn.net/using-remix4.webp" style={{height: "500px"}} />

コンパイルされたコントラクトを選択し、「Deploy」をクリックします。

MetaMaskがポップアップ表示され、非常に低い手数料でトランザクションを確認するよう求められるはずです。

<img src="https://cuckoo-network.b-cdn.net/using-remix5.webp" style={{height: "500px"}} />

**おめでとうございます！Cuckoo Chainに初めてスマートコントラクトをデプロイしました。**

------

### 2. デプロイされたスマートコントラクトを探索して操作する方法

Cuckoo Chainに最初のスマートコントラクトをデプロイしたので、それを操作する方法を見てみましょう。

'Deploy & Run Transactions'タブの下に、デプロイされたスマートコントラクトが表示されます。Remixのインターフェースを使用して、スマートコントラクトで定義されたメソッドを呼び出し、公開されている変数にアクセスできます。

また、デプロイされたスマートコントラクトを[Cuckooのブロックスキャナー](https://testnet-scan.cuckoo.network/)で確認することもできます。Remixから契約アドレスをコピーし、[Blockscout](https://testnet-scan.cuckoo.network/)に移動して、検索バーにアドレスを貼り付けます。

<img src="https://cuckoo-network.b-cdn.net/using-remix6.webp" style={{height: "500px"}} />

以下のスクリーンショットは、デプロイされたスマートコントラクトを示しており、すべてのトランザクション、作成者のウォレット、残高などが表示されています！

Remixでスマートコントラクトのメソッドを呼び出すと、このエクスプローラーにトランザクションが表示されるはずです。Remixを使用してデプロイされたスマートコントラクトと直接対話することができます。

![img](https://cuckoo-network.b-cdn.net/using-remix7.webp)

**これで、RemixオンラインIDEを使用してCuckoo Chainにスマートコントラクトをデプロイする方法を学びました！**

このチュートリアルでは、Cuckooブリッジ、ブロックエクスプローラー、およびコントラクトとのインタラクション方法もカバーしました。

Cuckoo Chainについてさらに学び、コードをビジネスに変える方法を知るには、[Discord](https://cuckoo.network/dc) に参加して、挨拶してください👋
