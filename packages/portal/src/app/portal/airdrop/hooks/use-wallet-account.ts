import { useQuery } from "@apollo/client";
import { queryWalletAccount } from "@/app/portal/airdrop/data/queries";

export const useWalletAccount = () => {
  const { data, loading } = useQuery(queryWalletAccount);
  return {
    walletAccountData: data,
    walletAccountLoading: loading,
  };
};
