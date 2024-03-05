/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";


const SidebarTags = () => {
  // Hardcoded placeholder for actual tags
  const tagList = ['Authentication', 'Next.js', 'Next.js setup', 'ESLint/Prettier']

  return(
    <div className='flex flex-col justify-start gap-4'>
      <h3 className='text-white-100 paragraph-3-bold'>Tags</h3>
        {tagList.map((tag) => {
          return (
            <div key={tag}>
              <p className='bg-black-700 text-white-300 paragraph-3-medium inline-block px-2'>
                {tag}
              </p>
            </div>
          )
        })}
    </div>
  )
};

export default SidebarTags
