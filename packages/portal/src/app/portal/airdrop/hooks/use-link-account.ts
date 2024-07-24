import { useMutation } from "@apollo/client";
import { mutateLinkAccount } from "@/app/portal/airdrop/data/mutations";

export const useLinkAccount = () => {
  const [linkAccount, { data, loading }] = useMutation(mutateLinkAccount);
  return {
    linkAccount,
    linkAccountData: data,
    linkAccountLoading: loading,
  };
};
