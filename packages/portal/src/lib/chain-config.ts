export const chainConfig = {
  name: "Cuckoo Sepolia",
  chain: "Cuckoo Sepolia",
  rpc: ["https://testnet-rpc.cuckoo.network"],
  explorers: [
    {
      name: "Cuckoo Scan",
      url: "https://testnet-scan.cuckoo.network",
      standard: "EIP3091",
    },
  ],
  faucets: ["https://cuckoo.network/tg"],
  icon: {
    url: "https://cuckoo.network/img/favicon.svg",
    width: 600,
    height: 600,
    format: "svg",
  },
  nativeCurrency: {
    name: "Cuckoo AI",
    symbol: "CAI",
    decimals: 18,
  },
  shortName: "CAI",
  chainId: 1210,
  testnet: true,
  slug: "cuckoo-sepolia",
};
