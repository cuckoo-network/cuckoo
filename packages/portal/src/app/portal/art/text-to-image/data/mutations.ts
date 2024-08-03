import { gql } from "@apollo/client";

export const mutateCreatePhotoMedia = gql`
  mutation CreatePhotoMedia($data: PhotoMediaInput2!) {
    createPhotoMedia(data: $data) {
      id
      sortOrder
      width
      height
      readUrl
      writeUrl
      postId
      textToImageId
    }
  }
`;

export const mutateSetPhotoUploaded = gql`
  mutation SetPhotoUploaded($setPhotoUploadedId: String!) {
    setPhotoUploaded(id: $setPhotoUploadedId)
  }
`;
