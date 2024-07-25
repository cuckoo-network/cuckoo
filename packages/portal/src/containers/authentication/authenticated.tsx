import { useUser } from "@/containers/authentication/hooks/use-user";
import { useEffect } from "react";
import { useRedirectLogin } from "@/containers/authentication/hooks/use-redirect-login";

export const Authenticated = ({ children }: { children: React.ReactNode }) => {
  const { errorUser } = useUser();
  const redirectLogin = useRedirectLogin();

  useEffect(() => {
    if (
      errorUser?.message === "Access denied! Please login to continue!" &&
      typeof localStorage
    ) {
      redirectLogin();
    }
  }, [errorUser?.message, redirectLogin]);

  return <>{children}</>;
};
