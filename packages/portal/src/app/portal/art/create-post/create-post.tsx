"use client";

import { useState } from "react";
import axios from "axios";
import { Authenticated } from "@/containers/authentication/authenticated";
import { UploadButton } from "./upload-button";
import { useCreatePost } from "@/app/portal/art/hooks/use-create-post";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { genImgBase64Atom } from "@/app/portal/art/text-to-image/art-generator";

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [isSensitive, setIsSensitive] = useState(false);
  const [genImgBase64] = useAtom(genImgBase64Atom);
  const [imageFile, setImageFile] = useState<File | null | undefined>(null);
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
            photoMedia: [
              ...(imageFile
                ? [
                    {
                      id: imageFile?.name,
                      sortOrder: 0,
                    },
                  ]
                : []),
            ],
            title: title,
          },
        },
      });

      // Then, if the image file is selected, upload it to the S3 URL
      if (imageFile && resp.data?.createSocialPost?.photoMedia[0].url) {
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

  return (
    <Authenticated>
      <div className="">
        <div className="flex flex-col md:gap-8 lg:flex-row lg:gap-16">
          <UploadButton
            onImageUpload={handleImageUpload}
            initialImageBase64={genImgBase64}
          />
          <div className="relative flex grow flex-col justify-between self-stretch">
            <div className={"flex flex-col"}>
              <div className="">
                <label className="block mb-2 text-sm">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 h-32 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mt-4 hidden">
                <label className="block mb-2 text-sm">Add Hashtag</label>
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
                <label className="text-sm">Sensitive</label>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleCreatePost}
                disabled={loading}
                isLoading={loading}
              >
                Create Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
