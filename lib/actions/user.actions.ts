"use server";

import { auth } from "@/auth";
import { prisma } from "@/db";
import { User, Goals } from "@prisma/client";
import bcryptjs from "bcryptjs";

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

export async function getUser(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        goals: true,
      },
    });
    return user;
  } catch (error) {
    console.error("Error finding user:", error);
    return { error: "User not found!" };
  }
}

export async function updateUser(data: Partial<User & { goals?: any }>) {
  const session = await auth();
  const email = session && session.user?.email;
  if (!email) return;

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

  try {
    if (data) {
      const user = prisma.user.update({
        where: {
          email,
        },
        data,
        include: {
          goals: true,
        },
      });
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
    console.error("Error updating user:", error);
    throw new Error("An unexpected error occurred while updating user.");
  }
}
