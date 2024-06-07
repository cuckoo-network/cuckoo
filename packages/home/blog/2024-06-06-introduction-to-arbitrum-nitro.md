---
title: "Introduction to Arbitrum Nitro's Architecture"
authors: [lark]
tags: [engineering, research]
image: https://cuckoo-network.b-cdn.net/introduction-to-arbitrum-nitro.webp
---

Arbitrum Nitro, developed by Offchain Labs, is a second-generation Layer 2 blockchain protocol designed to improve throughput, finality, and dispute resolution. It builds on the original Arbitrum protocol, bringing significant enhancements that cater to modern blockchain needs.

![](https://cuckoo-network.b-cdn.net/introduction-to-arbitrum-nitro.webp)

### Key Properties of Arbitrum Nitro

Arbitrum Nitro operates as a Layer 2 solution on top of Ethereum, supporting the execution of smart contracts using Ethereum Virtual Machine (EVM) code. This ensures compatibility with existing Ethereum applications and tools. The protocol guarantees both safety and progress, assuming the underlying Ethereum chain remains safe and live, and at least one participant in the Nitro protocol behaves honestly.

### Design Approach

Nitro's architecture is built on four core principles:

- **Sequencing Followed by Deterministic Execution:** Transactions are first sequenced, then processed deterministically. This two-phase approach ensures a consistent and reliable execution environment.
- **Geth at the Core:** Nitro utilizes the go-ethereum (geth) package for core execution and state maintenance, ensuring high compatibility with Ethereum.
- **Separate Execution from Proving:** The state transition function is compiled for both native execution and web assembly (wasm) to facilitate efficient execution and structured, machine-independent proving.
- **Optimistic Rollup with Interactive Fraud Proofs:** Building on Arbitrum’s original design, Nitro employs an improved optimistic rollup protocol with a sophisticated fraud proof mechanism.

### Sequencing and Execution

The processing of transactions in Nitro involves two key components: the Sequencer and the State Transition Function (STF).

![Arbitrum Nitro Architecture](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro.webp "Arbitrum Nitro Architecture")

- **The Sequencer**: Orders incoming transactions and commits to this order. It ensures that the transaction sequence is known and reliable, posting it both as a real-time feed and as compressed data batches on the Ethereum Layer 1 chain. This dual approach enhances reliability and prevents censorship.
- **Deterministic Execution**: The STF processes the sequenced transactions, updating the chain state and producing new blocks. This process is deterministic, meaning the outcome depends only on the transaction data and the previous state, ensuring consistency across the network.

### Software Architecture: Geth at the Core

![Arbitrum Nitro Architecture, Layered](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro-architecture-layered.webp "Arbitrum Nitro Architecture, Layered")

Nitro’s software architecture is structured in three layers:

- **Base Layer (Geth Core)**: This layer handles the execution of EVM contracts and maintains the Ethereum state data structures.
- **Middle Layer (ArbOS)**: Custom software that provides Layer 2 functionality, including decompressing sequencer batches, managing gas costs, and supporting cross-chain functionalities.
- **Top Layer**: Drawn from geth, this layer handles connections, incoming RPC requests, and other top-level node functions.

### Cross-Chain Interaction

Arbitrum Nitro supports secure cross-chain interactions through mechanisms like the Outbox, Inbox, and Retryable Tickets.

- **The Outbox**: Enables contract calls from Layer 2 to Layer 1, ensuring that messages are securely transferred and executed on Ethereum.
- **The Inbox**: Manages transactions sent to Nitro from Ethereum, ensuring they are included in the correct order.
- **Retryable Tickets**: Allows for the resubmission of failed transactions, ensuring reliability and reducing the risk of lost transactions.

### Gas and Fees

Nitro employs a sophisticated gas metering and pricing mechanism to manage transaction costs:

- **L2 Gas Metering and Pricing**: Tracks gas usage and adjusts the base fee algorithmically to balance demand and capacity.
- **L1 Data Metering and Pricing**: Ensures costs associated with Layer 1 interactions are covered, using an adaptive pricing algorithm to apportion these costs accurately among transactions.

### Conclusion

Cuckoo Network is confident in investing in Arbitrum's development. Arbitrum Nitro's advanced Layer 2 solutions offer unmatched scalability, faster finality, and efficient dispute resolution. Its compatibility with Ethereum ensures a secure, efficient environment for our decentralized applications, aligning with our commitment to innovation and performance.


- source: https://cuckoo.network/blog/2024/06/06/introduction-to-arbitrum-nitro
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc
