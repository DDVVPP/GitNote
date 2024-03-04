import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import plusCircleIcon from '@/public/plusCircleIcon.svg'

// Hardcoded placeholder for actual socials
const socialLinks = ['@nikkyeva', '@nikkyeva', '@nikkyyy', '@nikkydeveloper']

const SidebarSocialMedia = () => {

  return (
    <div>
      <Link href='/profile/edit-profile/update-socials'>
        <button className="paragraph-3-medium bg-black-600 mb-4 flex w-full flex-row items-center justify-center rounded py-3 font-bold text-white">
          <Image
          src={plusCircleIcon}
          alt="Plus Icon"
          className='mr-2'
          />
            Update social link
        </button>
      </Link>

        <h3 className='paragraph-2-bold border-white-500 border-b pb-4'>Social Media Links</h3>

        {socialLinks.map((tag) => {
            return (
              <div key={tag} className='mt-4'>
                <p className='text-white-300 paragraph-2-regular inline-block'>
                  {tag}
                </p>
              </div>
            )
          })}
    </div>
  )
}

export default SidebarSocialMedia;
