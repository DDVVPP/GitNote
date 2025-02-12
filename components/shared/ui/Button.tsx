import React from "react";

import PlusIcon from "@/components/shared/icons/PlusIcon";
import GoogleIcon from "@/components/shared/icons/GoogleIcon";
import GithubIcon from "@/components/shared/icons/GithubIcon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: "plus" | "github" | "google";
  color?:
    | "blue"
    | "gray"
    | "darkGrayBlueText"
    | "darkGrayWhiteText"
    | "gradient"
    | "red";
  mobileClass?: string;
}

const colorClassMap = {
  blue: "bg-primary-500 text-black-900 paragraph-3-bold hover:text-white-100 hover:duration-300 hover:bg-blue-500 disabled-button",
  gray: "bg-black-600 hover:bg-[#4d567a] text-white-100 paragraph-3-medium hover:duration-300 disabled-button",
  darkGrayWhiteText:
    "bg-black-700 text-white-300 paragraph-3-medium disabled-button",
  darkGrayBlueText:
    "bg-black-700 hover:bg-[#4d567a] hover:duration-300 text-primary-500 hover:text-white-100 paragraph-3-medium disabled-button",
  gradient:
    "text-white-100 primary-gradient paragraph-4-medium disabled-button",
  red: "bg-error-500 hover:bg-red-600 hover:duration-300 text-white-100 paragraph-3-medium disabled-button",
  default: "bg-black-700 text-white-300 paragraph-3-medium disabled-button",
};

const iconMap = {
  plus: PlusIcon,
  github: GithubIcon,
  google: GoogleIcon,
  default: null,
};

const baseclass = "flex w-full items-center justify-center gap-2 rounded p-3";

const Button = ({
  children,
  icon,
  color,
  onClick,
  disabled,
  mobileClass,
  ...rest
}: ButtonProps) => {
  const colorClass = colorClassMap[color || "default"];
  const IconComponent = iconMap[icon || "default"];
  const iconColorClass = (() => {
    switch (color) {
      case "blue":
        return "fill-white-100";
      case "gradient":
        return "fill-white-100";
      case "gray":
        return "fill-primary-500";
      case "darkGrayWhiteText":
        return "fill-primary-500";
      case "darkGrayBlueText":
        return "fill-primary-500";
    }
  })();

  return (
    <button
      className={`${colorClass} ${baseclass} ${mobileClass}`}
      onClick={onClick}
      {...rest}
      disabled={disabled}
    >
      {IconComponent && (
        <IconComponent className={icon === "plus" ? iconColorClass : ""} />
      )}
      {children}
    </button>
  );
};

export default Button;
