import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/containers/authentication/user-auth-form";
import { Bird } from "lucide-react";
import { Logout } from "@/containers/authentication/logout";
import { DashLayout } from "@/components/ui/dash-layout";

export const metadata: Metadata = {
  title: "Logout",
  description: "Log out of Cuckoo",
};

export default function AuthenticationPage() {
  return (
    <DashLayout>
      <Logout></Logout>
    </DashLayout>
  );
}
