import React from "react";

import { User } from "@prisma/client";
import { getUser } from "@/lib/actions/user.actions";
import Profile from "@/components/profile/Profile";

const ProfileWrapper = async () => {
  const user = (await getUser()) as User;

  return (
    <>
      <Profile user={user} />
    </>
  );
};

export default ProfileWrapper;
