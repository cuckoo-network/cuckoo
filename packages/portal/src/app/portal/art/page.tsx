import React from "react";
import { DashLayout } from "@/components/ui/dash-layout";
import { TrendingPostsMasonary } from "@/app/portal/art/trending-posts-masonary";
import { CardDescription, CardTitle } from "@/components/ui/card";

export default function ArtPage() {
  return (
    <DashLayout>
      <div className="flex flex-col">
        <CardTitle className="text-lg font-semibold md:text-2xl">
          Discover
        </CardTitle>
        <CardDescription>AI arts created in our network.</CardDescription>
      </div>
      <TrendingPostsMasonary />
    </DashLayout>
  );
}
