import { findPosts } from "@/lib/actions/post.actions";
import Search from "./Search";
import { useSearchParams } from "next/navigation";
import foundPosts from "@/lib/utils/foundPosts";

const SearchWrapper = async () => {
  // const searchParams = useSearchParams();
  // const term = searchParams.get("term");
  // console.log("term", term);

  return (
    <>
      {" "}
      <Search posts={foundPosts} />{" "}
    </>
  );
};

export default SearchWrapper;
