import { useQuery } from "@apollo/client";
import { querySocialPosts } from "@/app/portal/art/data/queries";
import { SocialPostsQuery } from "@/gql/graphql";

export const useSocialPosts = (first: number, after: string) => {
  const { loading, data, error, fetchMore } = useQuery<SocialPostsQuery>(
    querySocialPosts,
    {
      pollInterval: 5 * 60 * 1000,
      variables: {
        first,
        after,
      },
      fetchPolicy: "network-only",
    },
  );

  return {
    loadingSocialPosts: loading,
    dataSocialPosts: data,
    errorSocialPosts: error,
    fetchMoreSocialPosts: (first: number, after: string) => {
      return fetchMore({
        variables: {
          first,
          after,
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
      fetchPolicy: "cache-first",
    },
  );
  return {
    loadingSocialPost: loading,
    dataSocialPost: data,
    errorSocialPost: error,
    fetchSocialPost: refetch,
  };
};
