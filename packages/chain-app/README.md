https://blog.thirdweb.com/guides/build-an-erc20-staking-smart-contract-web-application/




> [!Important]  
> This repository is referencing the `mumbai` chain.
> 
> `Mumbai` [is deprecated since 08/04/2024](https://blog.thirdweb.com/deprecation-of-mumbai-testnet/), meaning the code in this repository will no longer work out of the box.
>
> You can still use this repository, however you will have to switch any references to `mumbai` to another chain.

# ERC20 Staking App

Allow users to stake their ERC20 tokens in return for more/other ERC20 tokens!

In this repo, we are using [thirdweb ContractKit](https://thirdweb.com/contractkit) and writing a custom ERC-20 staking contract.

You can read [the guide associated to this repo](https://blog.thirdweb.com/build-an-erc20-staking-smart-contract-web-application/).

## Installation

Install via [thirdweb create](https://portal.thirdweb.com/cli/create)

```bash
  npx thirdweb create --template erc20-staking-app
```

## Run Locally

Install dependencies

```bash
  # npm
  npm install

  # yarn
  yarn install
```

Start the server

```bash
  # npm
  npm run start

  # yarn
  yarn start
```

## Environment Variables

To run this project, you will need to add environment variables. Check the `.env.example` file for all the environment variables required and add it to `.env.local` file or set them up on your hosting provider.

## Deployment

Deploy a copy of your application to IPFS using the following command:

```bash
  yarn deploy
```

## Additional Resources

- [Documentation](https://portal.thirdweb.com)
- [Templates](https://thirdweb.com/templates)
- [Video Tutorials](https://youtube.com/thirdweb_)
- [Blog](https://blog.thirdweb.com)

## Contributing

Contributions and [feedback](https://feedback.thirdweb.com) are always welcome! Please check our [open source page](https://thirdweb.com/open-source) for more information.

## Need help?

For help, join the [discord](https://discord.gg/thirdweb) or visit our [support page](https://support.thirdweb.com).
