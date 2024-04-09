"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

import { CreateType, Post } from "@prisma/client";
import Badge from "@/components/shared/ui/Badge";
import PostOverview from "@/components/post/PostOverview";
import { createTypeList } from "@/lib/constants/createTypeList";
import urlManager from "@/lib/utils/urlManager";

const Posts = ({
  posts,
  isTwoCols = false,
}: {
  posts: Post[];
  isTwoCols?: boolean;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  let containerStyle = `flex flex-col gap-y-4`;
  let postStyle = `bg-black-800 rounded-md`;
  if (isTwoCols) {
    console.log("in isTwoCols");
    containerStyle = "flex flex-wrap gap-x-2 gap-y-4";
    postStyle += " basis-[49%]";
  }

  const handleClick = (postType: CreateType | "all") => {
    if (postType === "all") {
      const newParams = urlManager(searchParams.toString(), {
        page: "1",
        type: "all",
      });
      router.push(`?${newParams}`);
    } else {
      const newParams = urlManager(searchParams.toString(), {
        page: "1",
        type: postType,
      });
      router.push(`?${newParams}`);
    }
  };

  return (
    <section className="space-y-10">
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

      <div className={containerStyle}>
        {posts &&
          posts.map((post) => (
            <section key={post.id} className={postStyle}>
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
