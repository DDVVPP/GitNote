import React from "react";

import { User } from "@prisma/client";
import LeftNavbar from "@/components/left-navbar/LeftNavbar";
import RightSidebar from "@/components/right-sidebar/RightSidebar";
import { getUser } from "@/lib/actions/user.actions";
import MobileHeader from "@/components/MobileHeader";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = (await getUser()) as User;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border md:hidden">
        <MobileHeader />
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="bg-black-800 hidden w-[290px] md:block">
          <LeftNavbar />
        </aside>
        <main className="flex-1 px-7 pt-10">{children}</main>

        <aside className="bg-black-800 hidden w-[290px] md:block">
          <RightSidebar user={user} />
        </aside>
      </div>
    </div>
  );
};

export default Layout;
