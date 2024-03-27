"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Image as LandscapeIcon } from "lucide-react";

// import SidebarTags from "./SidebarTags";
// import SidebarRelatedPosts from "./SidebarRelatedPosts";
// import SidebarOnThisPage from "./SidebarOnThisPage";
import SidebarSocialMedia from "./SidebarSocialMedia";
import { User } from "@prisma/client";

const RightSidebar = ({ user }: { user: User }) => {
  return (
    <div className=" bg-black-800 flex-2 sticky right-0 top-0 z-20 flex h-screen w-1/5 flex-col gap-10 overflow-y-auto p-8 pt-20">
      <Link href="/profile" className="flex items-center gap-2">
        {user.image ? (
          <Image
            src={user.image as string}
            width={50}
            height={50}
            alt="Profile photo"
          />
        ) : (
          <div className="bg-black-700 p-7">
            <LandscapeIcon stroke="rgba(173, 179, 204, 1)" size={18} />
          </div>
        )}

        <div className="flex flex-col">
          <p className="paragraph-3-medium">
            {user.name ?? '"(oops! Missing name)"'}
          </p>
          <p className="text-white-300 paragraph-4-regular">
            {user.email ?? "(oops! Missing email)"}
          </p>
        </div>
      </Link>

      {/* <SidebarTags /> */}
      {/* <SidebarRelatedPosts /> */}
      {/* <SidebarOnThisPage /> */}
      <SidebarSocialMedia user={user} />
    </div>
  );
};

export default RightSidebar;
