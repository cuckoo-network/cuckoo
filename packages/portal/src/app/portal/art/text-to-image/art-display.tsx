import React from "react";
import { Image as ImageIcon } from "lucide-react";

interface ArtDisplayProps {
  artUrl: string;
}

export const ArtDisplay: React.FC<ArtDisplayProps> = ({ artUrl }) => {
  return (
    <div className="mt-4 border rounded md:flex hidden">
      <div className="relative grow flex-col items-center">
        {artUrl ? (
          <img
            src={artUrl}
            alt="Generated Art"
            className="w-full h-auto rounded"
          />
        ) : (
          <div className="inset-0 w-full h-full object-contain group relative flex grow items-center justify-center overflow-hidden rounded-xl bg-secondaryBg min-h-[175px]">
            <div className="flex flex-col items-center justify-center">
              <ImageIcon />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
