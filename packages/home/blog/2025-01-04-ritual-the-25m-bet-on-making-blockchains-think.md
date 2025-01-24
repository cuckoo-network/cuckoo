---
title: "Ritual: The $25M Bet on Making Blockchains Think"
tags: [blockchain, AI, decentralized computing, smart contracts]
keywords: [Ritual, blockchain AI, decentralized AI, smart contracts, Web3 infrastructure]
authors: [lark]
description: Ritual, a startup founded by former Polychain investor Niraj Pant and Akilesh Potti, is pioneering the integration of AI capabilities into blockchain environments, backed by a $25M Series A. The company aims to revolutionize smart contracts and decentralized applications with AI-driven functionalities.
image: https://cuckoo-portal-frontend.onrender.com/api/og?title=Ritual:%20The%20$25M%20Bet%20on%20Making%20Blockchains%20Think
---

# Ritual: The $25M Bet on Making Blockchains Think

Ritual, founded in 2023 by former Polychain investor Niraj Pant and Akilesh Potti, is an ambitious project at the intersection of blockchain and AI. Backed by a $25M Series A led by Archetype and strategic investment from Polychain Capital, the company aims to address critical infrastructure gaps in enabling complex on-chain and off-chain interactions. With a team of 30 experts from leading institutions and firms, Ritual is building a protocol that integrates AI capabilities directly into blockchain environments, targeting use cases like natural-language-generated smart contracts and dynamic market-driven lending protocols.

