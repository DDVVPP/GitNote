import React from "react";
// import { headers } from "next/headers";

import { User } from "@prisma/client";
import { getUser } from "@/lib/actions/user.actions";
import { Profile } from "@/components/profile";
import UserNotFound from "@/components/shared/UserNotFound";

const ProfileWrapper = async () => {
  const user = (await getUser()) as User;
  if (!user) console.log("in Profile Wrapper', user not found...");
  if (!user) return <UserNotFound />;
  console.log("USER in server component", user.id);

  return <Profile user={user} />;
};

export default ProfileWrapper;
