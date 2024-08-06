# Deploying a Smart Contract on Cuckoo Chain with Hardhat

This guide walks you through deploying a smart contract on Cuckoo Chain’s Ethereum L2 using Hardhat and TypeScript.

#### Prerequisites

- **Node.js and npm:** Ensure both are installed. [Download here](https://nodejs.org/).

- **Ethereum Wallet:** A private key for the Cuckoo Testnet that has testnet $CAI. Get it from [Testnet Faucets](https://cuckoo.network/portal/faucet/). Use a new wallet without real funds for security.

- **Basic Solidity and CLI knowledge:** Helpful but not mandatory!

## What You'll Learn

- Setting up a TypeScript-based Hardhat project.
- Writing a simple Ethereum smart contract.
- Configuring Hardhat for Cuckoo Testnet.
- Deploying your smart contract on Cuckoo.

## Step 1: Initialize a Hardhat TypeScript Project

Open your terminal and create a new project directory, then navigate into it:

```bash
mkdir my-hardhat-project && cd my-hardhat-project
```

Initialize an npm project:

```bash
npm init -y
```

Install the necessary packages for Hardhat and TypeScript:

```bash
npm install --save-dev hardhat ts-node typescript @nomiclabs/hardhat-ethers ethers
```

Start a new Hardhat project with TypeScript:

```bash
npx hardhat init
```

Follow the prompts:

- Choose "Create a TypeScript project".
- Select "Yes" for adding a `.gitignore`.
- Select "Yes" for installing the sample project's dependencies.

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

👷 Welcome to Hardhat v2.18.2 👷‍

✔ What do you want to do? · Create a TypeScript project
✔ Hardhat project root: · /Users/Cuckoo/my-hardhat-project
✔ Do you want to add a .gitignore? (Y/n) · y
✔ Do you want to install this sample project's dependencies with npm (@nomicfoundation/hardhat-toolbox)? (Y/n) · y
```

## Step 2: Write the Smart Contract

In the `contracts` directory, delete `Lock.sol` and create a new file `HelloWorld.sol`:

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

## Step 3: Configure Hardhat for Cuckoo

Edit the `hardhat.config.ts` file to include Cuckoo Testnet settings:

```typescript
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  networks: {
    cuckoo: {
      url: "https://testnet-rpc.cuckoo.network",
      chainId: 1210,
      accounts: ["YOUR_PRIVATE_KEY_HERE"] // Replace with your private key
    }
  },
  solidity: "0.8.0",
};

export default config;
```

Replace `YOUR_PRIVATE_KEY_HERE` with your Cuckoo Testnet private key. **Do not share your private key or push it to GitHub.**

## Step 4: Compile the Smart Contract

Compile the smart contract:

```bash
npx hardhat compile
```

## Step 5: Deploy the Smart Contract

In the `scripts` directory, create a new file `deploy.ts`:

```typescript
import { ethers } from "hardhat";

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const gasPrice = ethers.utils.parseUnits('10', 'gwei');
    const gasLimit = 500000;
    const helloWorld = await HelloWorld.deploy({ gasPrice: gasPrice, gasLimit: gasLimit });
    await helloWorld.deployed();
    console.log("HelloWorld deployed to:", helloWorld.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
```

Adjust `gasPrice` and `gasLimit` as needed. Check [BlockScout](https://testnet-scan.cuckoo.network/) for chain details.

Deploy the smart contract to the Cuckoo Testnet:

```bash
npx hardhat run scripts/deploy.ts --network cuckoo
```

## Step 6: Verify Deployment

Verify your smart contract's deployment on the Cuckoo Testnet block explorer: [BlockScout](https://testnet-scan.cuckoo.network/). Use the contract address from the console to view its details.

## Conclusion

Congratulations! You've successfully deployed a smart contract on the Cuckoo Testnet using Hardhat and TypeScript. To learn more about Cuckoo and how to turn your code into a business, join our [Discord](https://cuckoo.network/dc) and say hello 👋.	