import { gql } from "@apollo/client";

export const mutateLogout = gql`
  mutation Logout {
    logout
  }
`;
