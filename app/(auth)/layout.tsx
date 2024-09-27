import React from "react";

import Image from "next/image";
import gitNoteIcon from "@/public/gitNoteIcon.svg";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex max-w-full flex-col items-center justify-center">
      <header className="mt-14 flex items-center gap-x-2">
        <Image src={gitNoteIcon} alt="Git Note Icon" width={40} />
        <h1 className="heading-1-bold text-left">GitNote</h1>
      </header>
      <section className="flex min-h-screen w-full justify-center">
        {children}
      </section>
    </main>
  );
};

export default Layout;
