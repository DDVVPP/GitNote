import { Suspense } from 'react'
import { getAllPosts } from "@/lib/actions/post.actions";

import { CreateType, Post } from "@prisma/client";
import Posts from "../../../components/post/Posts";
import Pagination from "@/components/post/Pagination";
import { SearchParams } from "@/types";

export default async function PostsInCols({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const posts = await getAllPosts({
    page: searchParams.page ?? "1",
    searchTerm: searchParams.type as CreateType,
    term: searchParams.term ?? "",
    tag: searchParams.tag ?? "",
    postsToTake: 8,
  });

  if (!posts) return null;
  const { somePosts, hasNextPage, numberOfPages } = posts;

  return (
    <Suspense>
    <section className="flex flex-col gap-4">
      {somePosts && (
        <>
        <Suspense>
          <Posts posts={somePosts as Post[]} isTwoCols />
          </Suspense>
          <Suspense>
          <Pagination
            hasNextPage={hasNextPage as boolean}
            numberOfPages={numberOfPages as number}
          />
          </Suspense>
        </>
      )}
    </section>
    </Suspense>
  );
}
