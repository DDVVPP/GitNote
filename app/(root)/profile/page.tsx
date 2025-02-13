import React from "react";

import { User } from "@prisma/client";
import { getUser } from "@/lib/actions/user.actions";
import { Profile } from "@/components/profile";
import UserNotFound from "@/components/shared/UserNotFound";
import { getPostDates } from "@/lib/actions/post.actions";
import { PostDate } from "@/types";

const ProfileWrapper = async () => {
  const user = (await getUser()) as User;
  const { reducedDates } = await getPostDates();

  return user ? (
    <Profile user={user} postDates={reducedDates as PostDate[]} />
  ) : (
    <UserNotFound />
  );
};

export default ProfileWrapper;
