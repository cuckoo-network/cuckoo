import { useCallback } from "react";
import { AirdropType } from "@/app/portal/airdrop/selectors/select-history-items";

export function useOnClaim(
  isLoggedIn: boolean,
  redirectLogin: () => void,
  requestAirdrop: any,
  toast: any,
) {
  return useCallback(
    async (type: AirdropType, amount?: number) => {
      if (!isLoggedIn) {
        redirectLogin();
      }

      try {
        const requestAirdropData = await requestAirdrop({
          variables: {
            data: {
              amount: amount || null,
              type: type,
            },
          },
        });

        if (requestAirdropData.data.requestAirdrop) {
          toast({
            title: "Congratulations!",
            description: "You have claimed the airdrop",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Failed to claim",
            description:
              "Unable to claim airdrop. Please ensure all required tasks are completed before trying again.",
          });
        }
      } catch (err) {
        toast({
          variant: "destructive",
          title: "Failed to claim",
          description: "Reason unknown",
        });
      }
    },
    [isLoggedIn, redirectLogin, requestAirdrop, toast],
  );
}
