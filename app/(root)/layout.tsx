import LeftNavbar from "@/components/left-navbar/LeftNavbar";
import RightSidebar from "@/components/right-sidebar/RightSidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="flex min-h-screen justify-start">
        <LeftNavbar />
        <section className="flex min-h-screen flex-1 flex-col pt-20 max-md:pb-14 sm:px-8">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </div>
    </main>
  );
};

export default Layout;
