"use client";

import { useLogout } from "@/containers/authentication/hooks/use-logout";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { apolloClient } from "@/lib/apollo-client";

const postLogoutPath = "/portal/art";

export const Logout = () => {
  const { logout } = useLogout();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      localStorage.removeItem("cuckoo:token");
      try {
        await logout();
      } catch (err) {
        console.error(err);
      }
      await apolloClient.clearStore();
      router.push(postLogoutPath);
    })();
  }, [logout, router]);
  return <></>;
};
