import React, { Suspense } from "react";

import { User } from "@prisma/client";
import Onboarding from "@/components/onboarding/Onboarding";
import { getUser } from "@/lib/actions/user.actions";
import UserNotFound from "@/components/shared/UserNotFound";

const OnboardingWrapper = async () => {
  const user = (await getUser()) as User;

  return user ? (
    <div className="mx-6">
      <Suspense>
        <Onboarding user={user} />
      </Suspense>
    </div>
  ) : (
    <UserNotFound />
  );
};

export default OnboardingWrapper;
