'use client';

import { redirect } from 'next/navigation';

import BasicInformation from '@/components/onboarding/BasicInformation';
import LearningGoals from '@/components/onboarding/LearningGoals';
import KnowledgeLevel from '@/components/onboarding/KnowledgeLevel';
import Availability from '@/components/onboarding/Availability';

import React, { useEffect } from 'react';
import { useState } from 'react';

const Onboarding = ({ searchParams }: { searchParams: { step: string } }) => {
  // const startingStep = searchParams.step ?? 0;
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <BasicInformation setStep={setStep} />
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <LearningGoals setStep={setStep} />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <KnowledgeLevel setStep={setStep} />
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <Availability setStep={setStep} />
          </div>
        );
      case 5:
        return redirect('/');
    }
  };

  return <div className="flex flex-col justify-center">{renderStep()}</div>;
};

export default Onboarding;
