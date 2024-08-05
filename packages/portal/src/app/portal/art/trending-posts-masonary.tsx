"use client";

import React from "react";
import { useSocialPosts } from "@/app/portal/art/hooks/use-social-posts";
import { Button } from "@/components/ui/button";
import { ImagePlus, Sparkles } from "lucide-react";
import { SocialPostsQuery } from "@/gql/graphql";
import Image from "next/image";

function selectSocialPosts(dataTrendingPosts: SocialPostsQuery | undefined) {
  return dataTrendingPosts?.socialPosts.edges.map((ed) => ed.node);
}

export const TrendingPostsMasonary = () => {
  const { dataTrendingPosts, loadingTrendingPosts } = useSocialPosts(1000, "0");
  if (loadingTrendingPosts) {
    return <></>;
  }

  const postGroups = groupIntertwined(
    selectSocialPosts(dataTrendingPosts) || [],
  );

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
          return (
            <div className="gap-4" key={ii}>
              {group.map((post) => {
                const photo = post.photoMedia?.at(0);
                return (
                  <div key={post.id} className={"mb-4"}>
                    {(photo?.width && photo?.height) ? (
                      <Image
                        alt={post.title || ""}
                        width={photo.width}
                        height={photo.height}
                        src={photo?.url}
                      />
                    ) : (
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src={photo?.url}
                        alt=""
                      />
                    )}
                    <div className="break-word w-full text-white no-underline">
                      {post.title}
                    </div>

                    <div className="mt-2 flex max-w-[calc(100%-65px)] items-center gap-1">
                      <Image
                        className="h-6 w-6 shrink-0 rounded-full object-cover sm:h-8 sm:w-8"
                        width={32}
                        height={32}
                        alt={post.profile.name}
                        src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(post.profile.name)}`}
                      />

                      {post.profile.name}
                    </div>
                  </div>
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
    const groupIndex = i % 5;
    groups[groupIndex].push(items[i]);
  }

  return groups;
}
