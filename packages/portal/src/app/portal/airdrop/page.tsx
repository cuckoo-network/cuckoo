import { DashLayout } from "@/components/ui/dash-layout";
import StepsForm, { faucetUnits } from "@/app/portal/faucet/steps-form";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { TestnetBadge } from "@/components/testnet-badge";
import { AirdropWaterfall } from "@/app/portal/airdrop/airdrop-waterfall";

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

export default function FaucetPage() {
  return (
    <DashLayout>
      <div className="flex flex-col">
        <CardTitle className="text-lg font-semibold md:text-2xl">
          {cfg.title}
        </CardTitle>
        <CardDescription>{cfg.description}</CardDescription>
      </div>

      <AirdropWaterfall />
    </DashLayout>
  );
}
