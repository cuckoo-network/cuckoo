"use client";

import { CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";
import { useTranslation } from "@/lib/i18n-client-use-translation";

export const ArtTitle = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <CardTitle className="text-lg font-semibold md:text-2xl">
        {t("art_discover")}
      </CardTitle>
      <CardDescription>{t("art_ai_arts_description")}</CardDescription>
    </div>
  );
};
