"use client";
import React, { Suspense } from "react";
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
      return (
        <Suspense>
          <SidebarTags />
        </Suspense>
      );
    } else if ([`/posts/${params.postId}`].includes(pathname)) {
      return <SidebarRelatedPosts />;
    } else if (["/profile", "/profile/edit"].includes(pathname)) {
      return <SidebarSocialMedia user={user} />;
    }
  };

  return (
    <section className="px-7 pt-10">
      <Link
        href="/profile"
        className="hover:bg-black-600 flex items-center gap-2 rounded-md hover:duration-300"
      >
        {user.image ? (
          <div className="relative size-9">
            <Image
              src={user.image}
              blurDataURL={user.blurImage ?? ""}
              placeholder="blur"
              alt="Profile photo"
              fill
              objectFit="contain"
              className="bg-black-800"
            />
          </div>
        ) : (
          <div className="bg-black-700 p-7">
            <LandscapeIcon stroke="rgba(173, 179, 204, 1)" size={18} />
          </div>
        )}

        <div className="flex flex-col">
          <p className="paragraph-3-medium">
            {user.name ?? '"(oops! Missing name)"'}
          </p>
          <p className="paragraph-4-regular text-white-300">
            {user.email ?? "(oops! Missing email)"}
          </p>
        </div>
      </Link>

      <section className="mt-10">{renderCorrectSidebar()}</section>
    </section>
  );
};

export default RightSidebar;
