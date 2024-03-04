/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";

// Hardcoded placeholder for actual tags
const tagList = ['Authentication', 'Next.js', 'Next.js setup', 'ESLint/Prettier']

const SidebarTags = () => {
  return(
    <div className='flex flex-col justify-start'>
      <h3 className='text-white-100 paragraph-3-bold'>Tags</h3>
        {tagList.map((tag) => {
          return (
            <div key={tag} className='pt-4'>
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
