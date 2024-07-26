import {gql} from "@apollo/client";

export const mutateRequestTokens = gql`
  mutation RequestTokens($address: String!) {
    requestTokens(address: $address) {
      erc20TokenTransferHash
      nativeTokenTransferHash
    }
  }
`;
