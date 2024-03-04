import React from 'react';
import Link from 'next/link';

const Posts = () => {
  return (
    <>
      {/* <h1>Recent Posts</h1> */}
      {/* Map through all posts */}
      <Link className='paragraph-3-medium text-white-300' href="/posts/1">
        Post1
      </Link>
      <Link className='paragraph-3-medium text-white-300' href="/posts/2">
        Post2
      </Link>
      <Link className='paragraph-3-medium text-white-300' href="/posts/3">
        Post3
      </Link>
    </>
  )
}

export default Posts
