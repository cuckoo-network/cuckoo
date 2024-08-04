import { useQuery } from "@apollo/client";
import { querySocialPosts } from "@/app/portal/art/data/queries";
import { SocialPostsQuery } from "@/gql/graphql";

export const useSocialPosts = () => {
  const { loading, data, error } = useQuery<SocialPostsQuery>(querySocialPosts);
  return {
    loadingTrendingPosts: loading,
    dataTrendingPosts: data,
    errorTrendingPosts: error,
  };
};
