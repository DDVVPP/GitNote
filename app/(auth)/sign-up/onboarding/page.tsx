'use client';

import BasicInformation from '@/components/onboarding/BasicInformation';
import LearningGoals from '@/components/onboarding/LearningGoals';
import KnowledgeLevel from '@/components/onboarding/KnowledgeLevel';
import Availability from '@/components/onboarding/Availability';

import React, { useEffect } from 'react';
import { useState } from 'react';

const Onboarding = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <BasicInformation setStep={setStep} />;
      case 2:
        return (
          <div className="space-y-4">
            <LearningGoals setStep={setStep} />;
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <KnowledgeLevel setStep={setStep} />;
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <Availability setStep={setStep} />;
          </div>
        );
    }
  };

  return <div className="flex flex-col justify-center">{renderStep()}</div>;
};

export default Onboarding;
