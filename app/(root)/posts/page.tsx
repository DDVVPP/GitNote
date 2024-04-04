"use client";
import React from "react";
import Link from "next/link";

import { Post } from "@prisma/client";
import PostOverview from "@/components/post/PostOverview";
import { createTypeList } from "@/lib/constants/createTypeList";
import Badge from "@/components/shared/ui/Badge";

const Posts = ({ allPosts }: { allPosts: Post[] }) => {
  return (
    <section className="mb-6 mt-8 space-y-6">
      <section className="flex justify-between">
        <h1 className="display-2-bold text-white-100">Recent Posts</h1>
        <div className="flex gap-x-2">
          {createTypeList.map((createType) => {
            return (
              <Badge
                color={createType.badgeColor}
                icon={createType.name}
                size="medium"
              >
                {createType.uiName}
              </Badge>
            );
          })}
        </div>
      </section>

      <div className="space-y-4 rounded-md">
        {allPosts.map((post) => (
          <PostOverview post={post} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-x-6">
        <button className="bg-black-700 paragraph-4-medium text-white-100 p-3">
          Prev
        </button>
        <p className="paragraph-3-medium text-white-300">1/19</p>
        <button className="bg-black-700 paragraph-4-medium text-white-100 p-3 ">
          Next
        </button>
      </div>
    </section>
  );
};

export default Posts;
