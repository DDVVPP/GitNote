import React from "react";
// import Link from "next/link";
import { getPostById } from "@/lib/actions/post.actions";
import PostDetails from "@/components/post/PostDetails";
import { Resource, Post } from "@prisma/client";

const PostDetailsWrapper = async ({
  params,
}: {
  params: { postId: string };
}) => {
  const post = await getPostById(params.postId);

  return (
    <>
      {post && (
        <PostDetails
          post={post as Post & { resources?: Partial<Resource[]> }}
        />
      )}

      {/* <Link href={`/posts/${params.postId}/update-post`}>Update post</Link> */}
    </>
  );
};

export default PostDetailsWrapper;
