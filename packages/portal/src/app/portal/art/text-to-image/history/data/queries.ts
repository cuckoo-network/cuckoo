import { gql } from "@apollo/client";

export const queryTextToImageHistory = gql`
  query TextToImageHistory($after: String, $first: Float, $id: ID) {
    textToImageHistory(after: $after, first: $first, id: $id) {
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
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
    }
  }
`;
