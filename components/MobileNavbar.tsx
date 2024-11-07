import React, { Suspense, useRef, Dispatch } from "react";
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
import useOutsideClickHandler from "@/lib/utils/useOutsideClickHandler";

const MobileNavbar = ({
  user,
  isOpen,
  setIsOpen,
}: {
  user: User;
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const closeMenu = () => setIsOpen(false);
  useOutsideClickHandler(ref, closeMenu);

  return (
    <nav
      className={`bg-black-800 absolute right-0 top-0 z-10 flex h-screen w-80 cursor-default flex-col justify-between px-7 transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      ref={ref}
    >
      <menu>
        <section className="flex flex-col justify-start">
          <header className="my-10 flex justify-between">
            <Link
              href="/profile"
              className="hover:bg-black-600 flex gap-2 rounded-md hover:duration-300"
              onClick={(event) => {
                event.stopPropagation();
                closeMenu();
              }}
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

            {/* The X icon-button is located here rather than in the parent in order to align it with the user profile info */}
            <button type="button" onClick={closeMenu}>
              <X className="cursor-pointer" />
            </button>
          </header>

          <div className="space-y-4">
            <Link href="/posts/create-post">
              <Button
                icon="plus"
                color="gradient"
                onClick={(event) => event.stopPropagation()}
              >
                Create Post
              </Button>
            </Link>
            <Suspense>
              <Search />
            </Suspense>
          </div>
        </section>

        <hr className="bg-white-500 my-6 h-px border-0" />

        <NavSection title="QUICK LINKS">
          {quickLinks.map((link: QuickLinkProps) => {
            return (
              <QuickLink
                key={link.groupName}
                groupName={link.groupName}
                href={link.href}
                name={link.name}
                icon={link.icon}
                onClick={(event: { stopPropagation: () => any }) =>
                  event.stopPropagation()
                }
              />
            );
          })}

          <form action={signOut}>
            <button
              className="paragraph-3-medium text-white-100 hover:text-white-100 flex h-fit cursor-pointer gap-x-3 hover:duration-300"
              type="submit"
              onClick={(event) => event.stopPropagation()}
            >
              <Image src={logoutIcon} alt="Logout Icon" />
              Logout
            </button>
          </form>
        </NavSection>

        <hr className="bg-white-500 my-6 h-px border-0" />

        <NavSection title="POSTS"> placeholder for posts</NavSection>
      </menu>
    </nav>
  );
};

export default MobileNavbar;
