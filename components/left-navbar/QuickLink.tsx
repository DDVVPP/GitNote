import React from "react";

const colorClassMap = {
  jsm: "hover:fill-white-100 fill-[#55597D] stroke-white-100",
  github: "hover:stroke-white-100 stroke-[#55597D]",
};

const QuickLink = ({
  key,
  href,
  name,
  icon: Icon,
}: {
  key: string;
  href: string;
  name: string;
  icon: any;
}) => {
  const colorClass = colorClassMap[key as string];

  return (
    <div className="group flex gap-2">
      <Icon className={colorClass} />
      <a target="_blank" href={href} className="group-hover:text-white-100">
        {name}
      </a>
    </div>
  );
};

export default QuickLink;
