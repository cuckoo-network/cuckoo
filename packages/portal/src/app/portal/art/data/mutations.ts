import { gql } from "@apollo/client";

export const mutateCreatePost = gql`
  mutation CreatePost($data: CreateSocialPostInput!) {
    createSocialPost(data: $data) {
      photoMedia {
        id
        url
        sortOrder
      }
    }
  }
`;
