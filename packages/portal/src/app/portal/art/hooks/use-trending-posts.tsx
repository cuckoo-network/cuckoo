import { useQuery } from "@apollo/client";
import { queryTrendingPosts } from "@/app/portal/art/data/queries";

export const useTrendingPosts = () => {
  const { loading, data, error } = useQuery(queryTrendingPosts);
  return {
    loadingTrendingPosts: loading,
    dataTrendingPosts: data,
    errorTrendingPosts: error,
  };
};
