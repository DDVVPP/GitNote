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
    <div className="flex h-screen flex-col">
      <header className="max-[1220px]:block">
        <MobileHeader user={user} posts={somePosts as Post[]} />
      </header>

      <div className="flex flex-1 flex-col lg:flex-row">
        <nav className="bg-black-800 hidden w-[290px] lg:block">
          <LeftNavbar posts={somePosts as Post[]} />
        </nav>

        <main className="flex-1 px-7 pt-10">{children}</main>

        <nav className="bg-black-800 hidden w-[290px] lg:block">
          <RightSidebar user={user} />
        </nav>
      </div>
    </div>
  ) : (
    <UserNotFound />
  );
};

export default Layout;
