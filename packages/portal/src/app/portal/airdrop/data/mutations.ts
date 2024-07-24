import { gql } from "@apollo/client";

export const mutateRequestAirdrop = gql`
  mutation RequestAirdrop($data: RequestAirdropInput!) {
    requestAirdrop(data: $data)
  }
`;

export const mutateLinkAccount = gql`
  mutation LinkAccount($data: LinkAccountInput!) {
    linkAccount(data: $data) {
      type
      erc4361Message
      ok
    }
  }
`;
