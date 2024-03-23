import SideNavbar from "@/components/side-navbar/SideNavbar";
import RightSidebar from "@/components/right-sidebar/RightSidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="flex h-screen justify-start">
        <SideNavbar />
        <section className="flex min-h-screen flex-1 flex-col pb-10 pt-20 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </div>
    </main>
  );
};

export default Layout;
