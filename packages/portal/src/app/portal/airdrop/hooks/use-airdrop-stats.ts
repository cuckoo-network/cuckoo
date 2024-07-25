import { queryAirdropStats } from "@/app/portal/airdrop/data/queries";
import { useQuery } from "@apollo/client";

export const useAirdropStats = () => {
  const { data, loading } = useQuery(queryAirdropStats);
  return {
    airdropStatsLoading: loading,
    airdropStatsData: data,
  };
};
