import { gql } from "@apollo/client";

export const queryUser = gql`
  query User {
    user {
      id
      email
      name
      isAdmin
      username
    }
  }
`;
