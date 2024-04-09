"use client";

import { Command } from "cmdk";
import { useState, useEffect } from "react";
import Link from "next/link";

import searchIcon from "@/public/searchIcon.svg";
import { Layers } from "lucide-react";
import shortcutIcon from "@/public/shortcutIcon.svg";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

import { CreateType, Post } from "@prisma/client";
import { findPosts } from "@/lib/actions/post.actions";
import urlManager from "@/lib/utils/urlManager";
import WorkflowIcon from "./icons/WorkflowIcon";
import ComponentIcon from "./icons/ComponentIcon";
import KnowledgeIcon from "./icons/KnowledgeIcon";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const getPosts = async () => {
      const posts = await findPosts(searchTerm);
      if (posts) setPosts(posts as Post[]);
    };

    const setParams = async () => {
      const newParams = urlManager(searchParams.toString(), {
        page: "1",
        term: searchTerm,
      });
      router.push(`?${newParams}`);
    };

    const timeout = setTimeout(() => {
      setParams();
      getPosts();
    }, 250);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: {
      key: string;
      metaKey: any;
      ctrlKey: any;
      preventDefault: () => void;
    }) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const iconMatch = (post: Post) => {
    switch (post.createType) {
      case CreateType.COMPONENT:
        return (
          <>
            <ComponentIcon className="text-purple-500" size={18} />
            <span>{post.title}</span>
          </>
        );
      case CreateType.WORKFLOW:
        return (
          <>
            <WorkflowIcon className="text-primary-500" size={18} />
            <span>{post.title}</span>
          </>
        );
      case CreateType.KNOWLEDGE:
        return (
          <>
            <KnowledgeIcon className="text-green-500" size={18} />
            <span>{post.title}</span>
          </>
        );
    }
  };
  return (
    <>
      <div
        className="bg-black-700 paragraph-4-medium flex cursor-pointer items-center justify-between rounded-md p-4"
        onClick={() => setOpen((open) => !open)}
      >
        <div className="flex gap-x-2">
          <Image
            src={searchIcon}
            alt="Search Icon"
            className="pointer-events-none"
          />
          <p className="text-white-500">Search...</p>
        </div>
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
        className="fixed inset-0 z-50 flex h-full w-full items-center justify-center backdrop-blur"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="bg-black-800 flex w-1/2 flex-col">
          <div className="bg-black-700 flex w-full items-center gap-x-2 border-none p-4  py-3">
            <Command.Input
              value={searchTerm}
              onValueChange={setSearchTerm}
              className="bg-black-700 paragraph-3-regular text-white-300 placeholder:text-white-300 w-full border-none p-0 py-1"
              placeholder="Type a command or search..."
            />
            <div className="bg-black-800 text-white-300 paragraph-4-regular rounded p-1">
              ESC
            </div>
          </div>
          <Command.List className="paragraph-3-regular text-white-300 h-fit max-h-64 overflow-auto p-4">
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group>
              <Link href="/posts" onClick={() => setOpen((open) => !open)}>
                <Command.Item className="hover:bg-black-600 flex cursor-pointer items-center gap-x-2 px-2 py-2 hover:rounded hover:py-2">
                  <Layers size={18} />
                  Explore all posts
                </Command.Item>
              </Link>
              {posts &&
                posts.length > 0 &&
                posts.map((post) => {
                  return (
                    <Link
                      key={post.id}
                      href={`/posts/${post.id}`}
                      onClick={() => setOpen((open) => !open)}
                    >
                      <Command.Item
                        className="hover:bg-black-600 flex cursor-pointer items-center gap-x-2 px-2 py-2 hover:rounded hover:py-2"
                        value={post.title}
                      >
                        {iconMatch(post)}
                      </Command.Item>
                    </Link>
                  );
                })}
            </Command.Group>
          </Command.List>
        </div>
      </Command.Dialog>
    </>
  );
};

export default Search;
