import React from "react";
import Link from "next/link";
import { getPostById } from "@/lib/actions/post.actions";

const Post = async ({ params }) => {
  const post = await getPostById(params.postId);
  console.log({ post });
  return (
    <>
      <h1>Post Name {params.postId}</h1>
      <Link href={`/posts/${params.postId}/update-post`}>Update post</Link>
    </>
  );
};

export default Post;
