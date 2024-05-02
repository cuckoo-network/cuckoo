import { DashLayout } from "@/components/ui/dash-layout";
import { StakingHome } from "@/app/portal/staking/staking-home";
import {Metadata} from "next";

const cfg = {
  title: 'Staking - Cuckoo Portal',
  site: "@CuckooNetworkHQ",
  images: ["https://cuckoo-network.b-cdn.net/cuckoo-social-card.webp"],
  description: "Stake CUC to secure the decentralized AI Platform and get 6% yearly. Cuckoo Portal is the management portal for Cuckoo decentralized AI platform",
};

export const metadata: Metadata = {
  title: cfg.title,
  twitter: cfg,
  openGraph: cfg,
}

export default function StakingPage() {
  return (
    <DashLayout>
      <StakingHome />
    </DashLayout>
  );
}
