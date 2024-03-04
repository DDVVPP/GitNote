import React from 'react';
import Link from 'next/link';

const Posts = () => {
  return (
    <>
      {/* <h1>Recent Posts</h1> */}
      {/* Map through all posts */}
      <Link href="/posts/1">
        Post1
      </Link>
      <Link href="/posts/2">
        Post2
      </Link>
      <Link href="/posts/3">
        Post3
      </Link>
    </>
  )
}

export default Posts
