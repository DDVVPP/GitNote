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

async function _getUser(headers: any) {
  console.log(
    "Headers in getUser:",
    headers ? [...headers.entries()] : "No headers provided"
  );

  try {
    const email = await getUserSession();

    console.log("Email retrieved:", email);

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

export const getUser = unstable_cache(
  (headers) => _getUser(headers),
  ["getUser"],
  {
    tags: ["userData"],
  }
);

export async function updateUser(
  data: Partial<User & { goals?: any } & { socialMedia?: any }>
) {
  if (data && data.goals) {
    data.goals = {
      upsert: data.goals.map((goal: Goals) => ({
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
  }

  if (data && data.socialMedia) {
    const filteredData =
      data.socialMedia &&
      data.socialMedia.filter((social: { username: string; type: string }) => {
        return social.username.length > 0 && social.type.length > 0;
      });

    const emptyUsernames = data.socialMedia.filter((social: Social) => {
      return social.username === "";
    });

    data.socialMedia = {
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
      deleteMany: emptyUsernames.map((socialMedia: Social) => ({
        id: socialMedia.id,
      })),
    };
  }

  try {
    const email = await getUserSession();
    if (data) {
      const user = await prisma.user.update({
        where: {
          email,
        },
        data,
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
