import { useUser } from "@/containers/authentication/hooks/use-user";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export const Authenticated = ({ children }: { children: React.ReactNode }) => {
  const { errorUser } = useUser();
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (
      errorUser?.message === "Access denied! Please login to continue!" &&
      typeof localStorage
    ) {
      localStorage.setItem("cuckoo:prevLocation", path);
      router.push(`/portal/login`, {
        scroll: true,
      });
    }
  }, [errorUser?.message, path, router]);

  return <>{children}</>;
};
