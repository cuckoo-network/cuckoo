import { useQuery } from "@apollo/client";
import { queryUser } from "@/containers/authentication/data/queries";
import { UserQuery } from "@/gql/graphql";

export const useUser = () => {
  const { data, loading, error } = useQuery<UserQuery>(queryUser);
  return {
    dataUser: data,
    loadingUser: loading,
    errorUser: error,
  };
};
