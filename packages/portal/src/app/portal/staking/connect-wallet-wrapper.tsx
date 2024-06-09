import React from "react";
import { useConnectionStatus, ConnectWallet } from "@thirdweb-dev/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { web3BtnPrimaryStyle } from "@/components/ui/web3-button-style"; // Ensure this is correctly imported based on your project

export function ConnectWalletWrapper() {
  const connectionStatus = useConnectionStatus();

  if (connectionStatus === "unknown") return <p>Loading...</p>;
  if (connectionStatus === "connecting") return <p>Connecting...</p>;
  if (connectionStatus === "connected") return <></>;

  return (
    <>
      <h4 className={"text-lg"}>
        {"To proceed, please connect your wallet first."}
      </h4>
      <div className="grid auto-rows-max items-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:col-span-2 lg:gap-8">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardDescription>
              We detected that you have not connected your wallet to Cuckoo
              Portal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ConnectWallet style={web3BtnPrimaryStyle} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
