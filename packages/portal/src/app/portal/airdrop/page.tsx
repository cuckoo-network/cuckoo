import { DashLayout } from "@/components/ui/dash-layout";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { AirdropWaterfall } from "@/app/portal/airdrop/airdrop-waterfall";
import { AirdropOverallStats } from "@/app/portal/airdrop/airdrop-overall-stats";
import { Suspense } from "react";
import Image from "next/image";
import { GetCaiBanner } from "@/components/get-cai-banner";
import { Leaderboard } from "@/app/portal/airdrop/leaderboard";
import { RecentlyJoined } from "@/app/portal/airdrop/recently-joined";

const cfg = {
  title: "Cuckoo Network Airdrop",
  site: "@CuckooNetworkHQ",
  images: [
    "https://cuckoo-network.b-cdn.net/2024-07-25-cuckoo-network-airdrop-portal.webp",
  ],
  openGraph: {
    images: [
      "https://cuckoo-network.b-cdn.net/2024-07-25-cuckoo-network-airdrop-portal.webp",
    ],
  },
  description: "Get $CAI cuckoo network tokens for free",
};

export const metadata: Metadata = {
  title: cfg.title,
  twitter: cfg,
  openGraph: cfg,
};

export default function AirdropPage() {
  return (
    <DashLayout>
      <div className="flex flex-col">
        <h1 className="leading-none tracking-tight text-lg font-semibold md:text-2xl">
          {cfg.title}
        </h1>
        <CardDescription>{cfg.description}</CardDescription>
      </div>

      <AirdropOverallStats />

      <GetCaiBanner />

      <Suspense>
        <AirdropWaterfall />
      </Suspense>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
            <Leaderboard />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Recently Joined</h2>
            <p>Refer a friend and win $CAI!</p>
            <RecentlyJoined />
          </div>
        </div>
      </div>
    </DashLayout>
  );
}
