import { useQuery } from "@apollo/client";
import { RandomPromptQuery } from "@/gql/graphql";
import { queryRandomPrompt } from "@/app/portal/art/text-to-image/data/queries";
import { useState } from "react";

export const useRandomPrompt = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data, loading, refetch } =
    useQuery<RandomPromptQuery>(queryRandomPrompt);
  return {
    randomPromptData: data,
    randomPromptLoading: loading || isLoading,
    randomPromptRefetch: async () => {
      setIsLoading(true);
      await refetch();
      setIsLoading(false);
    },
  };
};
