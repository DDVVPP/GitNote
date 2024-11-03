import React from "react";
import { QuickLinkProps } from "@/types";

const QuickLink = ({ groupName, href, name, icon: Icon }: QuickLinkProps) => {
  const groupNameClass = groupName === "jsm" ? "group/jsm" : "group/github";

  return (
    <a
      target="_blank"
      href={href}
      className={`${groupNameClass} flex items-center gap-x-2`}
    >
      <Icon
        className={`${
          groupName === "jsm"
            ? `fill-white-500 group-hover/jsm:fill-white-100`
            : `group-hover/github:stroke-white-100 stroke-white-500`
        } group-hover:duration-300`}
      />
      <p
        className={`${
          groupName === "jsm"
            ? "group-hover/jsm:text-white-100"
            : "group-hover/github:text-white-100"
        } group-hover:duration-300`}
      >
        {name}
      </p>
    </a>
  );
};

export default QuickLink;
