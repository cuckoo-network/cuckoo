import { useQuery } from "@apollo/client";
import { querySocialPosts } from "@/app/portal/art/data/queries";
import { SocialPostsQuery } from "@/gql/graphql";

export const useSocialPosts = (first: number, after: string) => {
  const { loading, data, error, fetchMore } = useQuery<SocialPostsQuery>(
    querySocialPosts,
    {
      variables: {
        first,
        after,
      },
      fetchPolicy: "network-only",
    },
  );
  return {
    loadingTrendingPosts: loading,
    dataTrendingPosts: data,
    errorTrendingPosts: error,
    fetchMoreSocialPosts: (first: number, after: string) => {
      return fetchMore({
        variables: {
          first,
          after,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const previousEntry = previousResult.socialPosts;
          const newProducts = fetchMoreResult.socialPosts;
          return {
            socialPosts: {
              pageInfo: newProducts.pageInfo,
              edges: [...previousEntry.edges, ...newProducts.edges],
            },
          };
        },
      });
    },
  };
};

export const useSocialPost = (id?: string) => {
  const { loading, data, error, refetch } = useQuery<SocialPostsQuery>(
    querySocialPosts,
    {
      variables: {
        id,
      },
      skip: !id,
      fetchPolicy: "network-only",
    },
  );
  return {
    loadingTrendingPost: loading,
    dataTrendingPost: data,
    errorTrendingPost: error,
    fetchTrendingPost: refetch,
  };
};
