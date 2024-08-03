import { useMutation } from "@apollo/client";
import { mutateCreateText2Image } from "@/app/portal/art/text-to-image/data/queries";
import {
  CreateTextToImageMutation,
  SetPhotoUploadedMutation,
} from "@/gql/graphql";
import { mutateSetPhotoUploaded } from "@/app/portal/art/text-to-image/data/mutations";
import { queryTextToImageHistory } from "@/app/portal/art/text-to-image/history/data/queries";

export const useCreateTextToImage = () => {
  const [createTextToImage, { loading }] =
    useMutation<CreateTextToImageMutation>(mutateCreateText2Image, {
      refetchQueries: [
        { query: queryTextToImageHistory, variables: { data: {} } },
      ],
    });
  return { createTextToImage, createTextToImageLoading: loading };
};

export const useSetPhotoUploaded = () => {
  const [setPhotoUploaded, { data, loading }] =
    useMutation<SetPhotoUploadedMutation>(mutateSetPhotoUploaded);
  return {
    setPhotoUploaded,
    setPhotoUploadedData: data,
    setPhotoUploadedLoading: data,
  };
};
