"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gitNoteIcon from "@/public/gitNoteIcon.svg";
import { Menu } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import { User } from "@prisma/client";

const MobileHeader = ({ user }: { user: User }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black-800 flex justify-between p-6 lg:hidden">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src={gitNoteIcon} alt="Git Note Icon" />
          <h1 className="text-left text-[22.55px] font-bold leading-[19.64px] hover:text-blue-500 hover:duration-300">
            GitNote
          </h1>
        </div>
      </Link>

      <button type="button" onClick={() => setIsOpen(true)}>
        {!isOpen && <Menu />}
      </button>

      <MobileNavbar user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default MobileHeader;
