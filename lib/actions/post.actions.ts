"use server";

import { prisma } from "@/db";

import { CreateType, Resource, Prisma, Post, User } from "@prisma/client";
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
  postsToTake = 4,
  term,
  tag,
}: {
  page: string;
  searchTerm?: string;
  postsToTake?: number;
  term?: string;
  tag?: string;
}) {
  let hasNextPage = false;
  try {
    const userEmail = await getUserSession();
    const options = {
      where: {
        userEmail,
        ...(searchTerm &&
          searchTerm !== "all" && { createType: searchTerm as CreateType }),
        ...(term && {
          OR: [
            {
              title: {
                contains: term,
                mode: "insensitive",
              },
            },
            {
              content: {
                contains: term,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: term,
                mode: "insensitive",
              },
            },
            {
              tags: {
                has: term,
              },
            },
          ],
        }),
        ...(tag && { tags: { has: tag } }),
      },
    };

    const somePosts = await prisma.post.findMany({
      ...(options as Prisma.PostFindManyArgs),
      orderBy: [{ createdAt: "desc" }],
      skip: (Number(page) - 1) * postsToTake,
      take: postsToTake + 1,
    });

    if (somePosts.length > postsToTake) {
      somePosts.pop();
      hasNextPage = true;
    }

    const { _count: numberOfResults } = (await prisma.post.aggregate({
      _count: true,
      ...(options as Prisma.PostAggregateArgs),
    })) as any;

    return {
      somePosts,
      hasNextPage,
      numberOfPages: Math.ceil(numberOfResults / postsToTake) || 1,
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

export async function updatePost(
  data: Partial<Post & { resources?: any }>,
  postId: number
) {
  if (data && data.resources) {
    data.resources = {
      upsert: data.resources.map((resource: Resource) => ({
        where: {
          id: resource.id || -1,
        },
        update: {
          label: resource.label,
          link: resource.link,
        },
        create: {
          label: resource.label,
          link: resource.link,
        },
      })),
    };
  }
  try {
    const email = await getUserSession();
    if (data) {
      const post = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          ...data,
          user: {
            connect: {
              email: email,
            } as User,
          },
        } as any, //TODO: fix this any type problem
      });

      return { post, error: null };
    }
  } catch (error) {
    console.error("Error updating post:", error);
    return { error: "An unexpected error occurred while updating post." };
  }
  return { error: "An unexpected error occurred while updating post." };
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

export async function getUniqueTags() {
  try {
    const userEmail = await getUserSession();
    const posts = await prisma.post.findMany({
      where: {
        userEmail,
      },
      select: {
        tags: true,
      },
      distinct: ["tags"],
    });

    const flattenedPosts = posts.flatMap((item) => item.tags);
    const deDupedTags = Array.from(new Set(flattenedPosts));

    return { deDupedTags, error: null };
  } catch (error) {
    console.error("Error returning tags:", error);
    return { error: "An unexpected error occurred while returning tags." };
  }
}

export async function deletePost(id: number) {
  try {
    const post = prisma.post.delete({
      where: {
        id,
      },
    });
    return post;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw new Error("An unexpected error occurred while deleting post.");
  }
}
