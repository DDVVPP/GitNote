import React, { Suspense } from "react";
import { signOut } from "@/lib/actions";

import Image from "next/image";
import gitNoteIcon from "@/public/gitNoteIcon.svg";
import logoutIcon from "@/public/logoutIcon.svg";
import Link from "next/link";
import QuickLink from "./QuickLink";
import NavSection from "./NavSection";
import Button from "../shared/ui/Button";
import Search from "../shared/Search";
import { quickLinks } from "@/constants";
import { QuickLinkProps } from "@/types";

const LeftNavbar = () => {
  return (
    <nav className="flex h-screen flex-col justify-between px-7 pt-10">
      <section>
        <div className="border-white-500 flex flex-col justify-start gap-y-12 border-b">
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
            <Suspense>
              <Search />
            </Suspense>
          </div>
        </div>

        <NavSection title="POSTS"> placeholder for posts</NavSection>

        <NavSection title="QUICK LINKS">
          {quickLinks.map((link: QuickLinkProps) => {
            return (
              <QuickLink
                key={link.groupName}
                groupName={link.groupName}
                href={link.href}
                name={link.name}
                icon={link.icon}
              />
            );
          })}
        </NavSection>
      </section>

      <section className="mb-5 flex align-bottom">
        <form action={signOut}>
          <button
            className="paragraph-3-medium text-white-100 hover:text-white-100 flex gap-2 hover:duration-300"
            type="submit"
          >
            <Image src={logoutIcon} alt="Logout Icon" />
            Logout
          </button>
        </form>
      </section>
    </nav>
  );
};

export default LeftNavbar;
