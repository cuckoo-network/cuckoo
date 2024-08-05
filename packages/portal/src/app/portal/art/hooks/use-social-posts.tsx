import { useQuery } from "@apollo/client";
import { querySocialPosts } from "@/app/portal/art/data/queries";
import { SocialPostsQuery } from "@/gql/graphql";

export const useSocialPosts = (first: number, after: string) => {
  const { loading, data, error } = useQuery<SocialPostsQuery>(
    querySocialPosts,
    {
      variables: {
        // first,
        // after,
      },
    },
  );
  return {
    loadingTrendingPosts: loading,
    dataTrendingPosts: data,
    errorTrendingPosts: error,
  };
};
