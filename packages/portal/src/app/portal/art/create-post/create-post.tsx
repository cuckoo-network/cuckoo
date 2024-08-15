"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Authenticated } from "@/containers/authentication/authenticated";
import { UploadButton } from "./upload-button";
import { useCreatePost } from "@/app/portal/art/hooks/use-create-post";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useFindOneTextToImageItem } from "@/app/portal/art/text-to-image/history/hooks/use-text-to-image-history";
import { selectTtih } from "@/app/portal/art/text-to-image/selectors/select-ttih";
import { useTranslation } from "@/lib/i18n-client-use-translation";

function useTtihQueryParam() {
  const searchParams = useSearchParams();
  const ttihId = searchParams.get("ttihId");
  const { textToImageHistoryData } = useFindOneTextToImageItem(ttihId);
  return selectTtih(textToImageHistoryData);
}

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [isSensitive, setIsSensitive] = useState(false);
  const [imageFile, setImageFile] = useState<File | null | undefined>(null);
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const ttih = useTtihQueryParam();
  useEffect(() => {
    if (ttih) {
      setDescription(`Prompt: ${ttih.prompt}`);
    }
  }, [ttih]);

  const handleImageUpload = (
    dimensions: { width: number; height: number },
    file?: File | null | undefined,
  ) => {
    setImageFile(file);
    setImageDimensions(dimensions);
  };

  const { createPost } = useCreatePost();

  const handleCreatePost = async () => {
    try {
      setLoading(true);
      const resp = await createPost({
        variables: {
          data: {
            description: description,
            hashtags: hashtags,
            nsfw: false,
            ...(imageFile || !ttih
              ? {}
              : {
                  textToImageHistoryItemId: ttih.id,
                }),
            photoMedia: [
              ...(imageFile
                ? [
                    {
                      id: imageFile?.name,
                      sortOrder: 0,
                      // TODO(lark)
                      width: imageDimensions?.width,
                      height: imageDimensions?.height,
                    },
                  ]
                : []),
            ],
            title: title,
          },
        },
      });

      // Then, if the image file is selected, upload it to the S3 URL
      if (imageFile && resp.data?.createSocialPost?.photoMedia?.at(0)?.url) {
        const imageResponse = await axios.put(
          resp.data?.createSocialPost?.photoMedia[0].url,
          imageFile,
          {
            headers: {
              "Content-Type": imageFile.type,
            },
          },
        );

        console.log("Image Uploaded:", imageResponse.data);
      } else {
        console.log("No image file selected");
      }

      router.push("/portal/art");
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setLoading(false);
    }
  };
  const { t } = useTranslation();

  return (
    <Authenticated>
      <div>
        <div className="flex flex-col md:gap-8 lg:flex-row lg:gap-16">
          <UploadButton
            onImageUpload={handleImageUpload}
            initialImgUrl={ttih?.photoMedia[0]?.readUrl}
          />
          <div className="relative flex grow flex-col justify-between self-stretch">
            <div className="flex flex-col">
              <div>
                <label className="block mb-2 text-sm">{t("art_title")}</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm">
                  {t("art_description")}
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 h-32 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mt-4 hidden">
                <label className="block mb-2 text-sm">
                  {t("art_addHashtag")}
                </label>
                <input
                  type="text"
                  value={hashtags}
                  onChange={(e) => setHashtags(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mt-4 flex items-center hidden">
                <input
                  type="checkbox"
                  checked={isSensitive}
                  onChange={(e) => setIsSensitive(e.target.checked)}
                  className="mr-2"
                />
                <label className="text-sm">{t("art_sensitive")}</label>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleCreatePost}
                disabled={loading}
                isLoading={loading}
              >
                {t("art_createPost")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
