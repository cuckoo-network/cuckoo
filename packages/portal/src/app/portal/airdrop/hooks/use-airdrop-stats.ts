import { queryAirdropStats } from "@/app/portal/airdrop/data/queries";
import { useQuery } from "@apollo/client";
import { AirdropStatsQuery } from "@/gql/graphql";

export const useAirdropStats = () => {
  const { data, loading } = useQuery<AirdropStatsQuery>(queryAirdropStats);
  return {
    airdropStatsLoading: loading,
    airdropStatsData: data,
  };
};
