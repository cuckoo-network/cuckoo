import { gql } from "@apollo/client";

export const queryTextToImageHistory = gql`
  query TextToImageHistory($data: TextToImageHistoryRequest!) {
    textToImageHistory(data: $data) {
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
