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
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRedirectLogin } from "@/containers/authentication/hooks/use-redirect-login";
import { useCallback } from "react";

enum AirdropType {
  LOGIN = "LOGIN",
  REFER = "REFER",
  ADD_EMAIL = "ADD_EMAIL",
  DAILY_CLAIM = "DAILY_CLAIM",
  FOLLOW_X = "FOLLOW_X",
  CREATE_1ST_IMAGE = "CREATE_1ST_IMAGE",
  STAKE_CAI = "STAKE_CAI",
  MINE_FIRST_GPU = "MINE_FIRST_GPU",
}

function selectHistoryItems(historyItems: any) {
  return {
    login: historyItems?.some((item: any) => item.type === AirdropType.LOGIN),
    refer: historyItems?.some((item: any) => item.type === AirdropType.REFER),
    addEmail: historyItems?.some(
      (item: any) => item.type === AirdropType.ADD_EMAIL,
    ),
    dailyClaim: historyItems?.some(
      (item: any) => item.type === AirdropType.DAILY_CLAIM,
    ),
    followX: historyItems?.some(
      (item: any) => item.type === AirdropType.FOLLOW_X,
    ),
    create1stImage: historyItems?.some(
      (item: any) => item.type === AirdropType.CREATE_1ST_IMAGE,
    ),
    stakeCai: historyItems?.some(
      (item: any) => item.type === AirdropType.STAKE_CAI,
    ),
    mineFirstGpu: historyItems?.some(
      (item: any) => item.type === AirdropType.MINE_FIRST_GPU,
    ),
  };
}

export const AirdropWaterfall = () => {
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
  } = selectHistoryItems(historyItems);
  const redirectLogin = useRedirectLogin();

  const isLoading = airdropHistoryLoading || isLoggedInLoading;

  const onClaimLogin = useCallback(() => {
    if (!isLoggedIn) {
      redirectLogin();
    }
  }, [isLoggedIn, redirectLogin]);

  const btnStyle = cn(
    "w-full",
    login && "bg-green-600 text-white hover:bg-green-800",
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>First-time sign up or sign in</CardDescription>
          </CardHeader>
          <CardContent>1 ~ 10 $CAI randomly</CardContent>

          <CardFooter>
            <Button
              onClick={onClaimLogin}
              className={btnStyle}
              variant="secondary"
              disabled={isLoading}
            >
              {isLoading && (
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              )}
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
            <Button className={btnStyle} variant="secondary">
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
            <Button className={btnStyle} variant="secondary">
              Verify to Claim
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Daily Check-in</CardTitle>
            <CardDescription>Get your $CAI Daily</CardDescription>
          </CardHeader>
          <CardContent>
            <p>0 ~ 5 $CAI Randomly </p>
          </CardContent>
          <CardFooter>
            <Button className={btnStyle} variant="secondary">
              Claim
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
                className={btnStyle}
                variant="secondary"
                href="/portal/art/text-to-image"
              >
                Create Image
              </Button>
            )}
            <Button className={btnStyle} variant="secondary">
              Claim
            </Button>
          </CardFooter>
        </Card>

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
          <CardFooter>
            <Button className={btnStyle} variant="secondary">
              Claim
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Follow X</CardTitle>
            <CardDescription>Follow us on X to stay connected</CardDescription>
          </CardHeader>
          <CardContent>
            <p>5 $CAI</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
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
            <p>Card Footer</p>
          </CardFooter>
        </Card>

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
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
