"use server";

import { auth } from "@/auth";
import { prisma } from "@/db";

import { Post, Resource } from "@prisma/client";
import { IPostSchema } from "../validations/PostSchema";

export async function createPost(data: IPostSchema) {
  const session = await auth();
  const email = session && (await session.user?.email);
  if (!email) return { error: "User not found!" };

  try {
    if (data) {
      const post = await prisma.post.create({
        data: {
          ...data,
          user: {
            connect: {
              email,
            },
          },
          resources: {
            create: data.resources?.map((resource: Partial<Resource>) => ({
              label: resource.label,
              link: resource.link,
            })),
          },
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
