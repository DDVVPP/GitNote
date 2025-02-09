"use client";

import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Post } from "@prisma/client";
import { getAllPosts } from "../actions/post.actions";

type PostContextType = {
  posts: Post[];
};

const PostContext = createContext<PostContextType>({ posts: [] });

export const PostContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getAllPosts({
        page: "1",
      });
      if (posts) {
        const { somePosts } = posts;
        setPosts(somePosts as Post[]);
      }
    };
    getPosts();
  }, []);
  console.log("posts in context", posts);
  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostContext);
};
