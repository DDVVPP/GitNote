import React from "react";

import { User } from "@prisma/client";
import { getUser } from "@/lib/actions/user.actions";
import { Profile } from "@/components/profile";
import UserNotFound from "@/components/shared/UserNotFound";

const ProfileWrapper = async () => {
  const user = (await getUser()) as User;

  return user ? <Profile user={user} /> : <UserNotFound />;
};

export default ProfileWrapper;
