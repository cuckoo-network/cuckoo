"use client";
import { useAirdropHistory } from "@/app/portal/airdrop/hooks/use-airdrop-history";
import { useIsLoggedIn } from "@/containers/authentication/hooks/use-is-logged-in";
import { useRedirectLogin } from "@/containers/authentication/hooks/use-redirect-login";
import { useRequestAirdrop } from "@/app/portal/airdrop/hooks/use-request-airdrop";
import { useToast } from "@/components/ui/use-toast";
import { EmailVerifyOtpDialog } from "@/app/portal/airdrop/email-verify-otp-dialog";
import { DailyCheckInDialog } from "@/app/portal/airdrop/daily-check-in-dialog";
import {
  AirdropType,
  selectHistoryItems,
} from "@/app/portal/airdrop/selectors/select-history-items";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useOnClaim } from "@/app/portal/airdrop/hooks/use-on-claim";
import {
  AddressType,
  useOnClaimLinkingWallet,
} from "@/app/portal/airdrop/hooks/use-on-claim-linking-wallet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUser } from "@/containers/authentication/hooks/use-user";
import { useReferQueryParams } from "@/containers/authentication/hooks/use-referer-query-param";
import { Twitter } from "lucide-react";
import * as React from "react";

export const AirdropWaterfall = () => {
  const { loadingUser, dataUser } = useUser();
  const { toast } = useToast();
  const { requestAirdrop, requestAirdropLoading } = useRequestAirdrop();
  const { isLoggedIn, isLoggedInLoading } = useIsLoggedIn();
  const { airdropHistoryData, airdropHistoryLoading } = useAirdropHistory();
  const historyItems = airdropHistoryData?.airdropHistory;
  useReferQueryParams();
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
  const getDoneBtnStyle = (done: boolean) =>
    cn("w-full", done && "bg-green-600 text-white hover:bg-green-800");

  const onClaim = useOnClaim(isLoggedIn, redirectLogin, requestAirdrop, toast);

  const { linkAccountLoading, onClaimLinkingWallet } =
    useOnClaimLinkingWallet(onClaim);

  const isLoading =
    airdropHistoryLoading ||
    isLoggedInLoading ||
    requestAirdropLoading ||
    linkAccountLoading ||
    loadingUser;

  const referLink = `https://cuckoo.network/portal/airdrop?referer=${dataUser?.user.username || "CuckooNetworkHQ"}`;

  const copyToClipboard = async (text: string): Promise<void> => {
    await navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
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
            <p className="break-words">
              Earn <em>30%</em> of your referees&apos; rewards by sharing{" "}
              {referLink}
            </p>
          </CardContent>
          <CardFooter className={"gap-2"}>
            <Button
              className="w-full"
              variant="secondary"
              target={"_blank"}
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`🚀 Join the Cuckoo Network #Airdrop now to create decentralized AI art! Earn 500 $CAI when you sign up with ${referLink}—limited spots available. 🔥 Join thousands already earning and get more by sharing with friends!`)}`}
              data-size="large"
            >
              <Twitter className="mr-2 h-4 w-4" />
              Tweet now
            </Button>
            <Button
              className="w-full"
              variant="secondary"
              onClick={() => copyToClipboard(referLink)}
            >
              Copy referral link
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
            <DailyCheckInDialog done={dailyClaim} isLoading={isLoading} />
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
              10 $CAI. If you haven&apos;t create your first gen AI art, go to
              create image first and then claim your reward.
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
              onClick={() =>
                onClaimLinkingWallet(AddressType.STAKER_WALLET_ADDRESS)
              }
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
