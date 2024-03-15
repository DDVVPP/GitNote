'use client';

import { redirect } from 'next/navigation';

import BasicInformation from '@/components/onboarding/BasicInformation';
import LearningGoals from '@/components/onboarding/LearningGoals';
import KnowledgeLevel from '@/components/onboarding/KnowledgeLevel';
import Availability from '@/components/onboarding/Availability';

import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '@/components/shared/ui/Button';
import OnboardingStepDots from '@/components/shared/ui/OnboardingStepsVisual';

const Onboarding = ({ searchParams }: { searchParams: { step: string } }) => {
  // const startingStep = searchParams.step ?? 0;
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <BasicInformation />
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <LearningGoals />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <KnowledgeLevel />
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <Availability />
          </div>
        );
      case 5:
        return redirect('/');
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <OnboardingStepDots />
      {renderStep()}
      <Button color="blue" onClick={() => setStep((prevStep) => prevStep + 1)}>
        Next
      </Button>
    </div>
  );
};

export default Onboarding;
