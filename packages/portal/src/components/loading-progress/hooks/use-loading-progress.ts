import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const useLoadingProgress = () => {
  const [progress, setProgress] = useState(0);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => {
      setProgress(0);
    };
    const handleStop = () => {
      setProgress(100);
    };

    handleStop();

    return () => {
      handleStart();
    };
  }, [pathname, searchParams]);

  return progress;
};
