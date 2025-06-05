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

## Prerequisites

- [Go](https://go.dev/doc/install) **1.22+**
- [Docker](https://www.docker.com/) for running nodes and miners
- [Node.js](https://nodejs.org/) and `yarn` for the documentation site

## Environment Variables

The node respects a few environment variables:

- `ETH_PRIVATE_KEY` – private key used for signing and staking
- `NODE_TYPE` – set to `COORDINATOR` when running a coordinator node
- `COORDINATOR_URL` – coordinator endpoint miners connect to
- `SD_URL` – Stable Diffusion endpoint for GPU miners
- `PORT` – HTTP port for the JSON RPC server (defaults to `6387`)

## Building

```bash
cd packages/node
make build        # build the binary
# or run directly
go run .
```

## Running Tests

```bash
cd packages/node
make test        # runs "go test ./..."
```

## Starting the Web Docs

The documentation lives in [`packages/home`](packages/home). To start the local
website:

```bash
cd packages/home
yarn
yarn start
```

See [`packages/home/README.md`](packages/home/README.md) for more details.

## Example: Running a Node

Step-by-step instructions and example commands for running a Cuckoo Chain node
are available in
[`packages/home/docs/04-cuckoo-chain/02-full-node.md`](packages/home/docs/04-cuckoo-chain/02-full-node.md).
It includes a command similar to:

```bash
docker run --rm -it -v ~/cuckoo-chain:/home/user/.arbitrum \
  -p 0.0.0.0:8547:8547 \
  -p 0.0.0.0:8548:8548 \
  offchainlabs/nitro-node:v2.3.3-6a1c1a7 ...
```

## Example: Mining

Instructions for GPU mining are in
[`packages/home/docs/03-cuckoo-ai/ai-node.md`](packages/home/docs/03-cuckoo-ai/ai-node.md).
A typical workflow is:

```bash
git clone https://github.com/cuckoo-network/stable-diffusion-miner-docker.git
cd stable-diffusion-miner-docker
make download
ETH_PRIVATE_KEY="..." make start
```
