---
title: "使用 Hardhat 在 Cuckoo Chain 上部署智能合约"
description: "使用 Hardhat 和 TypeScript 在 Cuckoo Chain 的以太坊 L2 上部署智能合约的指南。"
---

本指南将带您逐步完成在 Cuckoo Chain 的以太坊 L2 上使用 Hardhat 和 TypeScript 部署智能合约的过程。

#### 前提条件

- **Node.js 和 npm：** 确保已安装。 [点击这里下载](https://nodejs.org/)。

- **以太坊钱包：** 需要一个包含测试网 $CAI 的 Cuckoo 测试网私钥。可从 [测试网水龙头](https://cuckoo.network/portal/faucet/) 获取。为了安全起见，请使用没有真实资金的新钱包。

- **基础的 Solidity 和 CLI 知识：** 有帮助，但不是必须的！

## 您将学到什么

- 设置基于 TypeScript 的 Hardhat 项目。
- 编写一个简单的以太坊智能合约。
- 配置 Hardhat 以支持 Cuckoo 测试网。
- 在 Cuckoo 上部署您的智能合约。

## 步骤 1：初始化 Hardhat TypeScript 项目

打开您的终端并创建一个新的项目目录，然后进入该目录：

```bash
mkdir my-hardhat-project && cd my-hardhat-project
```

初始化一个 npm 项目：

```bash
npm init -y
```

安装 Hardhat 和 TypeScript 所需的包：

```bash
npm install --save-dev hardhat ts-node typescript @nomiclabs/hardhat-ethers ethers
```

使用 TypeScript 启动一个新的 Hardhat 项目：

```bash
npx hardhat init
```

按照提示操作：

- 选择“创建一个 TypeScript 项目”。
- 选择“是”以添加 `.gitignore`。
- 选择“是”以安装示例项目的依赖项。

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

👷 欢迎使用 Hardhat v2.18.2 👷‍

✔ 您想做什么？ · 创建一个 TypeScript 项目
✔ Hardhat 项目根目录： · /Users/Cuckoo/my-hardhat-project
✔ 您想添加一个 .gitignore 吗？(Y/n) · y
✔ 您想使用 npm 安装这个示例项目的依赖项吗？ (@nomicfoundation/hardhat-toolbox)？(Y/n) · y
```

## 步骤 2：编写智能合约

在 `contracts` 目录中，删除 `Lock.sol` 并创建一个新的文件 `HelloWorld.sol`：

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

## 步骤 3：配置 Hardhat 以支持 Cuckoo

编辑 `hardhat.config.ts` 文件以包含 Cuckoo 测试网设置：

```typescript
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  networks: {
    cuckoo: {
      url: "https://testnet-rpc.cuckoo.network",
      chainId: 1210,
      accounts: ["YOUR_PRIVATE_KEY_HERE"] // 替换为您的私钥
    }
  },
  solidity: "0.8.0",
};

export default config;
```

将 `YOUR_PRIVATE_KEY_HERE` 替换为您的 Cuckoo 测试网私钥。**不要分享您的私钥或将其推送到 GitHub。**

## 步骤 4：编译智能合约

编译智能合约：

```bash
npx hardhat compile
```

## 步骤 5：部署智能合约

在 `scripts` 目录中，创建一个新文件 `deploy.ts`：

```typescript
import { ethers } from "hardhat";

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const gasPrice = ethers.utils.parseUnits('10', 'gwei');
    const gasLimit = 500000;
    const helloWorld = await HelloWorld.deploy({ gasPrice: gasPrice, gasLimit: gasLimit });
    await helloWorld.deployed();
    console.log("HelloWorld 部署到:", helloWorld.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
```

根据需要调整 `gasPrice` 和 `gasLimit`。请查看 [BlockScout](https://testnet-scan.cuckoo.network/) 以获取链的详细信息。

将智能合约部署到 Cuckoo 测试网：

```bash
npx hardhat run scripts/deploy.ts --network cuckoo
```

## 步骤 6：验证部署

在 Cuckoo 测试网区块浏览器 [BlockScout](https://testnet-scan.cuckoo.network/) 上验证智能合约的部署。使用控制台中的合约地址查看其详细信息。

## 结论

恭喜！您已成功使用 Hardhat 和 TypeScript 在 Cuckoo 测试网上部署了一个智能合约。要了解更多关于 Cuckoo 的信息以及如何将代码转化为业务，欢迎加入我们的 [Discord](https://cuckoo.network/dc) 与我们打个招呼 👋。
