import { useMutation } from "@apollo/client";
import { mutateSendTransaction } from "@/app/portal/airdrop/data/mutations";

export const useSendTransaction = () => {
  const [sendTransaction, { data, loading }] = useMutation(
    mutateSendTransaction,
  );
  return {
    sendTransaction,
    sendTransactionData: data,
    sendTransactionLoading: loading,
  };
};
