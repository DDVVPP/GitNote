import React, { Suspense } from "react";
import { User } from "@prisma/client";
import Onboarding from "@/components/onboarding/Onboarding";
import { getUser } from "@/lib/actions/user.actions";

const OnboardingWrapper = async () => {
  const user = (await getUser()) as User;

  return (
    <div className="mx-6">
      <Suspense>
        <Onboarding user={user} />
      </Suspense>
    </div>
  );
};

export default OnboardingWrapper;
