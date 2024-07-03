import { useMutation } from "@apollo/client";
import { mutateCreatePost } from "@/app/portal/art/data/mutations";
import { queryTrendingPosts } from "@/app/portal/art/data/queries";

export const useCreatePost = () => {
  const [createPost, { data, loading, error }] = useMutation(mutateCreatePost, {
    refetchQueries: [{ query: queryTrendingPosts }],
  });

  return {
    createPost,
    dataCreatePost: data,
    loadingCreatePost: loading,
    errorCreatePost: error,
  };
};
