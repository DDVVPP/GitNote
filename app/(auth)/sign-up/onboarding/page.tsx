import { User } from "@prisma/client";
import Onboarding from "@/components/onboarding/Onboarding";
import { getUser } from "@/lib/actions/user.actions";

const OnboardingWrapper = async () => {
  const user = (await getUser()) as User;

  return <Onboarding user={user} />;
};

export default OnboardingWrapper;
