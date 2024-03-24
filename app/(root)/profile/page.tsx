import React from "react";
import Link from "next/link";

import { auth } from "@/auth";
import { User } from "@prisma/client";
import { getUser } from "@/lib/actions/user.actions";
import Profile from "@/components/profile/Profile";

const ProfileWrapper = async () => {
  const session = await auth();
  const userEmail = session && (await session.user?.email);
  const user = userEmail && (await getUser(userEmail));
  return (
    <>
      <Profile user={user as User} />
    </>
  );
};

export default ProfileWrapper;
