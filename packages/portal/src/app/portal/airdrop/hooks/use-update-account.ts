import { useMutation } from "@apollo/client";
import { mutateUpdateAccount } from "@/app/portal/airdrop/data/mutations";

export const useUpdateAccount = () => {
  const [updateAccount, { data, loading }] = useMutation(mutateUpdateAccount);
  return {
    updateAccount,
    linkAccountData: data,
    linkAccountLoading: loading,
  };
};
