import { useMutation } from "@apollo/client";
import { mutateInteractWithPost } from "@/app/portal/art/post-details/data/mutations";
import { InteractWithPostMutation } from "@/gql/graphql";

export const useInteractWithPost = () => {
  const [mutate, { data, loading, error }] =
    useMutation<InteractWithPostMutation>(mutateInteractWithPost);
  return {
    interactWithPost: mutate,
    interactWithPostLoading: loading,
    interactWithPostError: error,
    interactWithPostData: data,
  };
};
