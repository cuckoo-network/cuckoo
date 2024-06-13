import { DashLayout } from "@/components/ui/dash-layout";
import StepsForm, {faucetUnits} from "@/app/portal/faucet/steps-form";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

const cfg = {
  title: "Cuckoo AI Network Faucet - Cuckoo Portal",
  site: "@CuckooNetworkHQ",
  images: ["https://cuckoo-network.b-cdn.net/cuckoo-social-card.webp"],
  description:
    "Complete a series of steps below to get CAI and WCAI. Cuckoo Portal is the management portal for Cuckoo decentralized AI platform",
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
          Faucet
        </CardTitle>
        <CardDescription>
          Complete a series of steps below to get {faucetUnits} CAI and {faucetUnits} WCAI.
        </CardDescription>
      </div>

      <StepsForm />
    </DashLayout>
  );
}
