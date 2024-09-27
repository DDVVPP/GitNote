"use client";
import { useSearchParams, useRouter } from "next/navigation";

import urlManager from "@/lib/utils/urlManager";

const Pagination = ({
  hasNextPage,
  numberOfPages,
}: {
  hasNextPage: boolean;
  numberOfPages: number;
}) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const router = useRouter();

  const next = () => {
    if (hasNextPage) {
      const nextPage = Number(page) + 1;
      const newParams = urlManager(searchParams.toString(), {
        page: nextPage.toString(),
      });
      router.push(`?${newParams}`);
    }
  };

  const prev = () => {
    const previousPage = Number(page) - 1;
    const newParams = urlManager(searchParams.toString(), {
      page: previousPage.toString(),
    });
    router.push(`?${newParams}`);
  };

  return (
    <div className="mb-6 flex items-center justify-center gap-x-6">
      <button
        className="bg-black-700 paragraph-4-medium text-white-100 disabled:bg-black-800 disabled:text-white-500 hover:bg-black-600 p-3"
        onClick={prev}
        disabled={Number(page) === 1}
      >
        Prev
      </button>
      <p className="paragraph-3-medium text-white-300">
        {page}/{numberOfPages}
      </p>
      <button
        className="bg-black-700 paragraph-4-medium text-white-100 hover:bg-black-600 disabled:bg-black-800 disabled:text-white-500 p-3 hover:duration-300"
        onClick={next}
        disabled={!hasNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
