import { useQuery } from "@apollo/client";
import { queryMiners } from "@/app/portal/staking/data/queries";
import { MinersQuery } from "@/gql/graphql";

export const useMiners = () => {
  const { data, loading } = useQuery<MinersQuery>(queryMiners);

  return {
    minersData: data,
    minersLoading: loading,
  };
};
