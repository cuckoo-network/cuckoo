import { DashLayout } from "@/components/ui/dash-layout";
import StepsForm, { faucetUnits } from "@/app/portal/faucet/steps-form";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {CreatePost} from "@/app/portal/art/create-post/create-post";

const cfg = {
  title: "Create Post - Cuckoo AI",
  site: "@CuckooNetworkHQ",
  images: ["https://cuckoo-network.b-cdn.net/cuckoo-social-card.webp"],
  description:
    "Upload a image to cuckoo network",
};

export const metadata: Metadata = {
  title: cfg.title,
  twitter: cfg,
  openGraph: cfg,
};

export default function CreatePostPage() {
  return (
    <DashLayout>
      <div className="flex flex-col">
        <CardTitle className="text-lg font-semibold md:text-2xl">
          Create Post
        </CardTitle>
        <CardDescription>
          Upload a image to cuckoo network
        </CardDescription>
      </div>

      <CreatePost />
    </DashLayout>
  );
}
