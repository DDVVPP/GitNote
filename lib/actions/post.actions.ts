"use server";

import { prisma } from "@/db";

import { CreateType, Resource } from "@prisma/client";
import { IPostSchema } from "../validations/PostSchema";
import { getUserSession } from ".";

export async function createPost(data: IPostSchema) {
  try {
    const email = await getUserSession();
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

export async function getAllPosts({
  page,
  searchTerm,
}: {
  page: string;
  searchTerm?: string;
}) {
  const postsToTake = 4;
  let hasNextPage = false;
  try {
    const userEmail = await getUserSession();
    const somePosts = await prisma.post.findMany({
      where: {
        userEmail,
        ...(searchTerm &&
          searchTerm !== "all" && { createType: searchTerm as CreateType }),
      },
      orderBy: [{ createdAt: "desc" }],
      skip: (Number(page) - 1) * postsToTake,
      take: postsToTake + 1,
    });

    if (somePosts.length > postsToTake) {
      somePosts.pop();
      hasNextPage = true;
    }

    const { _count: numberOfResults } = await prisma.post.aggregate({
      _count: true,
      where: {
        userEmail,
        ...(searchTerm &&
          searchTerm !== "all" && { createType: searchTerm as CreateType }),
      },
    });

    return {
      somePosts,
      hasNextPage,
      numberOfPages: Math.ceil(numberOfResults / 4) || 1,
    };
  } catch (error) {
    console.error("Error returning posts:", error);
    return { error: "An unexpected error occurred while returning posts." };
  }
}

export async function getPostById(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        resources: true,
      },
    });

    return post;
  } catch (error) {
    console.error("Error returning posts:", error);
    return { error: "An unexpected error occurred while returning posts." };
  }
}

export async function findPosts(searchTerm: string | CreateType) {
  try {
    const userEmail = await getUserSession();
    const posts = await prisma.post.findMany({
      where: {
        userEmail,
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            content: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            tags: {
              has: searchTerm,
            },
          },
        ],
      },
    });

    return posts;
  } catch (error) {
    console.error("Error returning posts:", error);
    return { error: "An unexpected error occurred while returning posts." };
  }
}

//findMany : distinct keyword for unique tags
