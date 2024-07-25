import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export const useReferQueryParams = () => {
  const searchParams = useSearchParams();
  useEffect(() => {
    const referer = searchParams.get("referer");
    if (referer && typeof localStorage !== "undefined") {
      localStorage.setItem("referer", referer);
    }
  }, [searchParams]);
};
