import { DashLayout } from "@/components/ui/dash-layout";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { AirdropWaterfall } from "@/app/portal/airdrop/airdrop-waterfall";
import { AirdropOverallStats } from "@/app/portal/airdrop/airdrop-overall-stats";
import { Suspense } from "react";

const cfg = {
  title: "Cuckoo Network Airdrop",
  site: "@CuckooNetworkHQ",
  images: ["https://cuckoo-network.b-cdn.net/cuckoo-social-card.webp"],
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
      <Suspense>
        <AirdropWaterfall />
      </Suspense>
    </DashLayout>
  );
}
