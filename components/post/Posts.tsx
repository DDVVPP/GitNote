"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

import { CreateType, Post } from "@prisma/client";
import Badge from "@/components/shared/ui/Badge";
import PostOverview from "@/components/post/PostOverview";
import { createTypeList } from "@/lib/constants/createTypeList";
import urlManager from "@/lib/utils/urlManager";

const Posts = ({ posts }: { posts: Post[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (postType: CreateType | "all") => {
    if (postType === "all") {
      const newParams = urlManager(searchParams.toString(), {
        page: "1",
        type: "all",
      });
      router.push(`/?${newParams}`);
    } else {
      const newParams = urlManager(searchParams.toString(), {
        page: "1",
        type: postType,
      });
      router.push(`/?${newParams}`);
    }
  };

  return (
    <section className="mb-6 mt-8 space-y-6">
      <section className="flex justify-between">
        <h1 className="display-2-bold text-white-100">Recent Posts</h1>
        <div className="flex flex-wrap gap-x-2">
          {createTypeList.map((createType) => {
            return (
              <button
                type="button"
                key={createType.name}
                onClick={() => handleClick(createType.name)}
              >
                <Badge
                  color={createType.badgeColor}
                  icon={createType.name}
                  size="medium"
                  hover
                >
                  {createType.uiName}
                </Badge>
              </button>
            );
          })}
          <button type="button" onClick={() => handleClick("all")}>
            <Badge size="medium" hover>
              All Posts
            </Badge>
          </button>
        </div>
      </section>

      <div className="space-y-4">
        {posts &&
          posts.map((post) => (
            <section key={post.id} className="bg-black-800 rounded-md">
              <Link href={`/posts/${post.id}`}>
                <PostOverview post={post} />
              </Link>
            </section>
          ))}
      </div>
    </section>
  );
};

export default Posts;
