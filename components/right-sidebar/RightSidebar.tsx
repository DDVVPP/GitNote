"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import photo01 from "@/public/photo01.svg";
// import SidebarTags from "./SidebarTags";
// import SidebarRelatedPosts from "./SidebarRelatedPosts";
// import SidebarOnThisPage from "./SidebarOnThisPage";
import SidebarSocialMedia from "./SidebarSocialMedia";

const RightSidebar = () => {
  return (
    <div className=" bg-black-800 flex-2 sticky right-0 top-0 z-20 flex h-screen w-1/5 flex-col gap-10 overflow-y-auto p-8 pt-20">
      <Link href="/profile" className="flex gap-2">
        <Image src={photo01} alt="Profile photo" />
        <div className="flex flex-col">
          <p className="paragraph-3-medium">Nikky Eva</p>
          <p className="text-white-300 paragraph-4-regular">
            nikky@jsmastery.pro
          </p>
        </div>
      </Link>

      {/* <SidebarTags /> */}
      {/* <SidebarRelatedPosts /> */}
      {/* <SidebarOnThisPage /> */}
      <SidebarSocialMedia />
    </div>
  );
};

export default RightSidebar;
