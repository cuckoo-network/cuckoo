import React from "react";
import { DashLayout } from "@/components/ui/dash-layout";
import { TrendingPostsMasonry } from "@/app/portal/art/trending-posts-masonry";
import { Metadata } from "next";
import { ArtTitle } from "@/app/portal/art/art-title";

const cfg = {
  title: "Cuckoo Art",
  site: "@CuckooNetworkHQ",
  images: ["https://cuckoo-network.b-cdn.net/cuckoo-social-card.webp"],
  description: "Cuckoo AI Onchain Creative Platform for Anime Fandom",
};

export const metadata: Metadata = {
  title: cfg.title,
  twitter: cfg,
  openGraph: cfg,
};

export default async function ArtPage() {
  return (
    <DashLayout>
      <ArtTitle />
      <TrendingPostsMasonry />
    </DashLayout>
  );
}
