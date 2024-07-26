import { useMutation } from "@apollo/client";
import { mutateSendTransaction } from "@/app/portal/airdrop/data/mutations";
import {SendTransactionMutation} from "@/gql/graphql";

export const useSendTransaction = () => {
  const [sendTransaction, { data, loading }] = useMutation<SendTransactionMutation>(
    mutateSendTransaction,
  );
  return {
    sendTransaction,
    sendTransactionData: data,
    sendTransactionLoading: loading,
  };
};
