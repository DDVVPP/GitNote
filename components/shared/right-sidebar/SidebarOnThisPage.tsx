/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";

// Hardcoded placeholder for actual posts
const posts = ['Authentication', 'Session-based Authentication', 'Token-based Authentication', 'Resources & Links']

const SidebarOnThisPage = () => {
  return(
    <div>
      <h3 className='text-white-100 paragraph-2-bold mb-6'>On this page</h3>
        {posts.map((post) => {
          return (
            <div key={post} className="mt-4">
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
