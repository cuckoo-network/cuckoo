---
title: "Arbitrum Nitro架构简介"
authors: [lark]
tags: [工程, 研究]
image: https://cuckoo-network.b-cdn.net/introduction-to-arbitrum-nitro.webp
---

Arbitrum Nitro由Offchain Labs开发，是一款第二代Layer 2区块链协议，旨在提升吞吐量、最终性和争议解决能力。它基于原始Arbitrum协议，带来了显著的增强，以满足现代区块链的需求。

![](https://cuckoo-network.b-cdn.net/introduction-to-arbitrum-nitro.webp)

### Arbitrum Nitro的关键特性

Arbitrum Nitro作为以太坊上的Layer 2解决方案，支持使用以太坊虚拟机（EVM）代码执行智能合约。这确保了与现有以太坊应用程序和工具的兼容性。该协议保证了安全性和进展，前提是底层以太坊链保持安全和活跃，并且至少有一个Nitro协议参与者表现诚实。

### 设计思路

Nitro的架构基于四个核心原则：

- **顺序执行后确定性执行**：交易首先排序，然后按顺序执行。这种两阶段的方法确保了一个一致且可靠的执行环境。
- **Geth为核心**：Nitro利用go-ethereum（geth）包进行核心执行和状态维护，确保与以太坊的高度兼容性。
- **将执行与证明分离**：状态转换函数被编译为本地执行和WebAssembly（wasm），以促进高效执行和结构化的、与机器无关的证明。
- **采用交互式欺诈证明的乐观汇总**：基于Arbitrum的原始设计，Nitro采用了改进的乐观汇总协议，并配有复杂的欺诈证明机制。

### 排序与执行

Nitro中的交易处理涉及两个关键组件：排序器和状态转换函数（STF）。

![Arbitrum Nitro架构](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro.webp "Arbitrum Nitro架构")

- **排序器**：对传入交易进行排序并对该顺序进行承诺。它确保交易顺序是已知且可靠的，既作为实时数据流发布，也作为压缩数据批次发布到以太坊Layer 1链上。这种双重方法增强了可靠性并防止了审查。
- **确定性执行**：STF处理排序后的交易，更新链状态并生成新块。这个过程是确定性的，意味着结果仅依赖于交易数据和先前状态，确保了网络中的一致性。

### 软件架构：Geth为核心

![Arbitrum Nitro架构，分层](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro-architecture-layered.webp "Arbitrum Nitro架构，分层")

Nitro的软件架构分为三层：

- **基础层（Geth核心）**：此层处理EVM合约的执行，并维护以太坊状态数据结构。
- **中间层（ArbOS）**：自定义软件，提供Layer 2功能，包括解压排序器批次、管理gas成本和支持跨链功能。
- **顶层**：从geth引入，此层处理连接、传入的RPC请求以及其他顶级节点功能。

### 跨链交互

Arbitrum Nitro通过Outbox、Inbox和可重试票据等机制支持安全的跨链交互。

- **Outbox**：允许从Layer 2到Layer 1的合约调用，确保消息在以太坊上安全传输和执行。
- **Inbox**：管理从以太坊发送到Nitro的交易，确保它们以正确的顺序被包含。
- **可重试票据**：允许重新提交失败的交易，确保可靠性并减少丢失交易的风险。

### Gas和费用

Nitro采用了复杂的gas计量和定价机制来管理交易成本：

- **L2 Gas计量与定价**：跟踪gas使用情况并通过算法调整基础费用，以平衡需求和容量。
- **L1数据计量与定价**：确保覆盖与Layer 1交互相关的成本，使用自适应定价算法来准确分配这些成本。

### 结论

Cuckoo Network对投资Arbitrum的发展充满信心。Arbitrum Nitro的先进Layer 2解决方案提供了无与伦比的可扩展性、更快的最终性和高效的争议解决能力。其与以太坊的兼容性为我们的去中心化应用程序提供了安全、高效的环境，与我们对创新和性能的承诺相一致。

- 来源: https://cuckoo.network/blog/2024/06/06/introduction-to-arbitrum-nitro
- Telegram: https://cuckoo.network/tg
- Discord: https://cuckoo.network/dc