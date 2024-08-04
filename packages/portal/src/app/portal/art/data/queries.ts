import { gql } from "@apollo/client";

export const querySocialPosts = gql`
  query SocialPosts {
    socialPosts {
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
      edges {
        node {
          id
          userId
          title
          description
          postState
          contentRating
          photoMedia {
            id
            url
            sortOrder
            width
            height
          }
          hashtags
          likes
          collects
          comments
          profile {
            name
            profilePhoto {
              id
              url
              sortOrder
              width
              height
            }
            following
          }
          liked
          deletedAt
          createdAt
          updatedAt
        }
        cursor
      }
    }
  }
`;
