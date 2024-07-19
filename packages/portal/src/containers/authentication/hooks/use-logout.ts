import { useMutation } from "@apollo/client";
import { mutateLogout } from "@/containers/authentication/data/mutation";

export const useLogout = () => {
  const [logout, { loading }] = useMutation(mutateLogout);
  return { logout, logoutLoading: loading };
};
