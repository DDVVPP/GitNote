// contains app's constant variables

import GithubOutlineIcon from "@/components/shared/icons/GithubOutlineIcon";
import JSMLinkIcon from "@/components/shared/icons/JSMLinkIcon";
import { QuickLinkProps } from "@/types";

export const quickLinks: QuickLinkProps[] = [
  {
    groupName: "jsm",
    name: "JSM Courses",
    href: "https://www.jsmastery.pro/",
    icon: JSMLinkIcon,
  },
  {
    groupName: "github",
    name: "Github Organization",
    href: "https://github.com/",
    icon: GithubOutlineIcon,
  },
];
