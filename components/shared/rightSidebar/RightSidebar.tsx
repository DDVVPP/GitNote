/* eslint-disable tailwindcss/no-custom-classname */
'use client';
import React from 'react';
import Image from 'next/image';
import photo01 from '@/public/photo01.svg';

// Hardcoded placeholder for actual tags
const tagList = ['Authentication', 'Next.js', 'Next.js setup', 'ESLint/Prettier']

const RightSidebar = () => {

  return (
    <div className='custom-scrollbar bg-black-800 flex-2 sticky right-0 top-0 z-20 flex h-screen flex-col overflow-y-auto p-6 pt-36 lg:left-0 lg:w-60'>
      <div className='flex flex-row space-x-2'>
        <Image
          src={photo01}
          alt="Profile photo"
        />
        <div className='flex flex-col'>
          <p className='paragraph-3-medium'>
            Nikky Eva
          </p>
          <p className='text-white-300 paragraph-4-regular'>
            nikky@jsmastery.pro
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-start py-3'>
        <h3 className='text-white-100 paragraph-3-bold py-3'>Tags</h3>
        {tagList.map((tag) => {
          return (
          <div key={tag} className='pt-4'>
            <p className='bg-black-700 text-white-300 paragraph-3-medium inline-block'>{tag}
            </p>
          </div>)
        })}

      </div>
    </div>
  )
}

export default RightSidebar;
