import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import plusCircleBlueIcon from '@/public/plusCircleBlueIcon.svg'
import SocialMediaLinks from './SocialMediaLinks'

const SidebarSocialMedia = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Link href='/profile/edit-profile/update-socials'>
        <button className="paragraph-3-medium bg-black-600 flex w-full flex-row items-center justify-center rounded py-3 font-bold text-white">
          <Image
          src={plusCircleBlueIcon}
          alt="Plus Icon"
          className='mr-2'
          />
            Add a new link
        </button>
      </Link>

        <h3 className='paragraph-2-bold border-white-500 border-b pb-4'>Social Media Links</h3>
        <SocialMediaLinks/>
    </div>
  )
}

export default SidebarSocialMedia;
