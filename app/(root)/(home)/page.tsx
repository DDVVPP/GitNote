import { getUser } from "@/lib/actions/user.actions";
import { getAllPosts, getPostDates } from "@/lib/actions/post.actions";

import { CreateType, Post, User } from "@prisma/client";
import { PostDate, SearchParams } from "@/types";
import Posts from "../../../components/post/Posts";
import Pagination from "@/components/post/Pagination";
import ContributionGrid from "@/components/post/ContributionGrid";
import UserNotFound from "@/components/shared/UserNotFound";

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
  const { reducedDates } = await getPostDates();

  return user ? (
    <section className="flex flex-col">
      <section className="mb-8 space-y-4">
        <h1 className="display-1-bold text-white-100">Hello {user.name},</h1>
        <p className="paragraph-1-regular text-white-300">
          Time to jot down your latest learnings today!
        </p>
        <div>
          <ContributionGrid postDates={reducedDates as PostDate[]} />
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
  ) : (
    <UserNotFound />
  );
}
