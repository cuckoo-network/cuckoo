"use client";

import React, { useEffect, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {mutateRequestTokens} from "@/app/portal/faucet/data/queries";
import {RequestTokensMutation} from "@/gql/graphql";

export const faucetUnits = "10";



const stepConfig = [
  { label: "Follow us on X", url: "https://cuckoo.network/x" },
  { label: "Join Discord", url: "https://cuckoo.network/dc" },
  { label: "Join Telegram", url: "https://cuckoo.network/tg" },
  { label: `Claim ${faucetUnits} CAI`, url: null }, // This step triggers the faucet request
];

const StepComponent = () => {
  const [step, setStep] = useState(() => loadInitialStep());
  const [ethereumAddress, setEthereumAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState({
    erc20TokenTransferHash: "",
    nativeTokenTransferHash: "",
  });
  const [requestTokens, { loading, error }] = useMutation<RequestTokensMutation>(mutateRequestTokens, {
    onCompleted: (resp) => {
      setSuccessMessage({
        erc20TokenTransferHash: resp.requestTokens.erc20TokenTransferHash,
        nativeTokenTransferHash: resp.requestTokens.nativeTokenTransferHash,
      });
    },
  });

  useEffect(() => {
    if (step < stepConfig.length + 1) {
      localStorage.setItem("currentStep", step.toString());
    }
  }, [step]);

  function loadInitialStep() {
    const savedStep =
      typeof window !== "undefined" && localStorage.getItem("currentStep");
    return savedStep ? parseInt(savedStep, 10) : 1;
  }

  function advanceStep() {
    setStep((prev) => prev + 1);
  }

  function handleAction() {
    const { url } = stepConfig[step - 1];
    if (url) {
      window.open(url, "_blank");
    }
    if (step === stepConfig.length) {
      if (ethereumAddress) {
        requestFaucet();
      } else {
        alert("Please enter a valid Ethereum address.");
      }
    } else {
      advanceStep();
    }
  }

  async function requestFaucet() {
    try {
      return await requestTokens({
        variables: { address: ethereumAddress },
      });
    } catch (error: any) {
      console.error(`Failed to claim tokens: ${error.message}`);
    }
  }

  function renderButton() {
    if (step > stepConfig.length) {
      return <h2>Process Completed</h2>;
    }
    const { label } = stepConfig[step - 1];
    return (
      <Button onClick={handleAction} disabled={loading}>
        {label}
      </Button>
    );
  }

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-2">
        Step {step} of {stepConfig.length}
      </p>
      {step === stepConfig.length && (
        <Input
          type="text"
          placeholder="Enter your Ethereum address"
          value={ethereumAddress}
          onChange={(e) => setEthereumAddress(e.target.value)}
          style={{ marginBottom: "10px", padding: "8px" }}
        />
      )}
      {renderButton()}
      {loading && <p>Claiming...</p>}
      {error && <p>Error: {error.message}</p>}
      {successMessage.erc20TokenTransferHash && (
        <p>Tokens successfully claimed!</p>
      )}
      {successMessage.nativeTokenTransferHash && (
        <p>
          CAI:{" "}
          <a
            target="_blank"
            href={`https://testnet-scan.cuckoo.network/tx/${successMessage.nativeTokenTransferHash}`}
          >
            https://testnet-scan.cuckoo.network/tx/
            {successMessage.nativeTokenTransferHash}
          </a>
        </p>
      )}
      {successMessage.erc20TokenTransferHash && (
        <p>
          WCAI:{" "}
          <a
            target="_blank"
            href={`https://testnet-scan.cuckoo.network/tx/${successMessage.erc20TokenTransferHash}`}
          >
            https://testnet-scan.cuckoo.network/tx/
            {successMessage.erc20TokenTransferHash}
          </a>
        </p>
      )}
    </div>
  );
};

export default StepComponent;
