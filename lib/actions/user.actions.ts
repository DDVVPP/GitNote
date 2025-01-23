"use server";

import { prisma } from "@/db";
import { User, Goals, Social } from "@prisma/client";
import bcryptjs from "bcryptjs";
// eslint-disable-next-line camelcase
import { revalidateTag, unstable_cache } from "next/cache";
import { getUserSession } from ".";

export async function createUser(data: Partial<User>) {
  try {
    if (data) {
      const { password } = data;
      const hashedPassword = bcryptjs.hashSync(password as string, 10);

      const user = await prisma.user.create({
        data: {
          ...data,
          password: hashedPassword,
        },
      });
      return { user, error: null };
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return { error: "An unexpected error occurred while creating user." };
  }
  return { error: "An unexpected error occurred while creating user." };
}

async function getUserFromDb(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        goals: true,
        socialMedia: true,
      },
    });
    return user;
  } catch (error) {
    console.error("Error finding user:", error);
    return { error: "User not found!" };
  }
}

export async function getUser() {
  try {
    const email = await getUserSession();
    const getCachedUser = unstable_cache(
      () => getUserFromDb(email),
      [`getUser-${email}`],
      {
        tags: ["userData"],
      }
    );
    const cachedUser = await getCachedUser();
    return cachedUser;
  } catch (error) {
    console.error("Error in getUser:", error);
    return null;
  }
}

const updateGoals = async (goals: Goals[]) => {
  try {
    const goalIds = goals.reduce((ids: number[], goal: Goals) => {
      if (goal.id) {
        ids.push(goal.id);
      }
      return ids;
    }, []);
    // Delete goals not included in the payload
    await prisma.goals.deleteMany({
      where: {
        NOT: {
          id: {
            in: goalIds,
          },
        },
      },
    });

    const upsertGoals = {
      upsert: goals.map((goal: Goals) => ({
        where: {
          id: goal.id || -1,
        },
        update: {
          name: goal.name,
          isComplete: goal.isComplete,
        },
        create: {
          name: goal.name,
          isComplete: goal.isComplete,
        },
      })),
    };

    return upsertGoals;
  } catch (error) {
    console.error("Error updating goals:", error);
    return { error: "An unexpected error occurred while updating goals." };
  }
};

const updateSocialMedia = async (socialMedia: any[]) => {
  try {
    const filteredData =
      socialMedia &&
      socialMedia.filter((social: { username: string; type: string }) => {
        return social.username.length > 0 && social.type.length > 0;
      });

    const emptyUsernames = socialMedia.filter((social: Social) => {
      return social.username === "";
    });
    // Delete all socials with empty usernames
    await prisma.social.deleteMany({
      where: {
        id: {
          in: emptyUsernames.map((socialMedia: Social) => socialMedia.id),
        },
      },
    });

    const upsertSocialMedia = {
      upsert: filteredData.map((socialMedia: Social) => ({
        where: {
          id: socialMedia.id || -1,
        },
        update: {
          username: socialMedia.username,
          type: socialMedia.type,
          link: socialMedia.link,
        },
        create: {
          username: socialMedia.username,
          type: socialMedia.type,
          link: socialMedia.link,
        },
      })),
    };

    return upsertSocialMedia;
  } catch (error) {
    console.error("Error updating social media:", error);
    return {
      error: "An unexpected error occurred while updating social media.",
    };
  }
};

export async function updateUser(
  data: Partial<User & { goals?: any } & { socialMedia?: any }>
) {
  try {
    const email = await getUserSession();

    if (data) {
      const upsertedGoals = data.goals && (await updateGoals(data.goals));
      const upsertedSocialMedia =
        data.socialMedia && (await updateSocialMedia(data.socialMedia));

      const { goals, socialMedia, ...rest } = data;

      const user = await prisma.user.update({
        where: {
          email,
        },
        data: {
          ...rest,
          ...(upsertedGoals && { goals: upsertedGoals }),
          ...(upsertedSocialMedia && { socialMedia: upsertedSocialMedia }),
        },
        include: {
          goals: true,
          socialMedia: true,
        },
      });

      revalidateTag("userData");
      return { user, error: null };
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return { error: "An unexpected error occurred while updating user." };
  }
  return { error: "An unexpected error occurred while updating user." };
}

export async function deleteUser(id: string) {
  try {
    const user = prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("An unexpected error occurred while deleting user.");
  }
}
