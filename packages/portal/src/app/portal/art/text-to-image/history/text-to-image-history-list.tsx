"use client";

import { useState, useEffect, useCallback } from "react";
import { useTextToImageHistory } from "@/app/portal/art/text-to-image/history/hooks/use-text-to-image-history";
import Image from "next/image";
import Link from "next/link";
import {
  TextToImageHistoryQuery,
  TextToImageHistoryQueryVariables,
} from "@/gql/graphql";
import InfiniteScroll from "react-infinite-scroll-component";

function resizeImage(
  h: number,
  w: number,
  targetWidth: number,
): [width: number, height: number] {
  const aspectRatio = h / w;
  const newHeight = targetWidth * aspectRatio;
  return [targetWidth, newHeight];
}

const pageSize = 5;

function selectTtihItems(
  textToImageHistoryData: TextToImageHistoryQuery | undefined,
) {
  return (
    textToImageHistoryData?.textToImageHistory.edges.map((ed) => ed.node) || []
  );
}

export const TextToImageHistoryList = () => {
  const { textToImageHistoryData, fetchMore, textToImageHistoryLoading } =
    useTextToImageHistory(pageSize, "0");
  const [items, setItems] = useState(selectTtihItems(textToImageHistoryData));
  const [endCursor, setEndCursor] = useState<string | null | undefined>(
    textToImageHistoryData?.textToImageHistory.pageInfo.endCursor || null,
  );
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    if (textToImageHistoryData) {
      setItems(selectTtihItems(textToImageHistoryData));
      setEndCursor(
        textToImageHistoryData.textToImageHistory.pageInfo.endCursor,
      );
    }
  }, [textToImageHistoryData]);

  const loadMoreItems = useCallback(async () => {
    if (hasNextPage) {
      const newData = await fetchMore({
        variables: {
          after: endCursor,
          first: pageSize,
        } as TextToImageHistoryQueryVariables,
      });
      const newItems = selectTtihItems(newData.data);
      setItems((prevItems) => [...prevItems, ...newItems]);
      setEndCursor(newData.data.textToImageHistory.pageInfo.endCursor);
      setHasNextPage(newData.data.textToImageHistory.pageInfo.hasNextPage);
    }
  }, [endCursor, fetchMore, hasNextPage]);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMoreItems}
      hasMore={hasNextPage}
      loader={<h4>Loading...</h4>}
      scrollableTarget="scrollableDiv"
    >
      {!items?.length && !textToImageHistoryLoading && (
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
            />
            <div>
              <div className="mb-2 ml-5 transition-all">{it.prompt}</div>
              <div className="mb-2 ml-5 transition-all">{it.createdAt}</div>
            </div>
          </Link>
        );
      })}
    </InfiniteScroll>
  );
};
