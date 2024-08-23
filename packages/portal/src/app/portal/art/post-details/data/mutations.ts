import { gql } from "@apollo/client";

export const mutateInteractWithPost = gql`
  mutation InteractWithPost($data: InteractWithPostInput!) {
    interactWithPost(data: $data)
  }
`;
