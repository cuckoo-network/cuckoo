"use client";
import { CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";
import { useTranslation } from "@/lib/i18n-client-use-translation";

export const TextToImageTitle = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <CardTitle className="text-lg font-semibold md:text-2xl">
        {t("buttons_text_to_image")}
      </CardTitle>
      <CardDescription>{t("art_text_to_image_subtitle")}</CardDescription>
    </div>
  );
};
