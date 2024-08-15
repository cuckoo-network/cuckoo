"use client";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n-client-use-translation";

export const CreatePostTitle = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <CardTitle className="text-lg font-semibold md:text-2xl">
        {t("art_createPost")}
      </CardTitle>
      <CardDescription>{t("art_upload")}</CardDescription>
    </div>
  );
};
