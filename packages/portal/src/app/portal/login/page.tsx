import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/containers/authentication/user-auth-form";
import { Bird } from "lucide-react";

export const metadata: Metadata = {
  title: "Login to Cuckoo",
  description:
    "Join our AI art platform to create stunning art with our image generator and share it with other anime fans!",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900">
            <img
              src="https://cuckoo-network.b-cdn.net/login-poster.webp"
              className="w-full h-full object-cover"
            />
          </div>
          {/*<div className="relative z-20 flex items-center text-lg font-medium">*/}
          {/*  <div className="mr-1">*/}
          {/*    <Bird/>*/}
          {/*  </div>*/}
          {/*  Cuckoo*/}
          {/*</div>*/}
          {/*<div className="relative z-20 mt-auto">*/}
          {/*  <blockquote className="space-y-2">*/}
          {/*    <p className="text-lg">*/}
          {/*      &ldquo;This library has saved me countless hours of work and*/}
          {/*      helped me deliver stunning designs to my clients faster than*/}
          {/*      ever before.&rdquo;*/}
          {/*    </p>*/}
          {/*    <footer className="text-sm">Sofia Davis</footer>*/}
          {/*  </blockquote>*/}
          {/*</div>*/}
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome to Cuckoo
              </h1>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="https://cuckoo.network/terms-of-service"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="https://cuckoo.network/privacy-policy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
