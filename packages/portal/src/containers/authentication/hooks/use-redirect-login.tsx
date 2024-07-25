import { usePathname, useRouter } from "next/navigation";

export const useRedirectLogin = () => {
  const router = useRouter();
  const path = usePathname();
  return () => {
    localStorage.setItem("cuckoo:prevLocation", path);
    router.push(`/portal/login`, {
      scroll: true,
    });
  };
};
