import React from "react";
import { Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { TextToImageHistoryItem } from "@/gql/graphql";
import Image from "next/image";

interface ArtDisplayProps {
  ttih?: TextToImageHistoryItem;
  loading?: boolean;
}

export const ArtDisplay: React.FC<ArtDisplayProps> = ({ ttih, loading }) => {
  const router = useRouter();
  return (
    <>
      <div className="mt-4 border rounded md:flex">
        <div className="relative grow flex flex-col items-center justify-center">
          {!loading && ttih ? (
            <Image
              width={ttih.photoMedia[0].width}
              height={ttih.photoMedia[0].height}
              src={ttih.photoMedia[0].readUrl}
              alt="Generated Art"
              className="rounded"
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
      {!loading && ttih && (
        <Button
          onClick={() => {
            router.push(`/portal/art/create-post?ttihId=${ttih?.id}`);
          }}
        >
          Create Post
        </Button>
      )}
    </>
  );
};
