import { useMutation } from "@apollo/client";
import { mutateRequestAirdrop } from "@/app/portal/airdrop/data/mutations";
import {
  queryAirdropHistory,
  queryAirdropStats,
  queryWalletAccount,
} from "@/app/portal/airdrop/data/queries";

export const useRequestAirdrop = () => {
  const [requestAirdrop, { data, loading }] = useMutation(
    mutateRequestAirdrop,
    {
      refetchQueries: [
        { query: queryAirdropHistory },
        { query: queryAirdropStats },
        { query: queryWalletAccount },
      ],
    },
  );
  return {
    requestAirdrop,
    requestAirdropData: data,
    requestAirdropLoading: loading,
  };
};
