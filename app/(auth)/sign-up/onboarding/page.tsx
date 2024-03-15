// 'use client';

import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { getUser } from '@/lib/actions/user.actions';

import BasicInformation from '@/components/onboarding/BasicInformation';
import LearningGoals from '@/components/onboarding/LearningGoals';
import KnowledgeLevel from '@/components/onboarding/KnowledgeLevel';
import Availability from '@/components/onboarding/Availability';

import React, { useEffect } from 'react';
import { useState } from 'react';
import { User } from '@prisma/client';

const Onboarding = async ({
  searchParams,
}: {
  searchParams: { step: number };
}) => {
  const session = await auth();
  const userEmail = session && (await session.user?.email);
  const user = userEmail && ((await getUser(userEmail)) as User);
  const { onboardingStatus: step } = user;
  // const startingStep = searchParams.step ?? 0;
  // const [step, setStep] = useState(startingStep);

  // useEffect(() => {
  //   if (user) {
  //     setStep(user.onboardingStatus ?? startingStep);
  //   }
  // }, [step]);

  const renderStep = () => {
    switch (step ?? 1) {
      case 1:
        return (
          <div className="space-y-4">
            <BasicInformation />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <LearningGoals />;
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <KnowledgeLevel />;
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <Availability />;
          </div>
        );
      case 5:
        return redirect('/');
    }
  };

  return (
    <div className="flex flex-col justify-center">
      {renderStep()}
      {/* {startingStep} */}
    </div>
  );
};

export default Onboarding;
