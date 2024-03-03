import React from 'react'
import Link from 'next/link'

const Post = ({params}) => {
  return (
    <>
    <h1>Post Name {params.id}</h1>
        <Link href={`/posts/${params.id}/update-post`}>
      Update post
    </Link>
    </>
  )
}

export default Post
