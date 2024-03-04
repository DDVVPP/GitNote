import React from 'react'
import Link from 'next/link'

const Post = ({params}) => {
  return (
    <>
    <h1>Post Name {params.postId}</h1>
        <Link href={`/posts/${params.postId}/update-post`}>
      Update post
    </Link>
    </>
  )
}

export default Post
