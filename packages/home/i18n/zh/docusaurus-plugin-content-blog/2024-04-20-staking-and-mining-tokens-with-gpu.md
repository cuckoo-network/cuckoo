---
title: 使用 GPU 进行质押和挖矿
authors: [lark]
tags: [公司, 路线图]
image: https://cuckoo-network.b-cdn.net/staking-and-mining-tokens.webp
---

Cuckoo Network 是首个去中心化 AI 模型服务市场，为 AI 爱好者、开发者和 GPU 矿工提供加密货币奖励。在我们的平台上，矿工与生成式 AI 应用构建者（也称为协调者）共享他们的 GPU，以为最终客户进行推理，从而使所有贡献者都能赚取加密货币。

![使用 GPU 进行质押和挖矿](https://cuckoo-network.b-cdn.net/staking-and-mining-tokens.webp "使用 GPU 进行质押和挖矿")

> 2024 年 7 月 9 日更新：本文适用于测试网。请查看[此文章](/blog/2024/07/15/cuckoo-network-mining-gpu-july-2024)以获取主网信息。

当矿工共享他们的 GPU 时，如何确保他们没有伪造结果？Cuckoo Network 通过质押、奖励和削减机制建立信任与完整性。今天我们很高兴地宣布，质押者可以加入我们的测试网，为这个去中心化 AI 网络建立信任。

## **立即加入测试网**

对于质押者

1. 从[测试网水龙头](https://cuckoo.network/portal/faucet)获取 CAI 代币
2. 在[质押门户 / 测试网质押](https://cuckoo.network/portal/staking/testnet)上质押代币
3. 为协调者或矿工投票

![Cuckoo 门户 - 质押](https://cuckoo-network.b-cdn.net/staking-portal-screenshot.webp "Cuckoo 门户 - 质押")

对于 GPU 矿工

1. 通过 https://cuckoo.network/tg 或 https://cuckoo.network/dc 联系管理员获取 CAI 代币
2. 在质押门户上质押超过 20K 代币
3. 注册矿工地址和介绍信息。建议矿工地址与您的质押者地址不同。
4. 使用矿工地址的私钥运行矿工节点

对于协调者

1. 通过 https://cuckoo.network/tg 或 https://cuckoo.network/dc 联系管理员获取 CAI 代币
2. 在质押门户上质押超过 200 万代币
3. 注册协调者地址和介绍信息。建议协调者地址与您的质押者地址不同。
4. 使用矿工地址的私钥运行协调者节点

## **如何运作？**

整个系统需要几个角色共同运作：

- **GPU 矿工质押者**：运行计算资源以执行 AI 任务的个人或实体。他们通过钱包持有 CAI 代币并在网络中质押。质押的越多，分配到 GPU 任务的几率就越高。
- **应用构建者（协调者质押者）**：在 Cuckoo Network 上创建 AI 应用的开发者，负责任务分配和质量控制。他们通过钱包持有 CAI 代币并在网络中质押。质押的越多，他们获得愿意合作的 GPU 矿工的几率就越高。
- **质押者**：质押代币以投票支持可信任的矿工和协调者的参与者。他们将为质押行为获得奖励。
- **质押合约**：矿工和协调者注册并由质押者投票的智能合约。
- **协调者节点**：生成式 AI 应用调用该节点的 API，以在网络中提供 GPU 任务（如生成图像的提示）。
- **矿工节点**：GPU 提供者运行矿工节点以承担 GPU 任务执行。

![img](https://cuckoo-network.b-cdn.net/cuckoo-staking@2x.webp)

任务分配和调度是 Cuckoo AI 生态系统中的关键功能，确保任务从协调者到矿工的有效和公平分配。

然而，节点必须在进入系统之前建立信任。因此，所有参与者在承担任何角色之前都必须质押代币。

然后，生成式 AI 应用构建者，也称为协调者，使用已在质押合约中注册的地址的私钥运行协调者节点。该节点从质押合约中读取矿工注册信息，并监听来自矿工节点的请求。

GPU 提供者运行矿工节点，矿工节点也将从质押合约中获取信息，并轮询协调者以获取待处理任务。

当生成式 AI 应用提供任务给协调者时，协调者将根据矿工的质押权重将任务分配给活跃的矿工地址。然后，相应的矿工处理任务，最终将结果提交给协调者。

## **总结**

Cuckoo Network 引入了一个独特的去中心化 AI-to-Earn 平台，强调合作与信任。通过质押机制和激励措施，它确保了所有参与者的真实性和参与度，包括开发者、GPU 矿工和质押者。这种方法保证了任务的可靠分配，并为推进去中心化 AI 技术创造了一个可持续的环境。Cuckoo 邀请更多用户探索其网络，提供 AI 开发的机会，同时赚取加密货币。

- source: https://cuckoo.network/blog/2024/04/20/staking-and-mining-tokens-with-gpu
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc