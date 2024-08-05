"use client";
import { Suspense, useEffect, useMemo } from "react";

import {
  AuthContext,
  AuthProvider,
  IAuthContext,
  TAuthConfig,
} from "react-oauth2-code-pkce";
import { useContext } from "react";
import { LoaderCircle, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useUpdateAccount } from "@/app/portal/airdrop/hooks/use-update-account";

const LoginInner = ({ isLoading }: { isLoading: boolean }) => {
  const { logOut, error, logIn, loginInProgress, idToken }: IAuthContext =
    useContext(AuthContext);
  const router = useRouter();

  const { updateAccount } = useUpdateAccount();

  useEffect(
    function postLogin() {
      (async () => {
        if (idToken && typeof localStorage !== "undefined") {
          logOut();
          localStorage.setItem("cuckoo:token", idToken);
          let postLoginPath = "/portal/art";
          const prevPosition = localStorage.getItem("cuckoo:prevLocation");
          localStorage.removeItem("cuckoo:prevLocation");
          if (prevPosition?.startsWith("/portal/")) {
            postLoginPath = prevPosition;
          }

          if (typeof localStorage !== undefined) {
            const referer = localStorage.getItem("referer");

            if (referer) {
              try {
                await updateAccount({
                  variables: {
                    data: {
                      type: "REFERER_USERNAME",
                      referrerUsername: referer,
                    },
                  },
                });
              } catch (err) {
                console.error("failed to update referer", err);
              }

              localStorage.removeItem("referer");
            }
          }

          router.push(postLoginPath);
        }
      })();
    },
    [idToken, logOut, router, updateAccount],
  );

  if (error) {
    return (
      <>
        <div style={{ color: "red" }}>
          An error occurred during authentication: {error}
        </div>
        <Button type="button" onClick={() => logOut()}>
          Try again
        </Button>
      </>
    );
  }

  const loading = isLoading || loginInProgress;

  return (
    <>
      <Button
        variant="outline"
        type="button"
        disabled={loading}
        onClick={() => logIn("s1z1")}
      >
        {loading ? (
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Twitter className="mr-2 h-4 w-4" />
        )}{" "}
        Continue with Twitter
      </Button>
    </>
  );
};

export const TwitterLogin = ({ isLoading }: { isLoading: boolean }) => {
  const tokenEndpointUrlBase =
    process && process.env.NODE_ENV !== "production"
      ? "http://localhost:4123"
      : "https://cuckoo.network";
  const redirectUriUrlBase =
    process && process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://cuckoo.network";
  const clientId =
    process && process.env.NODE_ENV !== "production"
      ? "ZWJxWDlPUDY3MkdMY0xlS3VtbWM6MTpjaQ"
      : "SjhJM1A1RUlFNzg3N1g5cUp5YnE6MTpjaQ";

  const authConfig: TAuthConfig = useMemo(
    () => ({
      clientId: clientId,
      authorizationEndpoint: "https://twitter.com/i/oauth2/authorize",
      tokenEndpoint: `${tokenEndpointUrlBase}/api-gateway/twitter/2/oauth2/token`,
      redirectUri: `${redirectUriUrlBase}/portal/login`,
      scope: "users.read tweet.read",
      state: "don't-care",
      decodeToken: false,
      autoLogin: false,
    }),
    [clientId, redirectUriUrlBase, tokenEndpointUrlBase],
  );

  if (typeof window === "undefined") {
    return <></>;
  }

  return (
    <Suspense>
      <AuthProvider authConfig={authConfig}>
        <LoginInner isLoading={isLoading} />
      </AuthProvider>
    </Suspense>
  );
};
