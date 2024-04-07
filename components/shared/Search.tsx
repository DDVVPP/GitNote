"use client";

import { Command } from "cmdk";
import { useState, useEffect } from "react";
import searchIcon from "@/public/searchIcon.svg";
import shortcutIcon from "@/public/shortcutIcon.svg";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import urlManager from "@/lib/utils/urlManager";
import { Post } from "@prisma/client";
import { findPosts } from "@/lib/actions/post.actions";

const Search = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<Post[]>();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const getPosts = async () => {
      const posts = await findPosts(searchTerm);
      if (posts) setPosts(posts as Post[]);
    };
    getPosts();
  }, [searchTerm]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newParams = urlManager(searchParams.toString(), {
        page: "1",
        term: searchTerm,
      });
      router.push(`/?${newParams}`);
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

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
        <div className="bg-black-800 flex w-2/3 flex-col">
          <Command.Input
            value={searchTerm}
            onValueChange={setSearchTerm}
            className="bg-black-700 w-full border-none"
          />
          <Command.List className="p-4">
            <Command.Empty>No results found.</Command.Empty>

            <Command.Group className="paragraph-3-regular text-white-300 space-y-4">
              {posts &&
                posts.length > 0 &&
                posts.map((post, idx) => {
                  return (
                    <Command.Item className="cursor-pointer">
                      {post.title}
                    </Command.Item>
                  );
                })}
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
};

export default Search;
