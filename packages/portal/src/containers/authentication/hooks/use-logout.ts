import { useMutation } from "@apollo/client";
import { mutateLogout } from "@/containers/authentication/data/mutation";
import {LogoutMutation} from "@/gql/graphql";

export const useLogout = () => {
  const [logout, { loading }] = useMutation<LogoutMutation>(mutateLogout);
  return { logout, logoutLoading: loading };
};
