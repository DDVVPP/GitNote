import React from 'react';

import Image from 'next/image';
import gitNoteIcon from '@/public/gitNoteIcon.svg';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col items-center justify-center max-w-full">
      <header className="flex space-x-2 mt-14 items-center">
        <Image src={gitNoteIcon} alt="Git Note Icon" width={40} />
        <h1 className="text-left heading-1-bold">GitNote</h1>
      </header>
      <section className="flex min-h-screen w-full justify-center">
        {children}
      </section>
    </main>
  );
};

export default Layout;
