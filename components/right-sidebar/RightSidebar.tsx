"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

import { Image as LandscapeIcon } from "lucide-react";

import SidebarTags from "./SidebarTags";
import SidebarRelatedPosts from "./SidebarRelatedPosts";
import SidebarSocialMedia from "./SidebarSocialMedia";
import { User } from "@prisma/client";

const RightSidebar = ({ user }: { user: User }) => {
  const pathname = usePathname();
  const params = useParams();

  const renderCorrectSidebar = () => {
    if (
      [
        "/",
        "/posts",
        "/posts/create-post",
        `/posts/${params.postId}/update-post`,
      ].includes(pathname)
    ) {
      return <SidebarTags />;
    } else if ([`/posts/${params.postId}`].includes(pathname)) {
      return <SidebarRelatedPosts />;
    } else if (["/profile", "/profile/edit"].includes(pathname)) {
      return <SidebarSocialMedia user={user} />;
    }
  };

  return (
    <div className="bg-black-800 flex-2 sticky right-0 top-0 z-20 flex h-screen w-1/5 flex-col gap-10 overflow-y-auto p-6 pt-16">
      <Link
        href="/profile"
        className="hover:bg-black-600 flex items-center gap-2 rounded-md p-2 hover:duration-300"
      >
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

      {renderCorrectSidebar()}
    </div>
  );
};

export default RightSidebar;
