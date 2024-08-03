import { useMutation } from "@apollo/client";
import { mutateCreatePhotoMedia } from "@/app/portal/art/text-to-image/data/mutations";
import { CreatePhotoMediaMutation } from "@/gql/graphql";

export const useCreatePhotoMedia = () => {
  const [createPhoto, { data, loading }] =
    useMutation<CreatePhotoMediaMutation>(mutateCreatePhotoMedia);
  return {
    createPhoto,
    createPhotoData: data,
    createPhotoLoading: loading,
  };
};
