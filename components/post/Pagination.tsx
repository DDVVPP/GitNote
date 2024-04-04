"use client";
import { useSearchParams, useRouter } from "next/navigation";

const Pagination = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const router = useRouter();

  const next = () => {
    const nextPage = Number(page) + 1;
    router.push(`/?page=${nextPage}`);
  };

  return (
    <div className="flex items-center justify-center gap-x-6">
      <button className="bg-black-700 paragraph-4-medium text-white-100 p-3">
        Prev
      </button>
      <p className="paragraph-3-medium text-white-300">1/19</p>
      <button
        className="bg-black-700 paragraph-4-medium text-white-100 p-3 "
        onClick={next}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
