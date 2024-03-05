/* eslint-disable tailwindcss/no-custom-classname */
'use client';
import React from 'react';
import Image from 'next/image';
import gitNoteIcon from '@/public/gitNoteIcon.svg'
import jsmProLogo from '@/public/jsmProLogo.svg'
import githubOutline from '@/public/githubOutline.svg'
import logoutIcon from '@/public/logoutIcon.svg'
import Link from 'next/link';
import Search from '../Search';
import Posts from '@/app/(root)/posts/page';
import QuickLink from '../QuickLink';
import NavSection from './NavSection';
import PlusIcon from '../Icons/PlusIcon';

const SideNavbar = () => {

  return (
    <nav className='custom-scrollbar bg-black-800 flex-2 sticky left-0 top-0 z-20 flex h-screen flex-col overflow-y-auto p-8 pt-20 lg:left-0 lg:w-60'>
        <div className='border-white-500 flex flex-col justify-start space-y-12 border-b'>
          <div className='flex items-center space-x-2'>
            <Image
            src={gitNoteIcon}
            alt="Git Note Icon"
            />
            <h1 className='text-left text-[22.55px] font-bold leading-[19.64px]'>GitNote</h1>
          </div>
          <div className='space-y-4 pb-12'>
            <Link href='/posts/create-post'>
              <button className="paragraph-4-medium primary-gradient text-white-100 flex w-full items-center justify-center gap-2 rounded border border-none py-2 font-bold">
                <PlusIcon />
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
