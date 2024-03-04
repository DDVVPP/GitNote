/* eslint-disable tailwindcss/no-custom-classname */
'use client';
import React from 'react';
import Image from 'next/image';
import gitNoteIcon from '@/public/gitNoteIcon.svg'
import plusCircleIcon from '@/public/plusCircleIcon.svg'
import jsmProLogo from '@/public/jsmProLogo.svg'
import githubOutline from '@/public/githubOutline.svg'
import logoutIcon from '@/public/logoutIcon.svg'
import Link from 'next/link';
import Search from '../Search';
import Posts from '@/app/(root)/posts/page';
import QuickLink from '../QuickLink';
import NavSection from './NavSection';

const SideNavbar = () => {

  return (
    <nav className='custom-scrollbar bg-black-800 flex-2 sticky left-0 top-0 z-20 flex h-screen flex-col overflow-y-auto p-6 pt-36 lg:left-0 lg:w-60'>
        <div className='border-white-500 flex flex-col justify-start space-y-12 border-b'>
          <div className='flex flex-row items-center space-x-2'>
            <Image
            src={gitNoteIcon}
            alt="Git Note Icon"
            />
            <h1 className='text-left text-[22.55px] font-bold leading-[19.64px]'>GitNote</h1>
          </div>
          <div className='space-y-4 pb-12'>
            <Link href='/posts/create-post'>
              <button className="paragraph-4-medium flex w-full flex-row items-center justify-center rounded border border-blue-700 bg-blue-500 py-3 font-bold text-white hover:bg-blue-700">
                <Image
                src={plusCircleIcon}
                alt="Plus Icon"
                className='mr-2'
                />
                Create Post
              </button>
            </Link>
            <Search />
          </div>
        </div>

        <NavSection title='POSTS'>
          <Posts/>
        </NavSection>

        <NavSection title='QUICK LINKS'>
          <QuickLink icon={jsmProLogo} href="https://www.jsmastery.pro/" name="JSM Courses"/>
          <QuickLink icon={githubOutline} href="https://github.com/" name="Github Organization"/>
        </NavSection>

        <div className='flex space-x-2 pt-40'>
          <Image
              src={logoutIcon}
              alt="Logout Icon"
            />
          <Link className='paragraph-3-medium text-white-300' href='/logout'>Logout</Link>
        </div>
    </nav>
  )
}

export default SideNavbar
