import { ArtGenerator } from "@/app/portal/art/text-to-image/art-generator";
import { CardDescription, CardTitle } from "@/components/ui/card";
import React, { Suspense } from "react";
import { DashLayout } from "@/components/ui/dash-layout";
import { TextToImageTitle } from "@/app/portal/art/text-to-image/text-to-image-title";

export default function TextToImagePage() {
  return (
    <DashLayout>
      <TextToImageTitle />
      <Suspense>
        <ArtGenerator />
      </Suspense>
    </DashLayout>
  );
}
