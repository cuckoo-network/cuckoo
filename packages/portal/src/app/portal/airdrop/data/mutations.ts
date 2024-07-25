import { gql } from "@apollo/client";

export const mutateRequestAirdrop = gql`
  mutation RequestAirdrop($data: RequestAirdropInput!) {
    requestAirdrop(data: $data)
  }
`;

export const mutateUpdateAccount = gql`
  mutation UpdateAccount($data: UpdateAccountInput!) {
    updateAccount(data: $data) {
      type
      erc4361Message
      ok
    }
  }
`;

export const mutateSendTransaction = gql`
  mutation SendTransaction($transaction: TransactionRequest!) {
    sendTransaction(transaction: $transaction) {
      hash
    }
  }
`;
