import React, { Suspense } from "react";
import { signOut } from "@/lib/actions";

import Image from "next/image";
import logoutIcon from "@/public/logoutIcon.svg";
import Link from "next/link";
import QuickLink from "./left-navbar/QuickLink";
import NavSection from "./left-navbar/NavSection";
import Button from "./shared/ui/Button";
import Search from "./shared/Search";
import { quickLinks } from "@/constants";
import { QuickLinkProps } from "@/types";
import { User } from "@prisma/client";
import { Image as LandscapeIcon, X } from "lucide-react";

const MobileNavbar = ({ user }: { user: User }) => {
  return (
    <nav className="flex h-screen flex-col justify-between px-7">
      <section>
        <div className="flex flex-col justify-start">
          <div className="my-10 flex justify-between">
            <Link
              href="/profile"
              className="hover:bg-black-600 flex gap-2 rounded-md hover:duration-300"
            >
              {user.image ? (
                <Image
                  src={user.image as string}
                  width={50}
                  height={50}
                  alt="Profile photo"
                />
              ) : (
                <div className="bg-black-700 p-7">
                  <LandscapeIcon stroke="rgba(173, 179, 204, 1)" size={18} />
                </div>
              )}

              <div className="flex flex-col text-left">
                <p className="paragraph-3-medium">
                  {user.name ?? '"(oops! Missing name)"'}
                </p>
                <p className="paragraph-4-regular text-white-300">
                  {user.email ?? "(oops! Missing email)"}
                </p>
              </div>
            </Link>
            <X />
          </div>

          <div className="mb-6 flex flex-col gap-y-4">
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

        <hr className="bg-white-500 h-px border-0" />

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
          <form action={signOut}>
            <button
              className="paragraph-3-medium text-white-300 hover:text-white-100 flex gap-2 hover:duration-300"
              type="submit"
            >
              <Image src={logoutIcon} alt="Logout Icon" />
              Logout
            </button>
          </form>
        </NavSection>

        <hr className="bg-white-500 h-px border-0" />

        <NavSection title="POSTS"> placeholder for posts</NavSection>
      </section>
    </nav>
  );
};

export default MobileNavbar;
