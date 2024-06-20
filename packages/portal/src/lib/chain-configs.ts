export const chainConfigs = [
  {
    name: "Cuckoo Chain",
    chain: "Cuckoo Chain",
    rpc: ["https://mainnet-rpc.cuckoo.network"],
    explorers: [
      {
        name: "Cuckoo Scan",
        url: "https://scan.cuckoo.network",
        standard: "EIP3091",
      },
    ],
    faucets: [],
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
    chainId: 1200,
    testnet: false,
    slug: "cai",
  },
  {
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
  },
];
