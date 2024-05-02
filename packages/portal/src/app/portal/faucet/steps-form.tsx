"use client"

import React, { useEffect, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input";

const REQUEST_TOKENS = gql`
  mutation RequestTokens($address: String!) {
    requestTokens(address: $address)
  }
`;

const stepConfig = [
  { label: 'Follow us on X', url: 'https://cuckoo.network/x' },
  { label: 'Join Discord', url: 'https://cuckoo.network/dc' },
  { label: 'Join Telegram', url: 'https://cuckoo.network/tg' },
  { label: 'Claim 1000 CUC', url: null } // This step triggers the faucet request
];

const StepComponent = () => {
  const [step, setStep] = useState(() => loadInitialStep());
  const [ethereumAddress, setEthereumAddress] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [requestTokens, { loading, error }] = useMutation(REQUEST_TOKENS, {
    onCompleted: () => {
      setSuccessMessage("Tokens successfully claimed!");
    }
  });

  useEffect(() => {
    if (step < stepConfig.length + 1) {
      localStorage.setItem('currentStep', step.toString());
    }
  }, [step]);

  function loadInitialStep() {
    const savedStep = typeof window !== "undefined" && localStorage.getItem('currentStep');
    return savedStep ? parseInt(savedStep, 10) : 1;
  }

  function advanceStep() {
    setStep(prev => prev + 1);
  }

  function handleAction() {
    const { url } = stepConfig[step - 1];
    if (url) {
      window.open(url, '_blank');
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
      await requestTokens({
        variables: { address: ethereumAddress }
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
    return <Button onClick={handleAction} disabled={loading}>{label}</Button>;
  }

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-2">Step {step} of {stepConfig.length}</p>
      {step === stepConfig.length && (
        <Input
          type="text"
          placeholder="Enter your Ethereum address"
          value={ethereumAddress}
          onChange={e => setEthereumAddress(e.target.value)}
          style={{ marginBottom: '10px', padding: '8px' }}
        />
      )}
      {renderButton()}
      {loading && <p>Claiming...</p>}
      {error && <p>Error: {error.message}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default StepComponent;
