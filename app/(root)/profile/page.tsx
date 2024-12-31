import React, { Suspense } from "react";
import { headers } from "next/headers";

import { User } from "@prisma/client";
import { getUser } from "@/lib/actions/user.actions";
import { Profile } from "@/components/profile";
import UserNotFound from "@/components/shared/UserNotFound";

const ProfileWrapper = async () => {
  const reqHeaders = headers();
  const user = (await getUser(reqHeaders)) as User;
  if (!user) return <UserNotFound />;
  console.log("USER in server component", user.id);

  return <Profile user={user} />;
};

export default ProfileWrapper;
