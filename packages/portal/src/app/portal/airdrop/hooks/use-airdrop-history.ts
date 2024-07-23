import { useQuery } from "@apollo/client";
import { queryAirdropHistory } from "@/app/portal/airdrop/data/queries";

export const useAirdropHistory = () => {
  const { data, loading } = useQuery(queryAirdropHistory);

  return {
    airdropHistoryData: data,
    airdropHistoryLoading: loading,
  };
};
