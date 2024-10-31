import React, { Suspense } from "react";
import { User } from "@prisma/client";
import Onboarding from "@/components/onboarding/Onboarding";
import { getUser } from "@/lib/actions/user.actions";

const OnboardingWrapper = async () => {
  const user = (await getUser()) as User;

  return (
    <div className="bg-black-800 flex w-full flex-col justify-center border md:w-[600px]">
      <Suspense>
        <Onboarding user={user} />
      </Suspense>
    </div>
  );
};

export default OnboardingWrapper;
