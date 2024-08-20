import React from "react";
import { DashLayout } from "@/components/ui/dash-layout";
import { TrendingPostsMasonry } from "@/app/portal/art/trending-posts-masonry";
import { ArtTitle } from "@/app/portal/art/art-title";
import { ArtDetailsContainer } from "@/app/portal/art/[spostId]/art-details-container";
import type { Metadata, ResolvingMetadata } from "next";
import { apolloClient } from "@/lib/apollo-client";
import { SocialPostsQuery } from "@/gql/graphql";
import { querySocialPosts } from "@/app/portal/art/data/queries";

// const cfg = {
//   title: "Cuckoo Art",
//   site: "@CuckooNetworkHQ",
//   images: ["https://cuckoo-network.b-cdn.net/cuckoo-social-card.webp"],
//   description: "Cuckoo AI Onchain Creative Platform for Anime Fandom",
// };

// export const metadata: Metadata = {
//   title: cfg.title,
//   twitter: cfg,
//   openGraph: cfg,
// };

type Props = {
  params: { spostId: string };
};

function selectSocialPost(dataSocialPost: SocialPostsQuery | undefined) {
  return dataSocialPost?.socialPosts.edges?.at(0)?.node;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.spostId;

  // fetch data
  const { data } = await apolloClient.query<SocialPostsQuery>({
    query: querySocialPosts,
    variables: { id },
  });

  const post = selectSocialPost(data);

  if (!post) {
    return {
      title: "not found - Cuckoo AI",
    };
  }

  return {
    title: `${post.title} - Cuckoo AI`,
    description: post.description,
    openGraph: {
      images: [post.photoMedia?.at(0)?.url ?? ""],
    },
  };
}

export default async function ArtDetailsPage() {
  return (
    <DashLayout>
      <ArtDetailsContainer />
    </DashLayout>
  );
}