![Ritual: The $25M Bet on Making Blockchains Think](https://cuckoo-portal-frontend.onrender.com/api/og?title=Ritual:%20The%20$25M%20Bet%20on%20Making%20Blockchains%20Think)

## Why Customers Need Web3 for AI

The integration of Web3 and AI can alleviate many limitations seen in traditional, centralized AI systems.

1. **Decentralized infrastructure helps reduce the risk of manipulation**: when AI computations and model outputs are executed by multiple, independently operated nodes, it becomes far more difficult for any single entity—be it the developer or a corporate intermediary—to tamper with results. This bolsters user confidence and transparency in AI-driven applications.

2. **Web3-native AI expands the scope of on-chain smart contracts beyond just basic financial logic**. With AI in the loop, contracts can respond to real-time market data, user-generated prompts, and even complex inference tasks. This enables use cases such as algorithmic trading, automated lending decisions, and in-chat interactions (e.g., FrenRug) that would be impossible under existing, siloed AI APIs. Because the AI outputs are verifiable and integrated with on-chain assets, these high-value or high-stakes decisions can be executed with greater trust and fewer intermediaries.

3. **Distributing the AI workload across a network can potentially lower costs and enhance scalability**. Even though AI computations can be expensive, a well-designed Web3 environment draws from a global pool of compute resources rather than a single centralized provider. This opens up more flexible pricing, improved reliability, and the possibility for continuous, on-chain AI workflows—all underpinned by shared incentives for node operators to offer their computing power.

## Ritual's Approach

The system has three main layers—**Infernet Oracle**, **Ritual Chain** (infrastructure and protocol), and **Native Applications**—each designed to address different challenges in the Web3 x AI space.

### 1. **Infernet Oracle**

- **What It Does**
  Infernet is Ritual’s first product, acting as a bridge between on-chain smart contracts and off-chain AI compute. Rather than just fetching external data, it coordinates AI model inference tasks, collects results, and returns them on-chain in a verifiable manner.
- **Key Components**
  - **Containers**: Secure environments to host any AI/ML workload (e.g., ONNX, Torch, Hugging Face models, GPT-4).
  - **infernet-ml**: An optimized library for deploying AI/ML workflows, offering ready-to-use integrations with popular model frameworks.
  - **Infernet SDK**: Provides a standardized interface so developers can easily write smart contracts that request and consume AI inference results.
  - **Infernet Nodes**: Deployed on services like GCP or AWS, these nodes listen for on-chain inference requests, execute tasks in containers, and deliver results back on-chain.
  - **Payment & Verification**: Manages fee distribution (between compute and verification nodes) and supports various verification methods to ensure tasks are executed honestly.
- **Why It Matters**
  Infernet goes beyond a traditional oracle by verifying off-chain AI computations, not just data feeds. It also supports scheduling repeated or time-sensitive inference jobs, reducing the complexity of linking AI-driven tasks to on-chain applications.

### 2. **Ritual Chain**

Ritual Chain integrates AI-friendly features at both the infrastructure and protocol layers. It is designed to handle frequent, automated, and complex interactions between smart contracts and off-chain compute, extending far beyond what typical L1s can manage.

#### 2.1 **Infrastructure Layer**

- **What It Does**
  Ritual Chain’s infrastructure supports more complex AI workflows than standard blockchains. Through precompiled modules, a scheduler, and an EVM extension called EVM++, it aims to facilitate frequent or streaming AI tasks, robust account abstractions, and automated contract interactions.

- **Key Components**

  - Precompiled Modules

    :

    - **EIP Extensions (e.g., EIP-665, EIP-5027)** remove code-length limits, reduce gas for signatures, and enable trust between chain and off-chain AI tasks.
    - **Computational Precompiles** standardize frameworks for AI inference, zero-knowledge proofs, and model fine-tuning within smart contracts.

  - **Scheduler**: Eliminates reliance on external “Keeper” contracts by allowing tasks to run on a fixed schedule (e.g., every 10 minutes). Crucial for continuous AI-driven activities.

  - **EVM++**: Enhances the EVM with native account abstraction (EIP-7702), letting contracts auto-approve transactions for a set period. This supports continuous AI-driven decisions (e.g., auto-trading) without human intervention.

- **Why It Matters**
  By embedding AI-focused features directly into its infrastructure, Ritual Chain streamlines complex, repetitive, or time-sensitive AI computations. Developers gain a more robust and automated environment to build truly “intelligent” dApps.

#### 2.2 **Consensus Protocol Layer**

- **What It Does**
  Ritual Chain’s protocol layer addresses the need to manage diverse AI tasks efficiently. Large inference jobs and heterogeneous compute nodes require special fee-market logic and a novel consensus approach to ensure smooth execution and verification.
- **Key Components**
  - Resonance (Fee Market):
    - Introduces “auctioneer” and “broker” roles to match AI tasks of varying complexity with suitable compute nodes.
    - Employs near-exhaustive or “bundled” task allocation to maximize network throughput, ensuring powerful nodes handle complex tasks without stalling.
  - Symphony (Consensus):
    - Splits AI computations into parallel sub-tasks for verification. Multiple nodes validate process steps and outputs separately.
    - Prevents large AI tasks from overloading the network by distributing verification workloads across multiple nodes.
  - vTune:
    - Demonstrates how to verify node-performed model fine-tuning on-chain by using “backdoor” data checks.
    - Illustrates Ritual Chain’s broader capability to handle longer, more intricate AI tasks with minimal trust assumptions.
- **Why It Matters**
  Traditional fee markets and consensus models struggle with heavy or diverse AI workloads. By redesigning both, Ritual Chain can dynamically allocate tasks and verify results, expanding on-chain possibilities far beyond basic token or contract logic.

### 3. **Native Applications**

- **What They Do**
  Building on Infernet and Ritual Chain, native applications include a model marketplace and a validation network, showcasing how AI-driven functionality can be natively integrated and monetized on-chain.
- **Key Components**
  - Model Marketplace:
    - Tokenizes AI models (and possibly fine-tuned variants) as on-chain assets.
    - Lets developers buy, sell, or license AI models, with proceeds rewarded to model creators and compute/data providers.
  - Validation Network & “Rollup-as-a-Service”:
    - Offers external protocols (e.g., L2s) a reliable environment for computing and verifying complex tasks like zero-knowledge proofs or AI-driven queries.
    - Provides customized rollup solutions leveraging Ritual’s EVM++, scheduling features, and fee-market design.
- **Why It Matters**
  By making AI models directly tradable and verifiable on-chain, Ritual extends blockchain functionality into a marketplace for AI services and datasets. The broader network can also tap Ritual’s infrastructure for specialized compute, forming a unified ecosystem where AI tasks and proofs are both cheaper and more transparent.

### Ritual’s Ecosystem Development

Ritual’s vision of an “open AI infrastructure network” goes hand-in-hand with forging a robust ecosystem. Beyond the core product design, the team has built partnerships across model storage, compute, proof systems, and AI applications to ensure each layer of the network receives expert support. At the same time, Ritual invests heavily in developer resources and community growth to foster real-world use cases on its chain.

1. **Ecosystem Collaborations**
  - **Model Storage & Integrity**: Storing AI models with Arweave ensures they remain tamper-proof.
  - **Compute Partnerships**: IO.net supplies decentralized compute matching Ritual’s scaling needs.
  - **Proof Systems & Layer-2**: Collaborations with Starkware and Arbitrum extend proof-generation capabilities for EVM-based tasks.
  - **AI Consumer Apps**: Partnerships with Myshell and Story Protocol bring more AI-powered services on-chain.
  - **Model Asset Layer**: Pond, Allora, and 0xScope provide additional AI resources and push on-chain AI boundaries.
  - **Privacy Enhancements**: Nillion strengthens Ritual Chain’s privacy layer.
  - **Security & Staking**: EigenLayer helps secure and stake on the network.
  - **Data Availability**: EigenLayer and Celestia modules enhance data availability, vital for AI workloads.
2. **Application Expansion**
  - **Developer Resources**: Comprehensive guides detail how to spin up AI containers, run PyTorch, and integrate GPT-4 or Mistral-7B into on-chain tasks. Hands-on examples—like generating NFTs via Infernet—lower barriers for newcomers.
  - **Funding & Acceleration**: Ritual Altar accelerator and the Ritual Realm project provide capital and mentorship to teams building dApps on Ritual Chain.
  - Notable Projects:
    - **Anima**: Multi-agent DeFi assistant that processes natural-language requests across lending, swaps, and yield strategies.
    - **Opus**: AI-generated meme tokens with scheduled trading flows.
    - **Relic**: Incorporates AI-driven predictive models into AMMs, aiming for more flexible and efficient on-chain trading.
    - **Tithe**: Leverages ML to dynamically adjust lending protocols, improving yield while lowering risk.

By aligning product design, partnerships, and a diverse set of AI-driven dApps, Ritual positions itself as a multifaceted hub for Web3 x AI. Its ecosystem-first approach—complemented by ample developer support and real funding opportunities—lays the groundwork for broader AI adoption on-chain.

## Ritual’s Outlook

Ritual’s product plans and ecosystem look promising, but many technical gaps remain. Developers still need to solve fundamental problems like setting up model-inference endpoints, speeding up AI tasks, and coordinating multiple nodes for large-scale computations. For now, the core architecture can handle simpler use cases; the real challenge is inspiring developers to build more imaginative AI-powered applications on-chain.

Down the road, Ritual might focus less on finance and more on making compute or model assets tradable. This would attract participants and strengthen network security by tying the chain’s token to practical AI workloads. Although details on the token design are still unclear, it’s clear that Ritual’s vision is to spark a new generation of complex, decentralized, AI-driven applications—pushing Web3 into deeper, more creative territory.
