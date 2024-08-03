import React from "react";
import { DashLayout } from "@/components/ui/dash-layout";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { TextToImageHistoryList } from "@/app/portal/art/text-to-image/history/text-to-image-history-list";

const cfg = {
  title: "Cuckoo Art Text-to-Image History",
  site: "@CuckooNetworkHQ",
  images: ["https://cuckoo-network.b-cdn.net/cuckoo-social-card.webp"],
  description: "Cuckoo AI Onchain Creative Platform for Anime Fandom",
};

export const metadata: Metadata = {
  title: cfg.title,
  twitter: cfg,
  openGraph: cfg,
};

export default function ArtPage() {
  return (
    <DashLayout>
      <div className="flex flex-col">
        <CardTitle className="text-lg font-semibold md:text-2xl">
          History
        </CardTitle>
        <CardDescription>Your Text-to-Image History</CardDescription>
      </div>
      <TextToImageHistoryList />
    </DashLayout>
  );
}
