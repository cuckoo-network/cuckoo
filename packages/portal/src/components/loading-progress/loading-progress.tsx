import LoadingBar from "react-top-loading-bar";
import * as React from "react";
import { useLoadingProgress } from "@/components/loading-progress/hooks/use-loading-progress";

export function LoadingProgress() {
  const progress = useLoadingProgress();

  return (
    <LoadingBar
      color="rgb(79, 70, 229)"
      progress={progress}
      waitingTime={400}
    />
  );
}
