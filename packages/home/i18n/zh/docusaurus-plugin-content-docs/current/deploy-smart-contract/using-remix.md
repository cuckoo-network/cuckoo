# 使用 Remix 在 Cuckoo Chain 上部署智能合约

**如何使用 Remix IDE 在 Cuckoo Chain 上部署**

Cuckoo Chain 是一个专为超高速增长设计的 Arbitrum Layer-2 解决方案。由于其基于 Arbitrum 构建，Cuckoo Chain 具备 EVM 兼容性，允许您轻松移植现有的基于以太坊的智能合约，而无需修改代码。

在本指南中，我们将向您展示如何使用 [Remix IDE](https://remix.ethereum.org/) 在 Cuckoo Chain 上部署智能合约。

本教程假定您已经拥有 Sepolia ETH 并已将其桥接至 Cuckoo 测试网。

## 1. 使用 Remix 部署

首先，确保您已将 Cuckoo 网络添加到您的 MetaMask。请按照分步指南将 Cuckoo 测试网添加到 MetaMask。

现在我们可以开始了！

[Remix](https://remix.ethereum.org/) 是一个无需配置的工具，具有图形界面，用于开发智能合约。它允许轻松部署、调试、与智能合约交互等。这是一个非常适合快速测试更改和与已部署合约交互的工具。

![这是一个显示 Remix IDE 的截图。将使用一个基本的智能合约进行本教程。](https://cuckoo-network.b-cdn.net/using-remix2.webp)

在本教程中，我们将部署 Remix 中提供的示例智能合约 `1_Storage.sol`，但您也可以使用自己的代码。以下是您可以粘贴到任何 `.sol` 文件中的示例代码：

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

要编译您的智能合约，请转到 Solidity 编译器选项卡并选择您要编译的合约。点击 "Compile"。您也可以启用 "Auto Compile" 以在更改合约代码时自动编译。

请确保打开高级配置并将 EVM 版本设置为 London。这是为了避免与 PUSH0 操作码相关的问题。您可以在 [此处](https://community.optimism.io/docs/developers/build/differences/#opcode-differences) 阅读更多关于 Optimism 链的问题。

<img src="https://cuckoo-network.b-cdn.net/using-remix3.webp" style={{height: "500px"}} alt="Remix configuration screenshot" />

### Solidity 编译器选项卡

智能合约成功编译后，切换到 "Deploy & Run Transactions" 选项卡。

在 "Environment" 下拉菜单中，选择 "Injected Provider - MetaMask"。这将使您的 MetaMask 连接到 Remix，并允许您从连接的钱包中进行交易。

在部署之前，请确保在 MetaMask 中选择 Cuckoo Chain 作为您的网络。

<img src="https://cuckoo-network.b-cdn.net/using-remix3.webp" style={{height: "500px"}} alt="Remix deploy tab screenshot" />

<img src="https://cuckoo-network.b-cdn.net/using-remix4.webp" style={{height: "500px"}} alt="Deploying contract screenshot" />

选择您要部署的编译好的合约，然后点击 'Deploy'。

现在，MetaMask 应该会弹出，要求您确认交易，并且费用非常低。

<img src="https://cuckoo-network.b-cdn.net/using-remix5.webp" style={{height: "500px"}} alt="MetaMask confirmation screenshot" />

**恭喜！您刚刚将第一个智能合约部署到 Cuckoo Chain 上。**

------

### 2. 如何探索和与您的已部署智能合约进行交互

现在您已经将第一个智能合约部署到 Cuckoo Chain 上，让我们看看如何与它进行交互。

您将在 "Deploy & Run Transactions" 选项卡下看到您的已部署智能合约。您可以使用 Remix 界面调用智能合约中定义的方法，并访问其公共变量。

我们还可以在 [Blockscout](https://testnet-scan.cuckoo.network/) 中找到我们已部署的智能合约，这是 Cuckoo 的区块浏览器。将合约地址从 Remix 复制，然后访问 [Blockscout](https://testnet-scan.cuckoo.network/) 并将其粘贴到搜索栏中。

<img src="https://cuckoo-network.b-cdn.net/using-remix6.webp" style={{height: "500px"}} alt="Blockscout explorer screenshot" />

下面的截图显示了我们已部署的智能合约，您可以在其中看到所有交易、创建者钱包、余额等信息！

请注意，如果您在 Remix 中调用智能合约的方法，您应该会在该浏览器中看到弹出的交易。您可以直接使用 Remix 与您已部署的智能合约进行交互。

![img](https://cuckoo-network.b-cdn.net/using-remix7.webp)

**您现在已经学会了如何使用 Remix 在线 IDE 在 Cuckoo Chain 上部署智能合约！**

在本教程中，我们还涵盖了 Cuckoo 桥接、区块浏览器以及如何与您的合约进行交互。

要了解更多关于 Cuckoo Chain 的信息，以及如何将代码转化为业务，请加入我们的 [Discord](https://cuckoo.network/dc) 并向我们打个招呼 👋。
