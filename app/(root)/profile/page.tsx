import React, { Suspense } from "react";

import { User } from "@prisma/client";
import { getUser } from "@/lib/actions/user.actions";
import { Profile } from "@/components/profile";
import UserNotFound from "@/components/shared/UserNotFound";

const ProfileWrapper = async () => {
  const user = (await getUser()) as User;
  if (!user) return <UserNotFound />;
  console.log("USER in server component", user);

  return (
    <Suspense>
      <Profile user={user && user} />
    </Suspense>
  );
};

export default ProfileWrapper;
