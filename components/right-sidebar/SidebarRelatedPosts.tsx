import React from 'react';
import Link from 'next/link';

import PlusIcon from '../shared/icons/PlusIcon';

const SidebarRelatedPosts = () => {
  // Hardcoded placeholder for actual realated posts
  const relatedPosts = ['Bottom Icons', 'Popup', 'Slider Sheet', 'Tab bar'];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="paragraph-2-bold border-white-500 border-b pb-4">
        Related Posts
      </h3>

      {relatedPosts.map((tag) => {
        return (
          <div key={tag} className="">
            <p className="text-white-300 paragraph-2-regular">{tag}</p>
          </div>
        );
      })}

      <Link href="/posts/create-post">
        <button className="paragraph-3-medium bg-black-600 text-white-100 flex w-full items-center justify-center gap-2 rounded py-2 font-bold">
          <PlusIcon className="fill-primary-500" />
          Add related post
        </button>
      </Link>
    </div>
  );
};

export default SidebarRelatedPosts;
