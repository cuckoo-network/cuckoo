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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { AirdropType } from "@/app/portal/airdrop/selectors/select-history-items";

const doneButtonStyle = (done: boolean) =>
  cn("w-full", done && "bg-green-600 text-white hover:bg-green-800");

export function EmailVerifyOtpDialog({
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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className={doneButtonStyle(done)}
          disabled={done || isLoading}
          isLoading={isLoading}
        >
          {done ? "Claimed" : "Verify to Claim"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Email</DialogTitle>
          <DialogDescription>
            Receive latest news and benefits
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" ref={formRef}>
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Name
            </Label>
            <Input
              disabled={loadingUser}
              readOnly={otpSent}
              id="email"
              name="email"
              type={"email"}
              defaultValue={dataUser?.user.email || ""}
              placeholder="email@example.com"
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="" className="text-right"></Label>
            <div className="right-0">
              <Button
                disabled={otpSent}
                onClick={async (e) => {
                  e.preventDefault();

                  try {
                    const formObj = serialize(formRef.current!, { hash: true });
                    const resp = await updateAccount({
                      variables: {
                        data: {
                          email: formObj.email,
                          emailOtp: null,
                          type: "EMAIL_SEND_OTP",
                        },
                      },
                    });
                    setOtpSent(true);
                    setError("");
                    toast({
                      title: "4-digit Code Sent",
                    });
                  } catch (err: any) {
                    setError(
                      err?.graphQLErrors[0].extensions?.validationErrors[0]
                        .constraints?.isEmail || "err?.errors?[0].message",
                    );
                  }
                }}
                variant={"secondary"}
              >
                {otpSent ? "Sent" : "Send Code"}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="emailOtp" className="text-right">
              4-digit Code
            </Label>
            <Input
              name="emailOtp"
              id="emailOtp"
              className="col-span-3"
              placeholder={"0123"}
            />
          </div>
        </form>
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
            Verify and Claim
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
