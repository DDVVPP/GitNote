"use client";
import React, { useState } from "react";
import Link from "next/link";

import { Post } from "@prisma/client";
import { CreateTypeListItemType } from "@/types";
import Badge from "@/components/shared/ui/Badge";
import PostOverview from "@/components/post/PostOverview";
import { createTypeList } from "@/lib/constants/createTypeList";

const Posts = ({ allPosts }: { allPosts: Post[] }) => {
  const [posts, setPosts] = useState(allPosts);

  // const handleClick = (createType?: CreateTypeListItemType) => {
  //   if (createType) {
  //     const filteredPosts: Post[] = allPosts.filter(
  //       (post) => post.createType === createType.name
  //     );
  //     setPosts(filteredPosts);
  //   } else {
  //     setPosts(allPosts);
  //   }
  // };

  return (
    <section className="mb-6 mt-8 space-y-6">
      <section className="flex justify-between">
        <h1 className="display-2-bold text-white-100">Recent Posts</h1>
        <div className="flex flex-wrap gap-x-2">
          {createTypeList.map((createType) => {
            return (
              <button type="button">
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
          <button type="button">
            <Badge size="medium" hover>
              All Posts
            </Badge>
          </button>
        </div>
      </section>

      <div className="space-y-4">
        {allPosts.map((post) => (
          <section className="bg-black-800 rounded-md">
            <Link key={post.id} href={`/posts/${post.id}`}>
              <PostOverview post={post} />
            </Link>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Posts;
