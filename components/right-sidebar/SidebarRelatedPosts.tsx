import React from 'react';
import Link from 'next/link';

import Button from '../shared/ui/Button';

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
        <Button icon="plus" color="gray">
          Add related post
        </Button>
      </Link>
    </div>
  );
};

export default SidebarRelatedPosts;
