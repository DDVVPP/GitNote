"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gitNoteIcon from "@/public/gitNoteIcon.svg";
import { Menu, X } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black-700 flex justify-between border p-6 md:hidden">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src={gitNoteIcon} alt="Git Note Icon" />
          <h1 className="text-left text-[22.55px] font-bold leading-[19.64px] hover:text-blue-500 hover:duration-300">
            GitNote
          </h1>
        </div>
      </Link>
      <button
        type="button"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {isOpen ? (
          <nav>
            <X />
            <MobileNavbar />
          </nav>
        ) : (
          <Menu />
        )}
      </button>
    </nav>
  );
};

export default MobileHeader;
