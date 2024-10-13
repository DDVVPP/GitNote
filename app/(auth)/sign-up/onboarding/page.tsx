import React, {  Suspense } from "react";
import { User } from "@prisma/client";
import Onboarding from "@/components/onboarding/Onboarding";
import { getUser } from "@/lib/actions/user.actions";

const OnboardingWrapper = async () => {
  const user = (await getUser()) as User;

  return <Suspense><Onboarding user={user} /></Suspense>;
};

export default OnboardingWrapper;
