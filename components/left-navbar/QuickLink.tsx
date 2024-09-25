import React from "react";
import { QuickLinkProps } from "@/types";

const QuickLink = ({ groupName, href, name, icon: Icon }: QuickLinkProps) => {
  const groupNameClass = groupName === "jsm" ? "group/jsm" : "group/github";
  const groupNameHoverClass =
    groupName === "jsm" ? "group-hover/jsm" : "group-hover/github";

  return (
    <a
      target="_blank"
      href={href}
      className={`${groupNameClass} flex h-8 items-center gap-x-2`}
    >
      <Icon
        className={
          groupName === "jsm"
            ? `group-hover/jsm:fill-white-100 fill-[#55597D] group-hover:duration-300`
            : `group-hover/github:stroke-white-100 stroke-[#55597D] group-hover:duration-300`
        }
      />
      <p
        className={`${groupNameHoverClass}:text-white-100 group-hover:duration-300`}
      >
        {name}
      </p>
    </a>
  );
};

export default QuickLink;
