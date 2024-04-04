import React from "react";
import Link from "next/link";
import { getPostById } from "@/lib/actions/post.actions";
import PostDetails from "@/components/post/PostDetails";

const Post = async ({ params }) => {
  const post = await getPostById(params.postId);

  return (
    <>
      {post && <PostDetails post={post} />}

      {/* <Link href={`/posts/${params.postId}/update-post`}>Update post</Link> */}
    </>
  );
};

export default Post;
