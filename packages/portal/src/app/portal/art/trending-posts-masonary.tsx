"use client";

import React from "react";
import {useTrendingPosts} from "@/app/portal/art/hooks/use-trending-posts";
import {Button} from "@/components/ui/button";

export const TrendingPostsMasonary = () => {
  const {dataTrendingPosts, loadingTrendingPosts} = useTrendingPosts();
  if (loadingTrendingPosts) {
    return <></>;
  }

  const postGroups = groupIntertwined(dataTrendingPosts?.trendingPosts.posts);

  return (
    <>
      <div className={"flex gap-1"}>
        <Button variant={"secondary"} href={"/portal/art/create-post"}>Creat Post</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
        {postGroups.map((group, ii) => {
          return (
            <div className="gap-4" key={ii}>
              {group.map((p: any) => {
                return (
                  <div key={p.id} className={"mb-4"}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={p.photoMedia?.at(0)?.url}
                      alt=""
                    />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  );
};

function groupIntertwined<T>(items: T[]): T[][] {
  const groups: T[][] = [[], [], [], [], []];

  for (let i = 0; i < items.length; i++) {
    const groupIndex = i % 5;
    groups[groupIndex].push(items[i]);
  }

  return groups;
}
