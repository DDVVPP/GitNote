/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";


const SidebarOnThisPage = () => {
  // Hardcoded placeholder for actual posts
  const posts = ['Authentication', 'Session-based Authentication', 'Token-based Authentication', 'Resources & Links']

  return (
    <div className='flex flex-col gap-4'>
      <h3 className='text-white-100 paragraph-2-bold'>On this page</h3>
        {posts.map((post) => {
          return (
            <div key={post}>
              <p className='text-white-300 paragraph-2-regular truncate'>
                {post}
              </p>
            </div>
          )
        })}
    </div>
  )
};

export default SidebarOnThisPage
