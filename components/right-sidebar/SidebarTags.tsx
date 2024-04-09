/* eslint-disable tailwindcss/no-custom-classname */
import { getUniqueTags } from "@/lib/actions/post.actions";
import React, { useEffect, useState } from "react";
import { Badge } from "../shared";
import urlManager from "@/lib/utils/urlManager";
import { useSearchParams, useRouter } from "next/navigation";

const SidebarTags = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [tagList, setTagList] = useState<String[]>();
  const [tagTerm, setTagTerm] = useState("");

  useEffect(() => {
    const getTags = async () => {
      const tags = await getUniqueTags();
      if (tags) setTagList(tags.deDupedTags);
    };
    getTags();
  }, []);

  useEffect(() => {
    const setParams = async () => {
      const newParams = urlManager(searchParams.toString(), {
        page: "1",
        tag: tagTerm,
      });
      router.push(`?${newParams}`);
    };
    setParams();
  }, [tagTerm]);

  return (
    <div className="flex flex-col justify-start gap-4">
      <h3 className="text-white-100 paragraph-3-bold">Tags</h3>
      {tagList &&
        tagList.map((tag) => {
          const isSelected = tag === searchParams.get("tag");
          return (
            <button
              type="button"
              key={tag as string}
              onClick={() => setTagTerm(isSelected ? "" : (tag as string))}
            >
              <Badge
                hover={!isSelected}
                color={isSelected ? "gray" : undefined}
              >
                {tag}
              </Badge>
            </button>
          );
        })}
    </div>
  );
};

export default SidebarTags;
