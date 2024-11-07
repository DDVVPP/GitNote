import React from "react";

const NavSection = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="group flex flex-col justify-start rounded-md text-left">
      <h3 className="caption text-white-500 mb-5 group-hover:text-white">
        {title}
      </h3>
      <section className="paragraph-3-medium text-white-300 flex flex-col gap-y-5">
        {children}
      </section>
    </div>
  );
};

export default NavSection;
