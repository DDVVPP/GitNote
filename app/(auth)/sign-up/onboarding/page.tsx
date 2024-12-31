import React, { Suspense } from "react";
// import { headers } from "next/headers";
import { User } from "@prisma/client";
import Onboarding from "@/components/onboarding/Onboarding";
import { getUser } from "@/lib/actions/user.actions";
import UserNotFound from "@/components/shared/UserNotFound";

const OnboardingWrapper = async () => {
  // const reqHeaders = headers();
  // const headersObject = Object.fromEntries(reqHeaders.entries());
  // console.log("Headers in ProfileWrapper as Object:", headersObject);

  const user = (await getUser()) as User;
  if (!user) return <UserNotFound />;

  return (
    <div className="mx-6">
      <Suspense>
        <Onboarding user={user} />
      </Suspense>
    </div>
  );
};

export default OnboardingWrapper;
