"use client";
import React, { useEffect, useState } from "react";
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
  const isSelectedTypeAll = "all" === searchParams.get("type");

  let containerStyle = `flex flex-col gap-y-4`;
  let postStyle = `bg-black-800 hover:bg-black-600 hover:duration-300 rounded-md`;
  if (isTwoCols) {
    containerStyle = "flex flex-wrap gap-x-2 gap-y-4";
    postStyle += " basis-[49%]";
  }

  const handleClick = (postType: CreateType | "all" | "") => {
    if (postType === "all") {
      const newParams = urlManager(searchParams.toString(), {
        page: "1",
        type: "all",
        tag: "",
        term: "",
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
    <section className="mb-8 space-y-10">
      <section className="flex justify-between">
        <h1 className="display-2-bold text-white-100">Recent Posts</h1>
        <div className="flex flex-wrap gap-x-2">
          {createTypeList.map((createType) => {
            const isSelected = createType.name === searchParams.get("type");

            return (
              <button
                type="button"
                key={createType.name}
                onClick={() => handleClick(isSelected ? "" : createType.name)}
              >
                <Badge
                  color={isSelected ? "gray" : createType.badgeColor}
                  icon={createType.name}
                  size="medium"
                  hover={!isSelected}
                >
                  {createType.uiName}
                </Badge>
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => handleClick(isSelectedTypeAll ? "" : "all")}
          >
            <Badge
              size="medium"
              hover={!isSelectedTypeAll}
              color={isSelectedTypeAll ? "gray" : undefined}
            >
              All Posts
            </Badge>
          </button>
        </div>
      </section>

      <div className={containerStyle}>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <section key={post.id} className={postStyle}>
              <Link href={`/posts/${post.id}`}>
                <PostOverview post={post} />
              </Link>
            </section>
          ))
        ) : (
          <h3
            className={`paragraph-1-regular text-white-300 flex items-center justify-center p-12 ${postStyle}`}
          >
            No posts to display!
          </h3>
        )}
      </div>
    </section>
  );
};

export default Posts;
