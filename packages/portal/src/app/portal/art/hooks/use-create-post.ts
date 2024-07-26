import { useMutation } from "@apollo/client";
import { mutateCreatePost } from "@/app/portal/art/data/mutations";
import { queryTrendingPosts } from "@/app/portal/art/data/queries";
import {CreatePostMutation} from "@/gql/graphql";

export const useCreatePost = () => {
  const [createPost, { data, loading, error }] = useMutation<CreatePostMutation>(mutateCreatePost, {
    refetchQueries: [{ query: queryTrendingPosts }],
  });

  return {
    createPost,
    dataCreatePost: data,
    loadingCreatePost: loading,
    errorCreatePost: error,
  };
};
