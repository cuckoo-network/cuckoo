import { gql } from "@apollo/client";

export const mutateCreateText2Image = gql`
  mutation CreateTextToImage($data: TextToImageInput!) {
    createTextToImage(data: $data) {
      id
      prompt
      negativePrompt
      samplingSteps
      width
      height
      createdAt
      photoMedia {
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
  }
`;
