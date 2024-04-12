import React from "react";

import { getPostById } from "@/lib/actions/post.actions";

import UpdatePost from "@/components/post/UpdatePost";
import { Post } from "@prisma/client";

const UpdatePostWrapper = async ({
  params,
}: {
  params: { postId: string };
}) => {
  const post = await getPostById(params.postId);

  return <UpdatePost post={post as Post} />;
};

export default UpdatePostWrapper;
