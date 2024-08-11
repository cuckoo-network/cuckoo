# 使用 Thirdweb CLI 和仪表板在 Cuckoo 上部署智能合约

Thirdweb 是一个强大的 Web3 开发框架，旨在将您的应用程序和游戏无缝连接到去中心化网络。随着 Cuckoo 的集成，您可以利用 Thirdweb 的功能高效地部署和管理智能合约。

本指南假设您已拥有一个带有 Cuckoo 测试网私钥的 **以太坊钱包**，并且拥有测试网 $CAI。您可以从 [测试网水龙头](https://cuckoo.network/portal/faucet/) 获取它。为了安全起见，请使用没有真实资金的新钱包。

## 步骤 1：安装 Thirdweb CLI

首先，在全球范围内安装 Thirdweb CLI。打开您的终端并执行以下命令：

```bash
npm install -g thirdweb
```

验证安装：

```bash
thirdweb --version
```

有关详细说明，请参阅 [官方文档](https://portal.thirdweb.com/cli/create)。

## 步骤 2：设置本地环境

在您的本地计算机上创建一个新项目：

```bash
npx thirdweb create
```

按照提示设置您的环境。在本教程中，我们将部署一个带有 Drop 扩展的 ERC-20 代币，允许通过仪表板进行代币的铸造、销毁和空投。Thirdweb 提供了经过审计的合约，准备好进行部署。

参阅下面的截图以创建示例智能合约，或使用您自己的代码。

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-1.webp)

设置完成后，您将拥有一个名为 "my-token"（或您选择的项目名称）的文件夹。使用您喜欢的代码编辑器打开该文件夹以查看或修改智能合约。

## 步骤 3：获取 Thirdweb API 密钥

Thirdweb 服务需要 API 密钥。按照以下步骤创建一个：

1. 访问 [Thirdweb API Keys](https://thirdweb.com/dashboard/settings/api-keys)。
2. 连接您的钱包并在 Metamask（或您喜欢的钱包）中签署提示。
3. 切换到 Cuckoo 网络并创建一个 API 密钥。

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-2.webp)

按照下面显示的步骤操作：

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-3.webp)

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-4.webp)

确保安全存储您的 Client ID 和 Secret Key。

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-5.webp)

## 步骤 4：部署您的智能合约

在项目根目录运行以下命令以部署您的合约：

```bash
npx thirdweb deploy
```

您将看到类似如下的提示：

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-6.webp)

如果您的浏览器没有自动打开，请从终端复制链接并将其粘贴到浏览器中。从列表中选择 Cuckoo 测试网。

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-7.webp)

填写合约参数并点击 "Deploy Now"。确保您在 Cuckoo 上有足够的 ETH 以支付 Gas 费用。勾选框以为合约添加仪表板，启用增强的交互功能。

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-8.webp)

您需要签署一个无 Gas 交易以批准仪表板。

## 步骤 5：使用智能合约仪表板

要管理您的合约，请访问 [Thirdweb 合约仪表板](https://thirdweb.com/dashboard/contracts)。在这里，您可以查看所有已部署的合约。

点击一个合约以访问其仪表板并开始与其互动。Explorer 选项卡允许您查看和使用合约的所有读写方法。

其中一个最有用的功能是 "Build" 选项卡，它提供了用于使用各种语言和框架（如 JavaScript、React 和 Python）以编程方式连接到合约的代码片段。

恭喜！您已成功使用 Thirdweb CLI 在 Cuckoo 上部署了一个智能合约。要了解更多关于 Cuckoo 及其潜力的信息，请加入我们的 [Discord](https://cuckoo.network/dc) 并向我们打个招呼 👋。
