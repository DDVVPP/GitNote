import React, { useRef, Dispatch } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "@/lib/actions";

import Image from "next/image";
import logoutIcon from "@/public/logoutIcon.svg";
import Link from "next/link";
import QuickLink from "./left-navbar/QuickLink";
import NavSection from "./left-navbar/NavSection";
import Button from "./shared/ui/Button";
import Search from "./shared/Search";
import { quickLinks } from "@/lib/constants/quickLinksList";
import { QuickLinkProps } from "@/types";
import { User, Social, Post } from "@prisma/client";
import { Image as LandscapeIcon, X } from "lucide-react";
import useOutsideClickHandler from "@/lib/utils/useOutsideClickHandler";
import SocialMediaLinks from "./right-sidebar/SocialMediaLinks";
import { iconMatch } from "@/lib/utils/constants";

const MobileNavbar = ({
  user,
  posts,
  isOpen,
  setIsOpen,
}: {
  user: User & { socialMedia?: Social[] };
  posts: Post[];
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const closeMenu = () => setIsOpen(false);
  useOutsideClickHandler(ref, closeMenu);

  const pathname = usePathname();
  const isProfilePathname = ["/profile", `/profile/edit`].includes(pathname);

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
              className="hover:bg-black-600 flex gap-2 rounded-md pr-2 hover:duration-300"
              onClick={(event) => {
                event.stopPropagation();
                closeMenu();
              }}
            >
              {user.image ? (
                <div className=" relative size-9">
                  <Image
                    src={user.image}
                    blurDataURL={user.blurImage ?? ""}
                    placeholder="blur"
                    fill
                    alt="Profile photo"
                    style={{ objectFit: "contain" }}
                    className="bg-black-800"
                  />
                </div>
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

          {isProfilePathname ? (
            <SocialMediaLinks socialMedia={user.socialMedia} />
          ) : (
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

              <Search allPosts={posts} />
            </div>
          )}
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

        {!isProfilePathname && (
          <>
            <hr className="bg-white-500 my-6 h-px border-0" />
            <NavSection
              title={
                posts.length > 0
                  ? `POSTS - ${posts.length} MOST RECENT`
                  : "POSTS"
              }
            >
              {posts && posts.length > 0 ? (
                posts.map(({ title, createType, id }) => {
                  return (
                    <Link
                      key={id}
                      href={`/posts/${id}`}
                      className="flex items-center gap-x-3"
                    >
                      {iconMatch(title, createType)}
                    </Link>
                  );
                })
              ) : (
                <p>No posts to display!</p>
              )}
            </NavSection>
          </>
        )}
      </menu>
    </nav>
  );
};

export default MobileNavbar;
