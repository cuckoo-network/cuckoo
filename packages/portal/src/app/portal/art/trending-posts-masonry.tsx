"use client";

import React, { useCallback, useState, useEffect } from "react";
import { useSocialPosts } from "@/app/portal/art/hooks/use-social-posts";
import { Button } from "@/components/ui/button";
import { ImagePlus, Sparkles } from "lucide-react";
import { SocialPostsQuery } from "@/gql/graphql";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslation } from "@/lib/i18n-client-use-translation";
import { PostMasonryItem } from "@/app/portal/art/post-masonry-item";

function selectSocialPosts(dataTrendingPosts: SocialPostsQuery | undefined) {
  const seenIds = new Set<string>();
  return (
    dataTrendingPosts?.socialPosts.edges
      .map((ed) => ed.node)
      .filter((node) => {
        if (seenIds.has(node.id)) {
          return false;
        } else {
          seenIds.add(node.id);
          return true;
        }
      }) || []
  );
}

const pageSize = 20;

// Custom debounce function
function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function getGridColsClass(columns: number) {
  switch (columns) {
    case 6:
      return "grid-cols-6";

    case 5:
      return "grid-cols-5";
    case 4:
      return "grid-cols-4";
    default:
      return "grid-cols-2";
  }
}

export const TrendingPostsMasonry = () => {
  const { dataSocialPosts, loadingSocialPosts, fetchMoreSocialPosts } =
    useSocialPosts(pageSize, "0");

  const [columns, setColumns] = useState(5);

  // Debounced updateColumns function
  const updateColumns = useCallback(
    debounce(() => {
      if (window.innerWidth >= 1536) {
        setColumns(6);
      } else if (window.innerWidth >= 1280) {
        setColumns(5);
      } else if (window.innerWidth >= 1024) {
        setColumns(4);
      } else if (window.innerWidth >= 768) {
        setColumns(2);
      } else {
        setColumns(2);
      }
    }, 200), // Debounce delay in milliseconds
    [],
  );

  useEffect(() => {
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [updateColumns]);

  const postGroups = groupIntertwined(
    selectSocialPosts(dataSocialPosts) || [],
    columns,
  );
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

      <div className={`grid ${getGridColsClass(columns)} gap-4`}>
        {postGroups.map((group, ii) => {
          if (ii === 0) {
            return (
              <div key={ii}>
                <InfiniteScroll
                  dataLength={group.length}
                  next={loadMoreItems}
                  hasMore={hasNext}
                  loader={<h4>Loading...</h4>}
                  className="gap-4"
                  style={{ overflowY: "auto", overflowX: "hidden" }}
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

function groupIntertwined<T>(items: T[], numGroups: number): T[][] {
  if (!items) {
    return [[]];
  }

  const groups: T[][] = Array.from({ length: numGroups }, () => []);

  for (let i = 0; i < items.length; i++) {
    const groupIndex = i % numGroups;
    groups[groupIndex].push(items[i]);
  }

  return groups;
}
