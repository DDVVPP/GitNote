import { getUser } from "@/lib/actions/user.actions";
import { findPosts, getAllPosts } from "@/lib/actions/post.actions";

import { Post, User } from "@prisma/client";
import Posts from "../../../components/post/Posts";
import Pagination from "@/components/post/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const user = (await getUser()) as User;

  const posts = await getAllPosts(searchParams.page ?? "1");
  const { somePosts, hasNextPage, numberOfPages } = posts;

  return (
    <section className="flex flex-col gap-4">
      <h1 className="display-1-bold text-white-100">
        Hello {user && user.name} {searchParams.page},
      </h1>
      <p className="paragraph-1-regular text-white-300">
        Time to jot down your latest learnings today!
      </p>
      <div className="bg-black-700 h-52 w-full">
        {/* placeholder for contribution grid */}
      </div>
      {somePosts ? (
        <Posts posts={somePosts as Post[]} />
      ) : (
        <h1 className="heading-1-medium  text-white-300 flex justify-center">
          No posts found!
        </h1>
      )}
      <Pagination
        hasNextPage={hasNextPage as boolean}
        numberOfPages={numberOfPages as number}
      />
    </section>
  );
}
