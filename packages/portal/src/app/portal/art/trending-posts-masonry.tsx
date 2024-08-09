"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useSocialPosts } from "@/app/portal/art/hooks/use-social-posts";
import { Button } from "@/components/ui/button";
import { ImagePlus, Sparkles } from "lucide-react";
import {
  SocialPost,
  SocialPostsQuery,
  TextToImageHistoryQueryVariables,
} from "@/gql/graphql";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";

function selectSocialPosts(dataTrendingPosts: SocialPostsQuery | undefined) {
  return dataTrendingPosts?.socialPosts.edges.map((ed) => ed.node) || [];
}

function PostItem(props: { photo: any; post: SocialPost }) {
  return (
    <div className={"mb-4"}>
      {props.photo?.width && props.photo?.height ? (
        <Image
          alt={props.post.title || ""}
          width={props.photo.width}
          height={props.photo.height}
          src={props.photo?.url}
        />
      ) : (
        <img
          className="h-auto max-w-full rounded-lg"
          src={props.photo?.url}
          alt=""
        />
      )}
      <div className="break-word w-full text-white no-underline">
        {props.post.title}
      </div>

      <div className="mt-2 flex max-w-[calc(100%-65px)] items-center gap-1">
        <Image
          className="h-6 w-6 shrink-0 rounded-full object-cover sm:h-8 sm:w-8"
          width={32}
          height={32}
          alt={props.post.profile.name}
          src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(props.post.profile.name)}`}
        />

        {props.post.profile.name}
      </div>
    </div>
  );
}

const pageSize = 15;

export const TrendingPostsMasonry = () => {
  const [hasNextPage, setHasNextPage] = useState(true);
  const { dataTrendingPosts, loadingTrendingPosts, fetchMoreTrendingPosts } =
    useSocialPosts(pageSize, "0");
  const [socialPosts, setSocialPosts] = useState(
    selectSocialPosts(dataTrendingPosts),
  );
  const [endCursor, setEndCursor] = useState<string | null | undefined>(
    dataTrendingPosts?.socialPosts.pageInfo.endCursor || null,
  );

  useEffect(() => {
    if (dataTrendingPosts) {
      setSocialPosts(selectSocialPosts(dataTrendingPosts));
      setEndCursor(dataTrendingPosts.socialPosts.pageInfo.endCursor);
    }
  }, [dataTrendingPosts]);

  const postGroups = groupIntertwined(socialPosts || []);

  const loadMoreItems = useCallback(async () => {
    if (hasNextPage) {
      const newData = await fetchMoreTrendingPosts({
        variables: {
          after: endCursor,
          first: pageSize,
        } as TextToImageHistoryQueryVariables,
      });
      const newItems = selectSocialPosts(newData.data);
      setSocialPosts((prevItems) => [...prevItems, ...newItems]);
      setEndCursor(newData.data.socialPosts.pageInfo.endCursor);
      setHasNextPage(newData.data.socialPosts.pageInfo.hasNextPage);
    }
  }, [endCursor, fetchMoreTrendingPosts, hasNextPage]);

  if (loadingTrendingPosts) {
    return <></>;
  }
  return (
    <>
      <div className={"flex gap-1"}>
        <Button variant={"secondary"} href={"/portal/art/create-post"}>
          <ImagePlus className={"mr-1"} size={18} /> Creat Post
        </Button>

        <Button variant={"secondary"} href={"/portal/art/text-to-image"}>
          <Sparkles className={"mr-1"} size={18} /> Text to Image
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
        {postGroups.map((group, ii) => {
          if (ii === 0) {
            console.log({
              key: ii,
              dataLength: group.length,
              next: loadMoreItems,
              hasMore: hasNextPage,
            });
            return (
              <div key={ii}>
                <InfiniteScroll
                  dataLength={group.length}
                  next={loadMoreItems}
                  hasMore={hasNextPage}
                  loader={<h4>Loading...</h4>}
                >
                  {group.map((post) => {
                    const photo = post.photoMedia?.at(0);
                    return <PostItem key={post.id} photo={photo} post={post} />;
                  })}
                </InfiniteScroll>
              </div>
            );
          }

          return (
            <div className="gap-4" key={ii}>
              {group.map((post) => {
                const photo = post.photoMedia?.at(0);
                return <PostItem key={post.id} photo={photo} post={post} />;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

function groupIntertwined<T>(items: T[]): T[][] {
  if (!items) {
    return [[]];
  }

  const groups: T[][] = [[], [], [], [], []];

  for (let i = 0; i < items.length; i++) {
    const groupIndex = i % groups.length;
    groups[groupIndex].push(items[i]);
  }

  return groups;
}
