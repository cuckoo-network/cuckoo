"use client";

import React from "react";
import { useTrendingPosts } from "@/app/portal/art/hooks/use-trending-posts";

export const TrendingPostsMasonary = () => {
  const { dataTrendingPosts, loadingTrendingPosts } = useTrendingPosts();
  if (loadingTrendingPosts) {
    return <></>;
  }

  const postGroups = groupIntertwined(dataTrendingPosts?.trendingPosts.posts);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
      {postGroups.map((group, ii) => (
        <div className="gap-4" key={ii}>
          {group.map((p: any) => (
            <div key={p.id} className={"mb-4"}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={p.photoMedia[0].url}
                alt=""
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

function groupIntertwined<T>(items: T[]): T[][] {
  const groups: T[][] = [[], [], [], [], [], []];

  for (let i = 0; i < items.length; i++) {
    const groupIndex = i % 6;
    groups[groupIndex].push(items[i]);
  }

  return groups;
}
