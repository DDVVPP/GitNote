import { getUser } from "@/lib/actions/user.actions";
import { findPost, getAllPosts } from "@/lib/actions/post.actions";

import { User } from "@prisma/client";
import Posts from "../posts/page";

export default async function Home() {
  const user = (await getUser()) as User;
  const allPosts = await getAllPosts();
  // const foundPosts = await findPost("tag1");

  return (
    <section className="flex flex-col gap-4">
      <h1 className="display-1-bold text-white-100">
        Hello {user && user.name},
      </h1>
      <p className="paragraph-1-regular text-white-300">
        Time to jot down your latest learnings today!
      </p>
      <div className="bg-black-700 h-52 w-full">
        {/* placeholder for contribution grid */}
      </div>
      {allPosts ? (
        <Posts allPosts={allPosts} />
      ) : (
        <h1 className="heading-1-medium  text-white-300 flex justify-center">
          No posts found!
        </h1>
      )}
    </section>
  );
}
