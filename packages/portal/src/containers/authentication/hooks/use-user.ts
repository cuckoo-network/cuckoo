import {useQuery} from "@apollo/client";
import {queryUser} from "@/containers/authentication/data/queries";

export const useUser = () => {
  const {data, loading, error} = useQuery(queryUser);
  return {
    dataUser: data,
    loadingUser: loading,
    errorUser: error,
  }
}
