import React from "react";
import { Post, User } from "@prisma/client";
import LeftNavbar from "@/components/left-navbar/LeftNavbar";
import RightSidebar from "@/components/right-sidebar/RightSidebar";
import { getUser } from "@/lib/actions/user.actions";
import { getAllPosts } from "@/lib/actions/post.actions";
import MobileHeader from "@/components/MobileHeader";
import UserNotFound from "@/components/shared/UserNotFound";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = (await getUser()) as User;
  const posts = await getAllPosts({
    page: "1",
  });
  const { somePosts } = posts;

  return user && somePosts ? (
    <div className="lg-a:items-center flex h-screen flex-col">
      <header className="max-lg-a:block hidden">
        <MobileHeader user={user} posts={somePosts as Post[]} />
      </header>

      <div className="lg-a:flex-row flex flex-1 flex-col">
        <nav className="bg-black-800 lg-a:block hidden w-[290px] min-w-[260px]">
          <LeftNavbar posts={somePosts as Post[]} />
        </nav>

        <main className="flex-1 px-7 pt-10">{children}</main>

        <nav className="bg-black-800 lg-a:block hidden w-[290px] min-w-[260px]">
          <RightSidebar user={user} />
        </nav>
      </div>
    </div>
  ) : (
    <UserNotFound />
  );
};

export default Layout;
