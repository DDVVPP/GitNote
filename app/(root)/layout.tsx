import React from "react";

import { User } from "@prisma/client";
import LeftNavbar from "@/components/left-navbar/LeftNavbar";
import RightSidebar from "@/components/right-sidebar/RightSidebar";
import { getUser } from "@/lib/actions/user.actions";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = (await getUser()) as User;

  return (
    <main>
      <div className="flex min-h-screen justify-start">
        <LeftNavbar />
        <section className="flex min-h-screen flex-1 flex-col pt-20 max-md:pb-14 sm:px-8">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar user={user} />
      </div>
    </main>
  );
};

export default Layout;
