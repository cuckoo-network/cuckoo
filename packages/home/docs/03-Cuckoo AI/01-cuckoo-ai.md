# Cuckoo AI

**Decentralized Model Serving **

As we embark on the journey to decentralize artificial intelligence technically, this document aims to provide a comprehensive guide to developers, Miners, app builders, and stakeholders involved in the Cuckoo AI ecosystem. Here, we outline the core components, interactions, and procedures critical to ensuring a seamless and trustworthy decentralized AI network.

## Overview

Cuckoo AI leverages blockchain technology to create a decentralized platform where AI tasks are distributed among a network of Miners, while app builders and coordinators ensure the quality and relevance of AI outputs. This ecosystem is powered by the Cuckoo Pay, a blockchain-based payment system facilitating transactions within the platform.

### Key Components

1. **Miners:** Individuals or entities running computation resources to execute AI tasks.
2. **App Builders (Coordinator Nodes):** Developers creating AI applications on top of Cuckoo AI, overseeing task distribution and quality control.
3. **Stakers:** Participants who stake tokens to vote for trustworthy Miners and coordinators.
4. **Staking Contract:** A smart contract where Miners and coordinators register and stakers vote for them.
5. **Blob Storage:** A decentralized storage solution for saving the output of AI tasks.
6. **Cuckoo Pay:** The payment system for transactions within the Cuckoo AI ecosystem.

### Workflow

1. Miners register themselves with the staking contract and stake tokens.
2. App builders register their coordinator nodes with the staking contract.
3. Stakers vote for the Miners and coordinators they trust.
4. Coordinators consult the staking info to assign tasks to the queue.
5. Miners are assigned tasks by coordinators, execute them, and upload the results to the blob storage.
6. Coordinators validate the results from the blob storage and initiate payments to the Miners.
7. Miners periodically check for payments and can block malicious coordinators.
8. Customers from various blockchains pay for AI services using Cuckoo Pay.

## Task Assignment

Task assignment and scheduler is a critical function within the Cuckoo AI ecosystem, ensuring efficient and fair distribution of tasks from coordinators to Miners.

Task Offering: Content coordinators list AI tasks with specified parameters and an offering price.

Task Bidding: Miners select tasks based on a weighted system, considering their stake relative to the total, and place bids at potentially lower prices. Content coordinators then select up to four bidders to execute the task based on the bids and the Miners' account balances, providing the details.

Settlement: At the day's end, coordinators distribute settlement tokens to the Miners, completing the payment process for executed tasks.

## Governance

The Cuckoo AI platform incorporates mechanisms to maintain trust and integrity within the ecosystem through slashing conditions for non-compliant behavior.

### Slashing Conditions

For Bad Coordinators that fails to pay for completed tasks, Cuckoo DAO will rate down or even blocklist the coordinator.

For Bad Miners that fail to execute or upload unsatisfactory results, coordinator will cease to pay tokens.

In cases of disputes, Miners can submit proof to designated slashers and initiate a block against non-compliant coordinators, safeguarding the ecosystem's integrity.
