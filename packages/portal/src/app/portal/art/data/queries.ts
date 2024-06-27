import { gql } from "@apollo/client";

export const queryTrendingPosts = gql`
  query TrendingPosts {
    trendingPosts {
      posts {
        id
        userId
        title
        description
        postState
        contentRating
        photoMedia {
          uuid
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
            uuid
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
    }
  }
`;
