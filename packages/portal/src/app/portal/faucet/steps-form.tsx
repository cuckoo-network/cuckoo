"use client"

import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";

const DefaultButton = Button;

const SpecialButton = Button;

const stepConfig = [
  { label: 'Follow us on X', url: 'https://cuckoo.network/x', ButtonComponent: DefaultButton },
  { label: 'Join Discord', url: 'https://cuckoo.network/dc', ButtonComponent: DefaultButton },
  { label: 'Join Telegram', url: 'https://cuckoo.network/tg', ButtonComponent: DefaultButton },
  { label: 'Claim 1000 CUC', url: null, ButtonComponent: SpecialButton } // Use SpecialButton for this step
];

const StepComponent: React.FC = () => {
  const [step, setStep] = useState<number>(() => {
      const savedStep = (typeof window !== "undefined" && localStorage.getItem('currentStep')) ?? 0;
    return savedStep ? parseInt(savedStep, 10) : 1;
  });

  useEffect(() => {
    // Save the current step to localStorage whenever it changes
    localStorage.setItem('currentStep', step.toString());
  }, [step]);

  const nextStep = () => {
    if (step < stepConfig.length) {
      setStep(step + 1);
    }
  };

  const handleAction = () => {
    const currentStep = stepConfig[step - 1];
    if (currentStep.url) {
      window.open(currentStep.url, '_blank');
    }
    nextStep();
  };

  const renderButton = () => {
    const { ButtonComponent, label } = stepConfig[step - 1];
    return <ButtonComponent onClick={handleAction}>{label}</ButtonComponent>;
  };

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-2">Step {step} of {stepConfig.length}</p>
      {step <= stepConfig.length ? renderButton() : <h2>Process Completed</h2>}
    </div>
  );
};

export default StepComponent;
