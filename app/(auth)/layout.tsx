import React from "react";

import Image from "next/image";
import gitNoteIcon from "@/public/gitNoteIcon.svg";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex max-w-full flex-col items-center justify-center">
      <header className="mt-14 flex items-baseline gap-x-2 ">
        <div className="duration-500 max-md:hidden">
          <Image src={gitNoteIcon} alt="Git Note Icon" width={40} />
        </div>
        <div className="duration-500 md:hidden">
          <Image src={gitNoteIcon} alt="Git Note Icon" width={28} />
        </div>
        <h1 className="heading-1-bold max-md:display-1-bold text-left duration-500">
          GitNote
        </h1>
      </header>
      <section className="mt-[134px] flex w-full justify-center max-md:mt-16">
        {children}
      </section>
    </main>
  );
};

export default Layout;
