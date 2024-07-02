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
import {useRouter} from "next/navigation";

const LoginInner = ({ isLoading }: { isLoading: boolean }) => {
  const {
    logOut,
    error,
    logIn,
    loginInProgress,
    idToken,
  }: IAuthContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (idToken && typeof localStorage !== "undefined") {
      logOut();
      localStorage.setItem("cuckoo:token", idToken);
      router.push("/portal/art");
    }
  }, [idToken, logOut, router]);

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

  const authConfig: TAuthConfig = useMemo(
    () => ({
      clientId: "SjhJM1A1RUlFNzg3N1g5cUp5YnE6MTpjaQ",
      authorizationEndpoint: "https://twitter.com/i/oauth2/authorize",
      tokenEndpoint: `${tokenEndpointUrlBase}/api-gateway/twitter/2/oauth2/token`,
      redirectUri: `${redirectUriUrlBase}/portal/login`,
      scope: "users.read tweet.read",
      state: "don't-care",
      decodeToken: false,
      autoLogin: false,
    }),
    [redirectUriUrlBase, tokenEndpointUrlBase],
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
