import React from 'react';

import Image from 'next/image';
import gitNoteIcon from '@/public/gitNoteIcon.svg';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col items-center justify-center max-w-full">
      <div className="flex space-x-2 mt-14 items-center">
        <Image src={gitNoteIcon} alt="Git Note Icon" />
        <h1 className="text-left text-[22.55px] font-bold leading-[19.64px]">
          GitNote
        </h1>
      </div>
      <div className="flex min-h-screen">{children}</div>
    </main>
  );
};

export default Layout;
