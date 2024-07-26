import { useMutation } from "@apollo/client";
import { mutateCreateText2Image } from "@/app/portal/art/text-to-image/data/queries";
import { CreateTextToImageMutation } from "@/gql/graphql";

export const useCreateTextToImage = () => {
  const [createTextToImage, { loading }] =
    useMutation<CreateTextToImageMutation>(mutateCreateText2Image);
  return [createTextToImage, { createTextToImageLoading: loading }];
};
