import { signOut } from "@/lib/actions";
import Image from "next/image";
import gitNoteIcon from "@/public/gitNoteIcon.svg";
import logoutIcon from "@/public/logoutIcon.svg";
import Link from "next/link";
import { Post } from "@prisma/client";
import QuickLink from "./QuickLink";
import NavSection from "./NavSection";
import Button from "../shared/ui/Button";
import Search from "../shared/Search";
import { quickLinks } from "@/lib/constants/quickLinksList";
import { QuickLinkProps } from "@/types";
import { iconMatch } from "@/lib/utils/constants";

const LeftNavbar = ({ posts }: { posts: Post[] }) => {
  return (
    <nav className="flex h-screen flex-col px-7 pt-10">
      <section className="border-white-500 flex flex-col justify-start gap-y-12">
        <Link href="/">
          <div className="flex items-center gap-x-2">
            <Image src={gitNoteIcon} alt="Git Note Icon" />
            <h1 className="text-left text-[22.55px] font-bold leading-[19.64px] hover:text-blue-500 hover:duration-300">
              GitNote
            </h1>
          </div>
        </Link>

        <div className="space-y-4">
          <Link href="/posts/create-post">
            <Button icon="plus" color="gradient">
              Create Post
            </Button>
          </Link>

          <Search allPosts={posts} />
        </div>
      </section>

      <hr className="dark:bg-black-700 my-6 h-px w-full border-0" />

      <NavSection
        title={
          posts.length > 0 ? `POSTS - ${posts.length} MOST RECENT` : "POSTS"
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

      <hr className="dark:bg-black-700 my-6 h-px w-full border-0" />

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

      <hr className="dark:bg-black-700 my-6 h-px w-full border-0" />

      <form action={signOut}>
        <button
          className="paragraph-3-medium text-white-100 hover:text-white-100 flex gap-2 hover:duration-300"
          type="submit"
        >
          <Image src={logoutIcon} alt="Logout Icon" />
          Logout
        </button>
      </form>
    </nav>
  );
};

export default LeftNavbar;
