import { User } from "@prisma/client";
import Onboarding from "@/components/onboarding/Onboarding";
import { getUser } from "@/lib/actions/user.actions";
import { Suspense } from 'react'

const OnboardingWrapper = async () => {
  const user = (await getUser()) as User;
  if (!user) return null;

  return <Suspense><Onboarding user={user} /></Suspense>;
};

export default OnboardingWrapper;
