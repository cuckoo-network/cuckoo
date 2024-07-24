"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAirdropHistory } from "@/app/portal/airdrop/hooks/use-airdrop-history";
import { useIsLoggedIn } from "@/containers/authentication/hooks/use-is-logged-in";
import { cn } from "@/lib/utils";
import { useRedirectLogin } from "@/containers/authentication/hooks/use-redirect-login";
import { useCallback } from "react";
import { useRequestAirdrop } from "@/app/portal/airdrop/hooks/use-request-airdrop";
import { useToast } from "@/components/ui/use-toast";
import { EmailVerifyOtpDialog } from "@/app/portal/airdrop/email-verify-otp-dialog";
import {
  AirdropType,
  selectHistoryItems,
} from "@/app/portal/airdrop/selectors/select-history-items";

export const AirdropWaterfall = () => {
  const { toast } = useToast();
  const { requestAirdrop, requestAirdropLoading } = useRequestAirdrop();
  const { isLoggedIn, isLoggedInLoading } = useIsLoggedIn();
  const { airdropHistoryData, airdropHistoryLoading } = useAirdropHistory();
  const historyItems = airdropHistoryData?.airdropHistory;
  const {
    login,
    refer,
    addEmail,
    dailyClaim,
    followX,
    create1stImage,
    stakeCai,
    mineFirstGpu,
    joinTelegram,
    joinDiscord,
  } = selectHistoryItems(historyItems);
  const redirectLogin = useRedirectLogin();

  const isLoading =
    airdropHistoryLoading || isLoggedInLoading || requestAirdropLoading;

  const onClaim = useCallback(
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
            description: "Criteria unmet",
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

  const getDoneBtnStyle = (done: boolean) =>
    cn("w-full", done && "bg-green-600 text-white hover:bg-green-800");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>First-time sign up or sign in</CardDescription>
          </CardHeader>
          <CardContent>1 ~ 10 $CAI randomly</CardContent>

          <CardFooter>
            <Button
              onClick={() => onClaim(AirdropType.LOGIN)}
              className={getDoneBtnStyle(login)}
              variant="secondary"
              disabled={isLoading || login}
              isLoading={isLoading}
            >
              {login ? "Claimed" : "Claim"}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Refer</CardTitle>
            <CardDescription>
              Invite a friend to join Cuckoo Network Airdrop Portal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Earn <em>30%</em> of your referees' rewards by sharing
              https://cuckoo.network/portal/login/?refererId=
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="secondary">
              Copy your referral link
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add Email</CardTitle>
            <CardDescription>Receive latest news and benefits</CardDescription>
          </CardHeader>
          <CardContent>
            <p>10 $CAI</p>
          </CardContent>
          <CardFooter>
            <EmailVerifyOtpDialog done={addEmail} isLoading={isLoading} />
          </CardFooter>
        </Card>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Join Telegram</CardTitle>
            <CardDescription>
              Join and link your Telegram account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>5 $CAI</p>
          </CardContent>
          <CardFooter>
            <Button
              disabled={joinTelegram}
              isLoading={isLoading}
              className={getDoneBtnStyle(joinTelegram)}
              variant="secondary"
              onClick={async () => {
                window.open("https://cuckoo.network/tg");
                await onClaim(AirdropType.JOIN_TELEGRAM);
              }}
            >
              {joinTelegram ? "Claimed" : "Claim"}
            </Button>{" "}
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Daily Check-in</CardTitle>
            <CardDescription>Get your $CAI Daily</CardDescription>
          </CardHeader>
          <CardContent>
            <p>0 ~ 5 $CAI Randomly </p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => onClaim(AirdropType.DAILY_CLAIM)}
              className={getDoneBtnStyle(dailyClaim)}
              variant="secondary"
              isLoading={isLoading}
              disabled={dailyClaim}
            >
              {dailyClaim ? "Claimed" : "Claim"}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Create 1st Image </CardTitle>
            <CardDescription>
              Showcase your creativity with your first image
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              10 $CAI. If you haven't create your first gen AI art, go to create
              image first and then claim your reward.
            </p>
          </CardContent>
          <CardFooter className={"gap-2"}>
            {!create1stImage && (
              <Button
                className="w-full"
                variant="secondary"
                href="/portal/art/text-to-image"
              >
                Create Image
              </Button>
            )}
            <Button
              className={getDoneBtnStyle(create1stImage)}
              variant="secondary"
              onClick={() => onClaim(AirdropType.CREATE_1ST_IMAGE)}
              disabled={isLoading || create1stImage}
              isLoading={isLoading}
            >
              {create1stImage ? "Claimed" : "Claim"}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Stake $CAI </CardTitle>
            <CardDescription>
              Strengthen the network by staking $CAI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>20 $CAI</p>
          </CardContent>
          <CardFooter className={"gap-2"}>
            {!stakeCai && (
              <Button
                className="w-full"
                variant="secondary"
                href="/portal/staking"
              >
                Stake $CAI
              </Button>
            )}
            <Button
              onClick={() => onClaim(AirdropType.STAKE_CAI)}
              className={getDoneBtnStyle(stakeCai)}
              variant="secondary"
              isLoading={isLoading}
              disabled={stakeCai}
            >
              {stakeCai ? "Claimed" : "Claim"}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Follow X</CardTitle>
            <CardDescription>Follow us on X to stay connected</CardDescription>
          </CardHeader>
          <CardContent>
            <p>5 $CAI</p>
          </CardContent>
          <CardFooter>
            <Button
              disabled={followX}
              onClick={async () => {
                window.open("https://cuckoo.network/x");
                await onClaim(AirdropType.FOLLOW_X);
              }}
              className={getDoneBtnStyle(followX)}
              variant="secondary"
              isLoading={isLoading}
            >
              {followX ? "Claimed" : "Claim"}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Join Discord</CardTitle>
            <CardDescription>
              Join and link your Discord account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>5 $CAI</p>
          </CardContent>
          <CardFooter>
            <Button
              disabled={joinDiscord}
              isLoading={isLoading}
              onClick={async () => {
                window.open("https://cuckoo.network/dc");
                await onClaim(AirdropType.JOIN_DISCORD);
              }}
              className={getDoneBtnStyle(joinDiscord)}
              variant="secondary"
            >
              {joinDiscord ? "Claimed" : "Claim"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
