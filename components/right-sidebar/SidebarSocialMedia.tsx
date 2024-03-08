import React from 'react';
import Link from 'next/link';
import SocialMediaLinks from './SocialMediaLinks';
import PlusIcon from '../shared/icons/PlusIcon';

const SidebarSocialMedia = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/profile/edit-profile/update-socials">
        <button className="paragraph-3-medium bg-black-600 text-white-100 flex w-full items-center justify-center gap-2 rounded py-2 font-bold">
          <PlusIcon className="fill-primary-500" />
          Add a new link
        </button>
      </Link>

      <h3 className="paragraph-2-bold border-white-500 border-b pb-4">
        Social Media Links
      </h3>
      <SocialMediaLinks />
    </div>
  );
};

export default SidebarSocialMedia;
