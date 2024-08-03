"use client";

import React, { useEffect, useState } from "react";
import { PromptForm } from "@/app/portal/art/text-to-image/prompt-form";
import { ArtDisplay } from "@/app/portal/art/text-to-image/art-display";
import { useGenerateArt } from "@/app/portal/art/text-to-image/hooks/use-text-to-image";
import { Authenticated } from "@/containers/authentication/authenticated";
import { useFindOneTextToImageItem } from "@/app/portal/art/text-to-image/history/hooks/use-text-to-image-history";
import { CreatedTextToImageHistoryItem } from "@/gql/graphql";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { selectTtih } from "@/app/portal/art/text-to-image/selectors/select-ttih";

const ArtGenerator: React.FC = () => {
  const sp = useSearchParams();
  const prefilledTtihId = sp.get("id");
  const router = useRouter();
  const path = usePathname();

  const { ttih: createdTtih, loading, handleGenerateArt } = useGenerateArt();
  const { textToImageHistoryData } = useFindOneTextToImageItem(prefilledTtihId);
  const ttih = selectTtih(textToImageHistoryData);

  // Ensure hooks are called correctly and update the state when data changes
  const [currentTtih, setCurrentTtih] = useState<
    CreatedTextToImageHistoryItem | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      if (createdTtih) {
        router.push(`${path}?id=${createdTtih.id}`);
        setCurrentTtih(createdTtih);
      } else if (ttih) {
        setCurrentTtih(ttih);
      }
    })();
  }, [createdTtih, path, router, ttih]);

  return (
    <Authenticated>
      <PromptForm
        onSubmit={handleGenerateArt}
        loading={loading}
        ttih={currentTtih}
      />
      <ArtDisplay loading={loading} ttih={currentTtih} />
    </Authenticated>
  );
};

export { ArtGenerator };
