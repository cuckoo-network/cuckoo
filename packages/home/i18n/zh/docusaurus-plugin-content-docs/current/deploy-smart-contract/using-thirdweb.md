# Deploying a Smart Contract on Cuckoo with Thirdweb CLI & Dashboard

Thirdweb is a robust web3 development framework designed to seamlessly connect your apps and games to decentralized networks. With the recent integration of Cuckoo, you can leverage Thirdweb's features to deploy and manage your smart contracts efficiently.

This guide assumes you have an **Ethereum Wallet** with a private key for the Cuckoo Testnet that has testnet $CAI. Get it from [Testnet Faucets](https://cuckoo.network/portal/faucet/). Use a new wallet without real funds for security.

## Step 1: Install Thirdweb CLI

Begin by installing the Thirdweb CLI globally. Open your terminal and execute the following command:

```bash
npm install -g thirdweb
```

Verify the installation:

```bash
thirdweb --version
```

For detailed instructions, refer to the [official documentation](https://portal.thirdweb.com/cli/create).

## Step 2: Set Up Your Local Environment

Create a new project on your local machine:

```bash
npx thirdweb create
```

Follow the prompts to set up your environment. In this tutorial, we will deploy an ERC-20 token with the Drop extension, enabling minting, burning, and airdropping tokens via the dashboard. Thirdweb provides audited contracts ready for deployment.

Refer to the screenshot below to create an example smart contract, or use your own code.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-1.webp)

After setup, you will have a folder named "my-token" (or your chosen project name). Open this folder in your preferred code editor to view or modify the smart contract.

## Step 3: Obtain a Thirdweb API Key

Thirdweb services require an API key. Follow these steps to create one:

1. Visit [Thirdweb API Keys](https://thirdweb.com/dashboard/settings/api-keys).
2. Connect your wallet and sign the prompt in Metamask (or your preferred wallet).
3. Switch to the Cuckoo network and create an API key.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-2.webp)

Follow the steps shown below:

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-3.webp)

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-4.webp)

Ensure you securely store your Client ID and Secret Key.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-5.webp)

## Step 4: Deploy Your Smart Contract

Run the following command at the root of your project to deploy your contract:

```bash
npx thirdweb deploy
```

You will see a prompt similar to this:

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-6.webp)

If your browser doesn't open automatically, copy the link from the terminal and paste it into your browser. Select the Cuckoo testnet network from the list.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-7.webp)

Fill in the contract parameters and click "Deploy Now". Ensure you have enough ETH on Cuckoo for gas fees. Tick the box to add a dashboard for the contract, enabling enhanced interaction features.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-8.webp)

You will need to sign a gasless transaction to approve the dashboard.

## Step 5: Utilize the Smart Contract Dashboard

To manage your contracts, visit the [Thirdweb Contracts Dashboard](https://thirdweb.com/dashboard/contracts). Here, you can view all your deployed contracts.

Click on a contract to access its dashboard and start interacting with it. The explorer tab lets you view and use all the read-and-write methods of your contract.

One of the most useful features is the "Build" tab, which provides code snippets for programmatically connecting to your contract using various languages and frameworks, such as JavaScript, React, and Python.

Congratulations! You've successfully deployed a smart contract on Cuckoo using the Thirdweb CLI. To learn more about Cuckoo and its potential, join our [Discord](https://cuckoo.network/dc) and say hello 👋.