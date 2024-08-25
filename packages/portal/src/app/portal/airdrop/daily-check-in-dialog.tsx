import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useUpdateAccount } from "@/app/portal/airdrop/hooks/use-update-account";
import { useRef, useState } from "react";
import serialize from "form-serialize";
import { useToast } from "@/components/ui/use-toast";
import { useRequestAirdrop } from "@/app/portal/airdrop/hooks/use-request-airdrop";
import { useUser } from "@/containers/authentication/hooks/use-user";
import { useIsLoggedIn } from "@/containers/authentication/hooks/use-is-logged-in";
import { useRedirectLogin } from "@/containers/authentication/hooks/use-redirect-login";
import { useOnClaim } from "@/app/portal/airdrop/hooks/use-on-claim";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { AirdropType } from "@/app/portal/airdrop/selectors/select-history-items";
import WheelComponent from "react-wheel-of-prizes";

const doneButtonStyle = (done: boolean) =>
  cn("w-full", done && "bg-green-600 text-white hover:bg-green-800");

export function DailyCheckInDialog({
  done,
  isLoading: parentIsLoading,
}: {
  isLoading: boolean;
  done: boolean;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const { dataUser, loadingUser } = useUser();
  const { linkAccountLoading, updateAccount } = useUpdateAccount();
  const { requestAirdrop, requestAirdropLoading } = useRequestAirdrop();
  const { toast } = useToast();
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState<string>("");
  const isLoading =
    parentIsLoading ||
    linkAccountLoading ||
    requestAirdropLoading ||
    linkAccountLoading;
  const { isLoggedIn, isLoggedInLoading } = useIsLoggedIn();
  const redirectLogin = useRedirectLogin();
  const onClaim = useOnClaim(isLoggedIn, redirectLogin, requestAirdrop, toast);

  const segments = [
    "1 $CAI",
    "2 $CAI",
    "3 $CAI",
    "4 $CAI",
    "5 $CAI",
  ];
  const segColors = ["black", "#60BA97", "black", "#60BA97", "black"];
  const onWheelFinished = (winner: string) => {
    const match = winner.match(/^(\d+)/);
    const amount: number = match ? parseInt(match[1], 10) : NaN;
    onClaim(AirdropType.DAILY_CLAIM, amount)
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className={doneButtonStyle(done)}
          disabled={done || isLoading}
          isLoading={isLoading}
        >
          {done ? "Claimed" : "Claim"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Spin the Wheel for Your Daily Drop!</DialogTitle>
          <DialogDescription>
            Spin now to reveal today's exclusive offer and snag amazing deals! Try your luck and see what you win!
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center items-center w-full">
          <div className="wheel-container">
            <WheelComponent
              segments={segments}
              segColors={segColors}
              onFinished={(winner: string) => onWheelFinished(winner)}
              primaryColor="black"
              contrastColor="white"
              buttonText="Spin"
              isOnlyOnce={true}
              size={200} // Adjust this size to fit your dialog
              upDuration={200}
              downDuration={800}
              fontFamily="Arial"
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            isLoading={isLoading}
            disabled={!otpSent || requestAirdropLoading}
            onClick={async (e) => {
              e.preventDefault();

              try {
                const formObj = serialize(formRef.current!, { hash: true });
                const resp = await updateAccount({
                  variables: {
                    data: {
                      email: formObj.email,
                      emailOtp: formObj.emailOtp,
                      type: "EMAIL_VERIFY_OTP",
                    },
                  },
                });

                if (!resp.data?.updateAccount.ok) {
                  setError("Incorrect code");
                  return;
                }

                setError("");

                const requestAirdropData = await requestAirdrop({
                  variables: {
                    data: {
                      type: AirdropType.ADD_EMAIL,
                    },
                  },
                });

                if (requestAirdropData.data?.requestAirdrop) {
                  toast({
                    title: "Congratulations!",
                    description: "You have claimed the airdrop",
                  });

                  window.location.reload();
                } else if (dataUser?.user.email) {
                  // updating email
                  window.location.reload();
                } else {
                  setError("Cannot claim");
                  toast({
                    variant: "destructive",
                    title: "Failed to claim",
                    description: "Criteria unmet",
                  });
                }
              } catch (err: any) {
                console.error("failed to verify email OTP", err);
                setError(err?.graphQLErrors?.at(0).message || "Unknown error");
              }
            }}
            type="submit"
          >
            Claim
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
