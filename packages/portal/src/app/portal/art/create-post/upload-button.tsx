"use client";

import { useEffect, useRef, useState } from "react";
import { convertBase64PngToWebP } from "@/app/portal/art/create-post/utils/convert-to-webp";
import { base64ToFile } from "@/app/portal/art/create-post/utils/base64-to-file";

interface UploadButtonProps {
  onImageUpload: (
    dimensions: { width: number; height: number },
    file?: File | undefined | null,
  ) => void;
  initialImageBase64: string;
}

const UploadButton: React.FC<UploadButtonProps> = ({
  onImageUpload,
  initialImageBase64,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (initialImageBase64) {
      const img = new Image();
      img.onload = async () => {
        const dimensions = { width: img.width, height: img.height };
        setImageDimensions(dimensions);
        setSelectedImage(`data:text/plain;base64,${initialImageBase64}`);

        let result = `data:text/plain;base64,${initialImageBase64}`;
        try {
          result = await convertBase64PngToWebP(
            `data:text/plain;base64,${initialImageBase64}`,
          );
        } catch (err) {
          console.error(`failed to convert to webp: ${err}`);
        }

        const file = base64ToFile(result);
        onImageUpload(dimensions, file);
      };
      img.src = `data:text/plain;base64,${initialImageBase64}`;
    }
  }, [initialImageBase64, onImageUpload]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const dimensions = { width: img.width, height: img.height };
          setImageDimensions(dimensions);
          onImageUpload(dimensions, file);
        };
        img.src = reader.result as string;
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative h-full w-full max-w-md items-center justify-center rounded-xl border border-dashed border-separator/40 p-4 text-center text-secondaryText md:flex flex-col">
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Selected"
          className="inset-0 w-full h-full object-contain"
          ref={imageRef}
        />
      ) : (
        <>
          <button className="p-2 text-gray-600">
            Click + to upload photos or videos
          </button>
          <p className="text-sm text-gray-400">
            Make sure the content you upload adheres to our rules.
          </p>
        </>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="inset-0 absolute w-full h-full opacity-0 cursor-pointer z-0"
      />
    </div>
  );
};

export { UploadButton };
