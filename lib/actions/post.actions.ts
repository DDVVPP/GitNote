"use server";

import { auth } from "@/auth";
import { prisma } from "@/db";
import { Post, Resource } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";

export async function createPost(data: Partial<Post & { resources?: any }>) {
  const session = await auth();
  const email = session && (await session.user?.email);
  if (!email) return { error: "User not found!" };
  console.log("email>>>>>", email);

  try {
    if (data) {
      console.log("data>>>>>", data);
      const post = await prisma.post.create({
        data: {
          ...data,
          user: {
            connect: {
              email,
            },
          },
          resources: data.resources?.map((resource: Resource) => ({
            create: {
              label: resource.label,
              link: resource.link,
            },
          })),
        },
      });
      return { post, error: null };
    }
  } catch (error) {
    console.error("Error creating post:", error);
    return { error: "An unexpected error occurred while creating post." };
  }
  return { error: "An unexpected error occurred while creating post." };
}
