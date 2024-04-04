"use client";

import searchIcon from "@/public/searchIcon.svg";
import shortcutIcon from "@/public/shortcutIcon.svg";
import Image from "next/image";

export default function Search() {
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <div className="bg-black-700 flex items-center gap-2 rounded-md px-2">
      <Image
        src={searchIcon}
        alt="Search Icon"
        className="pointer-events-none"
      />
      <input
        className="placeholder:paragraph-4-medium placeholder:text-white-500 bg-black-700 w-full rounded-md border-none text-sm focus:outline-none"
        placeholder="Search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <Image
        src={shortcutIcon}
        alt="Shortcut Icon"
        className="pointer-events-none"
      />
    </div>
  );
}
