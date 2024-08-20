"use client";

import { useSocialPost } from "@/app/portal/art/hooks/use-social-posts";
import { useParams } from "next/navigation";
import { SocialPostsQuery } from "@/gql/graphql";
import { PostDetailsContent } from "@/app/portal/art/post-details/post-details-content";

function selectSocialPost(dataSocialPost: SocialPostsQuery | undefined) {
  return dataSocialPost?.socialPosts.edges?.at(0)?.node;
}

export const ArtDetailsContainer = () => {
  const { spostId } = useParams<{ spostId: string }>();
  const { dataSocialPost, loadingSocialPost } = useSocialPost(spostId);
  const post = selectSocialPost(dataSocialPost);

  return <PostDetailsContent post={post} loading={loadingSocialPost} />;
};
