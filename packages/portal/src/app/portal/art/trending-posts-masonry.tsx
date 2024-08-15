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
import { PostDetails } from "@/app/portal/art/post-details/post-details";
import { useTranslation } from "@/lib/i18n-client-use-translation";

function selectSocialPosts(dataTrendingPosts: SocialPostsQuery | undefined) {
  return dataTrendingPosts?.socialPosts.edges.map((ed) => ed.node) || [];
}

function PostItem(props: { photo: any; post: SocialPost }) {
  return (
    <PostDetails post={props.post}>
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
            src={props.post.profile.profilePhoto.url}
          />

          {props.post.profile.name}
        </div>
      </div>
    </PostDetails>
  );
}

const pageSize = 20;

export const TrendingPostsMasonry = () => {
  const { dataTrendingPosts, loadingTrendingPosts, fetchMoreSocialPosts } =
    useSocialPosts(pageSize, "0");

  const postGroups = groupIntertwined(
    selectSocialPosts(dataTrendingPosts) || [],
  );
  const endCursor = dataTrendingPosts?.socialPosts.pageInfo.endCursor || "";
  const hasNext = !!dataTrendingPosts?.socialPosts.pageInfo.hasNextPage;

  const loadMoreItems = useCallback(async () => {
    if (hasNext) {
      await fetchMoreSocialPosts(pageSize, endCursor);
    }
  }, [endCursor, hasNext, fetchMoreSocialPosts]);

  const { t } = useTranslation();

  if (loadingTrendingPosts) {
    return <></>;
  }
  return (
    <>
      <div className={"flex gap-1"}>
        <Button variant={"secondary"} href={"/portal/art/create-post"}>
          <ImagePlus className={"mr-1"} size={18} /> {t("buttons_create_post")}
        </Button>

        <Button variant={"secondary"} href={"/portal/art/text-to-image"}>
          <Sparkles className={"mr-1"} size={18} /> {t("buttons_text_to_image")}
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
        {postGroups.map((group, ii) => {
          if (ii === 0) {
            return (
              <div key={ii}>
                <InfiniteScroll
                  dataLength={group.length}
                  next={loadMoreItems}
                  hasMore={
                    !!dataTrendingPosts?.socialPosts.pageInfo.hasNextPage
                  }
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
