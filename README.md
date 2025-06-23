![cuckoo-preview](https://github.com/cuckoo-network/cuckoo/assets/165338234/a92a2775-fd38-4690-ae17-65c6301ffc29)

<p align="center">
  <a href="https://cuckoo.network">Cuckoo Network</a> ·
  <a href="https://cuckoo.network/docs/cuckoo-network">Documentation</a>
</p>

<p align="center">
    <a href="https://cuckoo.network/dc" target="_blank">
        <img src="https://img.shields.io/discord/1228809366283616357?logo=discord&labelColor=%20%235461eb&logoColor=%20%23f5f5f5&color=%20%235462eb"
            alt="chat on Discord"></a>
    <a href="https://twitter.com/intent/follow?screen_name=CuckooNetworkHQ" target="_blank">
        <img src="https://img.shields.io/twitter/follow/CuckooNetworkHQ?logo=X&color=%20%23f5f5f5"
            alt="follow on Twitter"></a>
    <a href="https://github.com/cuckoo-network/cuckoo/graphs/commit-activity" target="_blank">
        <img alt="Commits last month" src="https://img.shields.io/github/commit-activity/m/cuckoo-network/cuckoo?labelColor=%20%2332b583&color=%20%2312b76a"></a>
    <a href="https://github.com/cuckoo-network/cuckoo/" target="_blank">
        <img alt="Issues closed" src="https://img.shields.io/github/issues-search?query=repo%3Acuckoo-network%2Fcuckoo%20is%3Aclosed&label=issues%20closed&labelColor=%20%237d89b0&color=%20%235d6b98"></a>
    <a href="https://github.com/cuckoo-network/cuckoo/discussions/" target="_blank">
        <img alt="Discussion posts" src="https://img.shields.io/github/discussions/cuckoo-network/cuckoo?labelColor=%20%239b8afb&color=%20%237a5af8"></a>
    <a href="https://cuckoo.network/tg" target="_blank">
        <img alt="Telegram" src="https://img.shields.io/badge/Telegram-%40CuckooNetworkOfficial-%2326A5E4?logo=telegram&style=flat"></a>
</p>

Cuckoo is a Decentralized AI Platform, starting with GPU-sharing for text-to-image generation and LLM inference.

Generate image now in Telegram https://cuckoo.network/tg or Discord https://cuckoo.network/dc

## Setup

Before running the node, copy the example environment file and update the values:

```sh
cp packages/node/.env.example packages/node/.env
```

The node reads configuration from this `.env` file.

## Requirements

- **Node.js** `>=18` and **Yarn** `1.x` for the website in `packages/home`
- **Go** `>=1.22` for the node in `packages/node`

## Running the node

```sh
cd packages/node
go run .
```

Run tests with:

```sh
go test ./...
```

## Running the website

```sh
cd packages/home
yarn
yarn start
```

Build the static site with `yarn build` and deploy it using `yarn deploy`.
