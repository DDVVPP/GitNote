import React from 'react';
import Link from 'next/link';
import { Session } from 'next-auth';

const Posts = ({ session }: { session: Session }) => {
  return (
    <>
      {/* <h1>Recent Posts</h1> */}
      {/* Map through all posts */}
      <Link href="/posts/1">
        {session?.user?.name} {session?.user?.email} {session?.user?.image}
        {session?.user?.role}
      </Link>
      <Link href="/posts/2">Post2</Link>
      <Link href="/posts/3">Post3</Link>
    </>
  );
};

export default Posts;
