import { useMutation } from "@apollo/client";
import { mutateUpdateAccount } from "@/app/portal/airdrop/data/mutations";
import {UpdateAccountMutation} from "@/gql/graphql";

export const useUpdateAccount = () => {
  const [updateAccount, { data, loading }] = useMutation<UpdateAccountMutation>(mutateUpdateAccount);
  return {
    updateAccount,
    linkAccountData: data,
    linkAccountLoading: loading,
  };
};
