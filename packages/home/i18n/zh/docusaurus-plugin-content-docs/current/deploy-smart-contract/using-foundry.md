---
title: "使用 Foundry 在 Cuckoo Chain 上部署"
description: "使用 Foundry 在 Cuckoo Chain 上部署 ERC20 代币的教程。"
---

本教程将指导您使用 [Foundry](https://book.getfoundry.sh/) 在 Cuckoo Chain 上部署 ERC20 代币。Foundry 是一个基于 Rust 的智能合约开发工具链，管理依赖项、编译项目、运行测试、部署，并允许通过命令行和 Solidity 脚本与链交互。

鉴于 Cuckoo Chain 基于 Arbitrum 和 Ethereum 技术栈，并且具备 EVM 兼容性，以太坊智能合约可以轻松移植，只需进行少量调整。

## 前提条件

您需要完成以下步骤，这些步骤大约需要 10 分钟：

- **获取 Cuckoo 测试网络的 $CAI：** 使用 [这个水龙头](https://cuckoo.network/portal/faucet/) 领取一些 CAI。

- **安装 Rust：** 如果尚未安装 Rust，请按照 [此指南](https://doc.rust-lang.org/book/ch01-01-installation.html) 安装。

- **安装 Foundry：** 如果尚未安装 Foundry，请按照 [此指南](https://book.getfoundry.sh/getting-started/installation) 安装。

让我们开始吧！

## 步骤 1：设置项目

### 1.1 初始化一个新的 Foundry 项目

打开终端并运行：

```bash
forge init my-project
```

### 1.2 安装 OpenZeppelin 合约

将 OpenZeppelin 合约库添加到您的项目中：

```bash
forge install OpenZeppelin/openzeppelin-contracts
```

## 步骤 2：编写 ERC20 代币合约

### 2.1 创建合约文件

在 `/src` 目录中，创建一个名为 `MyERC20.sol` 的文件，并添加以下代码：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract MyERC20 is ERC20 {
    constructor() ERC20("MyToken", "MTK") {}
}
```

这个简单的 ERC20 代币名为 "MyToken"，符号为 "MTK"。您可以根据需要修改名称和符号。

您的项目现在应该如下所示：

![img](https://cuckoo-network.b-cdn.net/using-hardhat-1.webp)

## 步骤 3：编译合约

### 3.1 编译智能合约

使用 Foundry 编译您的合约：

```bash
forge build
```

## 步骤 4：部署 ERC20 代币合约

### 4.1 部署合约

要部署您的合约，运行以下命令，并将 `<YOUR_PRIVATE_KEY>` 替换为您的实际私钥：

```bash
forge create --rpc-url https://testnet-rpc.cuckoo.network --private-key <YOUR_PRIVATE_KEY> src/MyERC20.sol:MyERC20
```

永远不要公开分享您的私钥。请妥善存储以防止未经授权的访问。

### 可选：在部署期间验证合约

在部署期间添加 `--verify` 标志以验证您的合约：

```bash
forge create --rpc-url https://testnet-rpc.cuckoo.network --private-key <YOUR_PRIVATE_KEY> src/MyERC20.sol:MyERC20 --verify --verifier blockscout --verifier-url https://testnet-scan.cuckoo.network/api\?
```

您应该会看到类似以下的输出：

```bash
[⠢] Compiling... No files changed, compilation skipped
Deployer: 0x3F26b51E23D01b09f4079B2a9e00e6873a8409D8
Deployed to: 0x628F56856386A4De8414A4D8217D519bF94d03f0
Transaction hash: 0xbe2d27554f130a720c4dd82dad055c941ca44dee836f6333a8507d76022c158
```

复制并保存 "Deployed to" 地址以备后用。

## 步骤 5：部署后验证合约

### 5.1 验证合约

对于已经部署的合约，使用 `verify-contract` 命令：

```bash
forge verify-contract <CONTRACT_ADDRESS> src/MyERC20.sol:MyERC20 --verifier blockscout --verifier-url https://testnet-scan.cuckoo.network/api\?
```

## 步骤 6：与已部署合约交互

使用 [Blockscout](https://testnet-scan.cuckoo.network/) 查看您的合约详情。将部署输出中的合约地址粘贴到 Blockscout 的搜索栏中。在“合约”选项卡中，您将找到已验证的合约。

![img](https://cuckoo-network.b-cdn.net/using-hardhat-2.webp)

---

恭喜！您已成功使用 Foundry 在 Cuckoo Chain 上部署并验证了智能合约。

要了解更多关于 Cuckoo Chain 的信息并探索商业机会，欢迎加入我们的 [Discord](https://cuckoo.network/dc) 与我们打个招呼 👋。
