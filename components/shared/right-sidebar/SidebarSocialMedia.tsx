import React from 'react';
import Link from 'next/link';
import SocialMediaLinks from './SocialMediaLinks'
import PlusIcon from '../Icons/PlusIcon';

const SidebarSocialMedia = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Link href='/profile/edit-profile/update-socials'>
        <button className="paragraph-3-medium bg-black-600 flex w-full flex-row items-center justify-center rounded py-3 font-bold text-white">
          <PlusIcon className='fill-primary-500'/>
          <span className='ml-2'>Add a new link</span>
        </button>
      </Link>

        <h3 className='paragraph-2-bold border-white-500 border-b pb-4'>Social Media Links</h3>
        <SocialMediaLinks/>
    </div>
  )
}

export default SidebarSocialMedia;
