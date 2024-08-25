"use client";

import React, { useCallback } from "react";
import { useSocialPosts } from "@/app/portal/art/hooks/use-social-posts";
import { Button } from "@/components/ui/button";
import { ImagePlus, Sparkles } from "lucide-react";
import { SocialPost, SocialPostsQuery } from "@/gql/graphql";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import { PostDetailsDialog } from "@/app/portal/art/post-details/post-details-dialog";
import { useTranslation } from "@/lib/i18n-client-use-translation";
import useMobileDevice from "@/lib/is-mobile-screen-width";
import Link from "next/link";

function selectSocialPosts(dataTrendingPosts: SocialPostsQuery | undefined) {
  return dataTrendingPosts?.socialPosts.edges.map((ed) => ed.node) || [];
}

function PostMasonryItem(props: { photo: any; post: SocialPost }) {
  const isMobile = useMobileDevice();

  if (isMobile) {
    return (
      <Link href={`/portal/art/${props.post.id}/`}>
        <div className={"mb-8"}>
          {props.photo?.width && props.photo?.height ? (
            <Image
              className={"rounded-lg"}
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
          <div className="break-word w-full text-white no-underline font-bold mt-3 mb-2 mx-3">
            {props.post.title}
          </div>

          <div className="flex max-w-[calc(100%-65px)] items-center gap-1 text-muted-foreground text-sm mx-3">
            <Image
              className="h-6 w-6 shrink-0 rounded-full object-cover sm:h-4 sm:w-4"
              width={24}
              height={24}
              alt={props.post.profile.name}
              src={props.post.profile.profilePhoto.url}
            />

            {props.post.profile.name}
          </div>

          <a
            href={`/portal/art/${props.post.id}`}
            className="hidden-link"
            aria-hidden="true"
          >
            Hidden Link
          </a>
        </div>
      </Link>
    );
  }

  return (
    <PostDetailsDialog post={props.post}>
      <div className={"mb-8"}>
        {props.photo?.width && props.photo?.height ? (
          <Image
            className={"rounded-lg"}
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
        <div className="break-word w-full text-white no-underline font-bold mt-3 mb-2 mx-3">
          {props.post.title}
        </div>

        <div className="flex max-w-[calc(100%-65px)] items-center gap-1 text-muted-foreground text-sm mx-3">
          <Image
            className="h-6 w-6 shrink-0 rounded-full object-cover sm:h-4 sm:w-4"
            width={24}
            height={24}
            alt={props.post.profile.name}
            src={props.post.profile.profilePhoto.url}
          />

          {props.post.profile.name}
        </div>

        <a
          href={`/portal/art/${props.post.id}`}
          className="hidden-link"
          aria-hidden="true"
        >
          Hidden Link
        </a>
      </div>
    </PostDetailsDialog>
  );
}

const pageSize = 20;

export const TrendingPostsMasonry = () => {
  const { dataSocialPosts, loadingSocialPosts, fetchMoreSocialPosts } =
    useSocialPosts(pageSize, "0");

  const postGroups = groupIntertwined(selectSocialPosts(dataSocialPosts) || []);
  const endCursor = dataSocialPosts?.socialPosts.pageInfo.endCursor || "";
  const hasNext = !!dataSocialPosts?.socialPosts.pageInfo.hasNextPage;

  const loadMoreItems = useCallback(async () => {
    if (hasNext) {
      await fetchMoreSocialPosts(pageSize, endCursor);
    }
  }, [endCursor, hasNext, fetchMoreSocialPosts]);

  const { t } = useTranslation();

  if (loadingSocialPosts) {
    return <></>;
  }
  return (
    <>
      <div className={"flex gap-2"}>
        <Button variant={"secondary"} href={"/portal/art/create-post"}>
          <ImagePlus className={"mr-1"} size={18} /> {t("buttons_create_post")}
        </Button>

        <Button
          className={"bg-pink-600 hover:bg-pink-700 text-white rounded-md"}
          variant={"secondary"}
          href={"/portal/art/text-to-image"}
        >
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
                  hasMore={!!dataSocialPosts?.socialPosts.pageInfo.hasNextPage}
                  loader={<h4>Loading...</h4>}
                >
                  {group.map((post) => {
                    const photo = post.photoMedia?.at(0);
                    return (
                      <PostMasonryItem
                        key={post.id}
                        photo={photo}
                        post={post}
                      />
                    );
                  })}
                </InfiniteScroll>
              </div>
            );
          }

          return (
            <div className="gap-4" key={ii}>
              {group.map((post) => {
                const photo = post.photoMedia?.at(0);
                return (
                  <PostMasonryItem key={post.id} photo={photo} post={post} />
                );
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
