import { auth } from "@/auth";

import Onboarding from "@/components/onboarding/Onboarding";
import { getUser } from "@/lib/actions/user.actions";
import { User } from "@prisma/client";

const OnboardingWrapper = async () => {
  const session = await auth();
  const userEmail = session && (await session.user?.email);
  const user = userEmail && (await getUser(userEmail));

  return <Onboarding user={user as User} />;
};

export default OnboardingWrapper;
