import { getAllPosts } from "@/lib/actions/post.actions";

import { CreateType, Post, User } from "@prisma/client";
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
    term: searchParams.tag,
    postsToTake: 8,
  });
  const { somePosts, hasNextPage, numberOfPages } = posts;

  return (
    <section className="flex flex-col gap-4">
      {somePosts && (
        <>
          <Posts posts={somePosts as Post[]} isTwoCols />
          <Pagination
            hasNextPage={hasNextPage as boolean}
            numberOfPages={numberOfPages as number}
          />
        </>
      )}
    </section>
  );
}
