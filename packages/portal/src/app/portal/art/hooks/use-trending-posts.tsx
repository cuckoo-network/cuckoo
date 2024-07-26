import { useQuery } from "@apollo/client";
import { queryTrendingPosts } from "@/app/portal/art/data/queries";
import { TrendingPostsQuery } from "@/gql/graphql";

export const useTrendingPosts = () => {
  const { loading, data, error } =
    useQuery<TrendingPostsQuery>(queryTrendingPosts);
  return {
    loadingTrendingPosts: loading,
    dataTrendingPosts: data,
    errorTrendingPosts: error,
  };
};
