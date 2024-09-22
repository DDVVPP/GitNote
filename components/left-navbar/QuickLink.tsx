import React from "react";
import { QuickLinkProps } from "@/types";

const QuickLink = ({ groupName, href, name, icon: Icon }: QuickLinkProps) => {
  const groupNameClass = `group/${groupName}`;
  const groupNameHoverDuration = `group-hover/${groupName}:duration-300 transition`;

  return (
    <a
      target="_blank"
      href={href}
      className={`${groupNameClass} flex h-8 items-center gap-x-2`}
    >
      <Icon
        className={`${
          groupName === "jsm"
            ? `group-hover/${groupName}:fill-white-100 fill-[#55597D]`
            : `group-hover/${groupName}:stroke-white-100 stroke-[#55597D]`
        } ${groupNameHoverDuration}`}
      />
      <p
        className={`group-hover/${groupName}:text-white-100 ${groupNameHoverDuration}`}
      >
        {name}
      </p>
    </a>
  );
};

export default QuickLink;
