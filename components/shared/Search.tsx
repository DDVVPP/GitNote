"use client";

import { Command } from "cmdk";
import { useState, useEffect } from "react";
import searchIcon from "@/public/searchIcon.svg";
import shortcutIcon from "@/public/shortcutIcon.svg";
import Image from "next/image";

export default function Search() {
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <>
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

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center backdrop-blur"
      >
        <div className="bg-black-600 h-96 w-96">
          <Command.Input />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>

            <Command.Group heading="Letters">
              <Command.Item>a</Command.Item>
              <Command.Item>b</Command.Item>
              <Command.Separator />
              <Command.Item>c</Command.Item>
            </Command.Group>

            <Command.Item>Apple</Command.Item>
          </Command.List>
        </div>
      </Command.Dialog>
    </>
  );
}
