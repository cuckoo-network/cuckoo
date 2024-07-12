"use client";

import React, { useState } from "react";
import { PromptForm } from "@/app/portal/art/text-to-image/prompt-form";
import { ArtDisplay } from "@/app/portal/art/text-to-image/art-display";
import { postStabilityTask } from "@/app/portal/art/text-to-image/hooks/use-text-to-image";
import { atom, useAtom } from "jotai";

export const genImgBase64Atom = atom("");

const ArtGenerator: React.FC = () => {
  const [artUrl, setArtUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [, setImgBase64] = useAtom<string>(genImgBase64Atom);

  const handleGenerateArt = async (prompt: {
    highPriority: boolean;
    negativePrompt: string;
    prompt: string;
  }) => {
    setLoading(true);
    try {
      const data = await postStabilityTask({
        prompt: prompt.prompt,
        negative_prompt: prompt.negativePrompt,
      });
      const base64 = data[0];
      const genImgUrl = `data:text/plain;base64,${base64}`;
      setArtUrl(genImgUrl);
      setImgBase64(base64);
    } catch (error) {
      console.error("Error generating art:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PromptForm onSubmit={handleGenerateArt} loading={loading} />
      <ArtDisplay artUrl={artUrl} />
    </div>
  );
};

export { ArtGenerator };
