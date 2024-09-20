import React from "react";
import { signOut } from "@/lib/actions";

import Image from "next/image";
import gitNoteIcon from "@/public/gitNoteIcon.svg";
import jsmProLogo from "@/public/jsmProLogo.svg";
import githubOutline from "@/public/githubOutline.svg";
import logoutIcon from "@/public/logoutIcon.svg";
import Link from "next/link";
import QuickLink from "./QuickLink";
import NavSection from "./NavSection";
import Button from "../shared/ui/Button";
import Search from "../shared/Search";

const LeftNavbar = () => {
  return (
    <nav className="bg-black-800 flex-2 sticky left-0 top-0 z-20 flex h-screen w-1/5 flex-col justify-between pl-8 pr-8 pt-20">
      <div>
        <div className="border-white-500 flex flex-col justify-start space-y-12 border-b">
          <Link href="/">
            <div className="flex items-center gap-x-2">
              <Image src={gitNoteIcon} alt="Git Note Icon" />
              <h1 className="text-left text-[22.55px] font-bold leading-[19.64px] hover:text-blue-500 hover:duration-300">
                GitNote
              </h1>
            </div>
          </Link>

          <div className="space-y-4 pb-12">
            <Link href="/posts/create-post">
              <Button icon="plus" color="gradient">
                Create Post
              </Button>
            </Link>
            <Search />
          </div>
        </div>

        <NavSection title="POSTS"> placeholder for posts</NavSection>

        <NavSection title="QUICK LINKS">
          <QuickLink
            icon={jsmProLogo}
            href="https://www.jsmastery.pro/"
            name="JSM Courses"
          />
          <QuickLink
            icon={githubOutline}
            href="https://github.com/"
            name="Github Organization"
          />
        </NavSection>
      </div>

      <div className="mb-5 flex">
        <form action={signOut}>
          <button
            className="paragraph-3-medium text-white-300 hover:text-white-100 flex gap-2 hover:duration-300"
            type="submit"
          >
            <Image src={logoutIcon} alt="Logout Icon" />
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
};

export default LeftNavbar;
