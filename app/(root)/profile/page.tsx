import React from "react";
// import { headers } from "next/headers";

import { User } from "@prisma/client";
import { getUser } from "@/lib/actions/user.actions";
import { Profile } from "@/components/profile";
import UserNotFound from "@/components/shared/UserNotFound";

const ProfileWrapper = async () => {
  // const reqHeaders = headers();
  // const headersObject = Object.fromEntries(reqHeaders.entries());
  // console.log("Headers in ProfileWrapper as Object:", headersObject);

  const user = (await getUser()) as User;
  if (!user) console.log("user not found...");
  if (!user) return <UserNotFound />;
  console.log("USER in server component", user.id);

  return <Profile user={user} />;
};

export default ProfileWrapper;
