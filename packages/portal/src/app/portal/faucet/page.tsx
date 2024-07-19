import { DashLayout } from "@/components/ui/dash-layout";
import StepsForm, { faucetUnits } from "@/app/portal/faucet/steps-form";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { TestnetBadge } from "@/components/testnet-badge";

const cfg = {
  title: "Cuckoo Sepolia Testnet Faucet - Cuckoo Portal",
  site: "@CuckooNetworkHQ",
  images: ["https://cuckoo-network.b-cdn.net/cuckoo-social-card.webp"],
  description:
    "Follow the steps below to receive CAI and WCAI tokens on Cuckoo Sepolia, the leading testnet for Cuckoo AI. Manage your decentralized AI platform efficiently with the Cuckoo Portal.",
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
          Cuckoo Sepolia Testnet Faucet
        </CardTitle>
        <CardDescription>
          Follow the steps below to receive {faucetUnits} CAI and {faucetUnits}{" "}
          WCAI.
        </CardDescription>
      </div>

      <div>
        <TestnetBadge />
      </div>

      <StepsForm />
    </DashLayout>
  );
}
