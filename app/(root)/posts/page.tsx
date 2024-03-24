"use client";

import React from "react";
import Link from "next/link";
// import { deleteUser } from "@/lib/actions/user.actions";

const Posts = () => {
  // const handleDelete = () => {
  //   const userId = user.id;

  //   if (userId) {
  //     deleteUser(userId);
  //   }
  // };

  return (
    <>
      <h1>Recent Posts</h1>
      {/* Map through all posts */}
      <Link href="/posts/1">Post 1</Link>
      <Link href="/posts/2">Post2</Link>
      <Link href="/posts/3">Post3</Link>

      {/* {user?.role === "ADMIN" && (
        <div className="text-black-600 mt-10">
          <div className="mt-8">
            <button onClick={() => handleDelete()} type="submit">
              Delete User
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Posts;
