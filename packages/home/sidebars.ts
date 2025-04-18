import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tutorialSidebar: [
    { type: "doc", id: "cuckoo-network", label: " Introduction" },
    { type: "doc", id: "vision", label: " Vision" },
    {
      type: "category",
      label: " Cuckoo AI",
      items: [
        { type: "doc", id: "cuckoo-ai/cuckoo-ai", label: " Overview" },
        {
          type: "doc",
          id: "cuckoo-ai/ai-node",
          label: " How to Run a Miner Node",
        },
      ],
    },
    {
      type: "category",
      label: " Cuckoo Chain",
      items: [
        {
          type: "doc",
          id: "cuckoo-chain/cuckoo-chain",
          label: " Network Details",
        },
        {
          type: "doc",
          id: "cuckoo-chain/full-node",
          label: " How to Run a Cuckoo Chain Node",
        },
        {
          type: "doc",
          id: "cuckoo-chain/bridge",
          label: " Cuckoo Bridge",
        },
        {
          type: "category",
          label: " Deploy Smart Contract",
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: "doc",
              id: "deploy-smart-contract/using-hardhat",
              label: "Using Hardhat",
            },
            {
              type: "doc",
              id: "deploy-smart-contract/using-thirdweb",
              label: "Using Thirdweb",
            },
            {
              type: "doc",
              id: "deploy-smart-contract/using-foundry",
              label: "Using Foundry",
            },
            {
              type: "doc",
              id: "deploy-smart-contract/using-remix",
              label: "Using Remix",
            },
          ],
        },
      ],
    },
    {
      type: "doc",
      id: "How does Cuckoo work",
      label: " How does Cuckoo work",
    },
    { type: "doc", id: "token", label: " $CAI" },
    { type: "doc", id: "roadmap", label: " Roadmap" },
    { type: "doc", id: "team", label: " Team" },
  ],
};

export default sidebars;
