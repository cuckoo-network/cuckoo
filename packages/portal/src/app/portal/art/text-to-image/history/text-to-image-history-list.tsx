"use client";

import { useTextToImageHistory } from "@/app/portal/art/text-to-image/history/hooks/use-text-to-image-history";
import Image from "next/image";
import Link from "next/link";
import { TextToImageHistoryQuery } from "@/gql/graphql";

function resizeImage(
  h: number,
  w: number,
  targetWidth: number,
): [width: number, height: number] {
  // Calculate the aspect ratio
  const aspectRatio = h / w;

  // Calculate the new height based on the target width and aspect ratio
  const newHeight = targetWidth * aspectRatio;

  // Return the new dimensions as a tuple
  return [targetWidth, newHeight];
}

function selectTtihItems(
  textToImageHistoryData: TextToImageHistoryQuery | undefined,
) {
  return (
    textToImageHistoryData?.textToImageHistory.edges.map((ed) => ed.node) || []
  );
}

export const TextToImageHistoryList = () => {
  const { textToImageHistoryData } = useTextToImageHistory();

  const items = selectTtihItems(textToImageHistoryData);

  return (
    <>
      {!items?.length && (
        <p>
          You have not created any AI art.{" "}
          <Link className={"text-blue-400"} href={"/portal/art/text-to-image/"}>
            Create a new one now.
          </Link>
        </p>
      )}
      {items?.map((it) => {
        const size = resizeImage(
          it.photoMedia[0].width,
          it.photoMedia[0].height,
          256,
        );
        return (
          <Link
            key={it.id}
            className="flex cursor-pointer items-start p-2"
            href={`/portal/art/text-to-image?id=${it.id}`}
          >
            <Image
              alt={it.prompt}
              width={size[0]}
              height={size[1]}
              key={it.photoMedia[0].id}
              src={it.photoMedia[0].readUrl}
            ></Image>
            <div>
              <div className="mb-2 ml-5 transition-all">{it.prompt}</div>

              <div className="mb-2 ml-5 transition-all">{it.createdAt}</div>
            </div>
          </Link>
        );
      })}
    </>
  );
};
