import { useQuery } from "@apollo/client";
import { queryAirdropHistory } from "@/app/portal/airdrop/data/queries";
import { AirdropHistoryQuery } from "@/gql/graphql";

export const useAirdropHistory = () => {
  const { data, loading } = useQuery<AirdropHistoryQuery>(queryAirdropHistory);

  return {
    airdropHistoryData: data,
    airdropHistoryLoading: loading,
  };
};
