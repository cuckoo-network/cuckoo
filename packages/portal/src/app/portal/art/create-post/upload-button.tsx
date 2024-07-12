"use client";

import { useRef, useState, useEffect } from "react";

interface UploadButtonProps {
  onImageUpload: (
    dimensions: { width: number; height: number },
    file?: File | undefined | null,
  ) => void;
  initialImageBase64: string; // Add initial prop
}

function base64ToFile(
  base64: string | null | undefined,
  filename: string = "file.png",
  mimeType: string = "image/png",
): File | null {
  if (!base64) {
    return null;
  }

  // Decode the base64 string
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  // Convert the binary string to a Uint8Array
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // Create a Blob from the Uint8Array
  const blob = new Blob([bytes], { type: mimeType });

  // Convert the Blob to a File
  return new File([blob], filename, { type: mimeType });
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
      img.onload = () => {
        const dimensions = { width: img.width, height: img.height };
        setImageDimensions(dimensions);
        setSelectedImage(`data:text/plain;base64,${initialImageBase64}`);
        const file = base64ToFile(initialImageBase64)
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
