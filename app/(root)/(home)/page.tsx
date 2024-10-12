import { getUser } from "@/lib/actions/user.actions";
import { getAllPosts } from "@/lib/actions/post.actions";

import { CreateType, Post, User } from "@prisma/client";
import { SearchParams } from "@/types";
import Posts from "../../../components/post/Posts";
import Pagination from "@/components/post/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const user = (await getUser()) as User;
  const posts = await getAllPosts({
    page: searchParams.page ?? "1",
    searchTerm: searchParams.type as CreateType,
    term: searchParams.term ?? "",
    tag: searchParams.tag ?? "",
  });
  const { somePosts, hasNextPage, numberOfPages } = posts;

  return (
    <section className="flex flex-col">
      <section className="mb-8 space-y-4">
        <h1 className="display-1-bold text-white-100">
          Hello {user && user.name},
        </h1>
        <p className="paragraph-1-regular text-white-300">
          Time to jot down your latest learnings today!
        </p>
        <div className="h-52 w-full content-center bg-black-800">
          <p className="paragraph-3-regular p-3 text-center text-white-500">{`[placeholder for contribution grid]`}</p>
        </div>
      </section>
      {somePosts && (
        <>
          <Posts posts={somePosts as Post[]} />
          <Pagination
            hasNextPage={hasNextPage as boolean}
            numberOfPages={numberOfPages as number}
          />
        </>
      )}
    </section>
  );
}
