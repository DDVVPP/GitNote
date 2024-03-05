import React from 'react';
import Link from 'next/link';

import PlusIcon from '../Icons/PlusIcon';


const SidebarRelatedPosts = () => {
  // Hardcoded placeholder for actual realated posts
  const relatedPosts = ['Bottom Icons', 'Popup', 'Slider Sheet', 'Tab bar']

  return (
    <div className='flex flex-col gap-4'>
        <h3 className='paragraph-2-bold border-white-500 border-b pb-4'>Related Posts</h3>

        {relatedPosts.map((tag) => {
            return (
              <div key={tag} className=''>
                <p className='text-white-300 paragraph-2-regular'>
                  {tag}
                </p>
              </div>
            )
          })}

      <Link href='/posts/create-post'>
        <button className="paragraph-3-medium bg-black-600 flex w-full flex-row items-center justify-center rounded py-3 font-bold text-white">
          <PlusIcon className='fill-primary-500'/>
          <span className='ml-2'>Add related post</span>
        </button>
      </Link>
    </div>
  )
}

export default SidebarRelatedPosts;
