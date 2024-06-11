---
title: Staking and mining tokens with GPU
authors: [lark]
tags: [company]
image: https://cuckoo-network.b-cdn.net/staking-and-mining-tokens.webp
---

Cuckoo Network is the first Decentralized AI Model Serving Marketplace rewarding AI enthusiasts, developers, and GPU miners with crypto tokens. On our platform, miners share their GPUs with generative AI app builders, aka coordinators, in order to run inference for end customers, so that all the contributors can earn crypto tokens.

![Staking and mining tokens with GPU](https://cuckoo-network.b-cdn.net/staking-and-mining-tokens.webp "Staking and mining tokens with GPU")

When miners share their GPUs, how to ensure they are not faking results? Cuckoo Network establishes trust and integrity through staking, rewards, and slashing. Today we are glad to announce that stakers can join our testnet and secure trust for this decentralized AI network.

## **Join the testnet today**

For stakers

1. Get CAI tokens from [faucet](https://cuckoo.network/portal/faucet)
2. Stake tokens at the [staking portal](https://cuckoo.network/portal/staking)
3. Vote for coordinators or miners

![Cuckoo Portal - Staking](https://cuckoo-network.b-cdn.net/staking-portal-screenshot.webp "Cuckoo Portal - Staking")

For GPU miners

1. Get CAI tokens by contacting admins from https://cuckoo.network/tg or https://cuckoo.network/dc
2. Stake > 20K tokens at the staking portal
3. Register minerAddress and introduction information. The minerAddress is recommended to be different from your staker address.
4. Run miner node with the minerAddress’s private key

For Coordinators

1. Get CAI tokens by contacting admins from https://cuckoo.network/tg or https://cuckoo.network/dc
2. Stake > 2M tokens at the staking portal
3. Register coordinatorAddress and introduction information. The coordinatorAddress is recommended to be different from your staker address.
4. Run the coordinator node with the minerAddress’s private key

## **How it works?**

The entire system takes a couple of roles to work together:

- **GPU Miner Staker:** Individuals or entities running computation resources to execute AI tasks. They hold CAI tokens with a wallet to stake in the network. The more they stake, the higher the chances that they will get assigned GPU tasks.
- **App Builders (Coordinator Staker):** Developers creating AI applications on top of Cuckoo Network, overseeing task distribution and quality control. They carry CAI tokens with a wallet to stake in the network. The more they stake, the higher the chances that they will get GPU miners who are willing to work with them.
- **Stakers:** Participants who stake tokens to vote for trustworthy Miners and coordinators. They will be rewarded for their stakes.
- **Staking Contract:** A smart contract where Miners and coordinators register and stakers vote for them.
- **Coordinator Node**: Generative AI applications call APIs of this node to offer GPU tasks like prompt to generate images in the network.
- **Miner Node**: GPU providers run miner node to undertake the task execution with GPUs.

![img](https://cuckoo-network.b-cdn.net/cuckoo-staking@2x.webp)

Task assignment and scheduler is a critical function within the Cuckoo AI ecosystem, ensuring efficient and fair distribution of tasks from coordinators to Miners.

However, nodes must establish trust before getting into the system. Thus, all participants must stake tokens before they take any roles.

Then, generative AI app builders, aka coordinators, run the coordinator node with a private key whose address has been registered with the staking contracts. This node reads miner registration from the staking contracts and then listens to requests coming from miner nodes.

GPU providers run the miner node which will fetch info from staking contracts as well and poll the coordinators for pending tasks.

When the generative AI app offers a task to the coordinator, the coordinator will assign the task to the active miner addresses according to their stakes as weights. Then the corresponding miners work on the task and finally submit the results to the coordinator.

## **Summary**

The Cuckoo Network introduces a unique decentralized AI-to-Earn platform, emphasizing collaboration and trust. By employing staking mechanisms and incentives, it ensures the authenticity and engagement of all participants, including developers, GPU miners, and stakers. This approach guarantees reliable task distribution and fosters a sustainable environment for advancing decentralized AI technologies. Cuckoo invites more users to explore its network, offering them the opportunity to contribute to AI development while earning cryptocurrency.

- source: https://cuckoo.network/blog/2024/04/20/staking-and-mining-tokens-with-gpu
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc
