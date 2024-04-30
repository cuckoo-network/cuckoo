export const chainConfig = {
  name: "Cuckoo Sepolia Testnet",
  chain: "Cuckoo",
  rpc: ["https://testnet-rpc.cuckoo.network"],
  explorers: [
    {
      name: "Cuckoo Scan",
      url: "https://testnet-scan.cuckoo.network",
      standard: "EIP3091",
    }
  ],
  faucets: [
    "https://cuckoo.network/tg"
  ],
  icon: {
    url: "https://cuckoo.network/img/favicon.svg",
    width: 600,
    height: 600,
    format: "svg",
  },
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  shortName: "ETH",
  chainId: 1210,
  testnet: true,
  slug: "cuckoo-sepolia",
};
