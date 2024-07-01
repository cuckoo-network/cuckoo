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
    }
  }
`;
