import { useQuery } from "@apollo/client";
import { queryWalletAccount } from "@/app/portal/airdrop/data/queries";
import { WalletAccountQuery } from "@/gql/graphql";

export const useWalletAccount = () => {
  const { data, loading } = useQuery<WalletAccountQuery>(queryWalletAccount);
  return {
    walletAccountData: data,
    walletAccountLoading: loading,
  };
};
