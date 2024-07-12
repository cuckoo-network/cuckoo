import { ArtGenerator } from "@/app/portal/art/text-to-image/art-generator";
import { CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";
import { DashLayout } from "@/components/ui/dash-layout";

export default function TextToImagePage() {
  return (
    <DashLayout>
      <div className="flex flex-col">
        <CardTitle className="text-lg font-semibold md:text-2xl">
          Text to Image
        </CardTitle>
        <CardDescription>Create AI art by prmpting.</CardDescription>
      </div>
      <ArtGenerator />
    </DashLayout>
  );
}
