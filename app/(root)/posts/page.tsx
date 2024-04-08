import { getAllPosts } from "@/lib/actions/post.actions";

import { CreateType, Post, User } from "@prisma/client";
import Posts from "../../../components/post/Posts";
import Pagination from "@/components/post/Pagination";

export default async function PostsInCols({
  searchParams,
}: {
  searchParams: { page: string; type: string };
}) {
  const posts = await getAllPosts({
    page: searchParams.page ?? "1",
    searchTerm: searchParams.type as CreateType,
  });
  const { somePosts, hasNextPage, numberOfPages } = posts;

  return (
    <section className="flex flex-col gap-4">
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
