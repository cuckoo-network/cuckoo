import { useMutation } from "@apollo/client";
import { mutateRequestAirdrop } from "@/app/portal/airdrop/data/mutations";
import {
  queryAirdropHistory,
  queryAirdropStats,
  queryWalletAccount,
} from "@/app/portal/airdrop/data/queries";
import {RequestAirdropMutation} from "@/gql/graphql";

export const useRequestAirdrop = () => {
  const [requestAirdrop, { data, loading }] = useMutation<RequestAirdropMutation>(
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
