import { getUser } from "@/lib/actions/user.actions";
import { findPosts, getAllPosts } from "@/lib/actions/post.actions";

import { CreateType, Post, User } from "@prisma/client";
import Posts from "../../../components/post/Posts";
import Pagination from "@/components/post/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string; type: string };
}) {
  const user = (await getUser()) as User;

  const posts = await getAllPosts({
    page: searchParams.page ?? "1",
    searchTerm: searchParams.type as CreateType,
  });
  const { somePosts, hasNextPage, numberOfPages } = posts;
  // const postsByType =
  //   searchParams.type !== "all-posts" && (await getAllPosts(searchParams.type));
  // const postsByType =
  //   searchParams.type !== "all-posts" && (await findPosts(searchParams.type));

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
