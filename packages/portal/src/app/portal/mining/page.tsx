import React from "react";
import { DashLayout } from "@/components/ui/dash-layout";
import { TrendingPostsMasonary } from "@/app/portal/art/trending-posts-masonary";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { MiningHome } from "@/app/portal/mining/mining-home";
import { Metadata } from "next";

const cfg = {
  title: "Cuckoo Network Mining Portal",
  site: "@CuckooNetworkHQ",
  images: ["https://cuckoo-network.b-cdn.net/cuckoo-social-card.webp"],
  description:
    "Cuckoo is a decentralized network where nodes are responsible for mining new blocks, running GPU tasks, and participating in consensus and network governance. Anyone can run a node by meeting the minimum requirements and earning votes from Cuckoo token-holders.",
};

export const metadata: Metadata = {
  title: cfg.title,
  twitter: cfg,
  openGraph: cfg,
};

export default function MiningPage() {
  return (
    <DashLayout>
      <div className="flex flex-col">
        <CardTitle className="text-lg font-semibold md:text-2xl">
          Mining
        </CardTitle>
        <CardDescription>
          Cuckoo is a decentralized network where nodes are responsible for
          mining new blocks, running GPU tasks, and participating in consensus
          and network governance. Anyone can run a node by meeting the minimum
          requirements and earning votes from Cuckoo token-holders.
        </CardDescription>
      </div>
      <MiningHome />
    </DashLayout>
  );
}
