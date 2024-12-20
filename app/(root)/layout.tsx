import React from "react";

import { User } from "@prisma/client";
import LeftNavbar from "@/components/left-navbar/LeftNavbar";
import RightSidebar from "@/components/right-sidebar/RightSidebar";
import { getUser } from "@/lib/actions/user.actions";
import MobileHeader from "@/components/MobileHeader";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = (await getUser()) as User;

  return (
    <div className="flex h-screen flex-col">
      <header className="lg:fixed lg:hidden">
        <MobileHeader user={user} />
      </header>

      <div className="flex flex-1 flex-col lg:flex-row">
        <nav className="bg-black-800 hidden w-[290px] lg:block">
          <LeftNavbar />
        </nav>

        <main className="flex-1 px-7 pt-10">{children}</main>

        <nav className="bg-black-800 hidden w-[290px] lg:block">
          <RightSidebar user={user} />
        </nav>
      </div>
    </div>
  );
};

export default Layout;
