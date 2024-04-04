"use client";

import { useEffect, useState } from "react";

import { Post } from "@prisma/client";
import { createTypeList } from "@/lib/constants/createTypeList";
import { CreateTypeListItemType } from "@/types";
import Badge from "../shared/ui/Badge";

const PostOverview = ({ post }: { post: Post }) => {
  const { createType, title, tags } = post;
  const [selection, setSelection] = useState<CreateTypeListItemType>();
  console.log("selection", selection);

  useEffect(() => {
    const postCreateType = createTypeList.filter(
      (type) => type.name === createType
    );
    setSelection(postCreateType[0]);
  }, []);

  return (
    <section className="space-y-4 p-4">
      {selection && (
        <Badge color={selection.badgeColor} icon={selection.name} size="medium">
          {selection.uiName}
        </Badge>
      )}

      <h1 className="heading-1-medium">{title}</h1>
      <div className="flex gap-2">
        {post.tags &&
          post.tags.map((tag) => <Badge size="medium">{tag}</Badge>)}
      </div>
    </section>
  );
};

export default PostOverview;
