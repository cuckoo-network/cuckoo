import { useUser } from "@/containers/authentication/hooks/use-user";
import { useEffect, useState } from "react";

export const useIsLoggedIn = (): {
  isLoggedIn: boolean;
  isLoggedInLoading: boolean;
} => {
  const { errorUser, loadingUser } = useUser();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (errorUser?.message === "Access denied! Please login to continue!") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [errorUser]);

  return { isLoggedIn, isLoggedInLoading: loadingUser };
};
