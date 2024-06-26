"use client";

import { Post } from "@prisma/client";
import { createTypeList } from "@/lib/constants/createTypeList";
import Badge from "../shared/ui/Badge";

const PostOverview = ({ post }: { post: Post }) => {
  const { createType, title, tags } = post;

  const filteredPostType = createTypeList.filter(
    (type) => type.name === createType
  );

  return (
    <section className="space-y-4 p-4">
      <Badge
        color={filteredPostType[0].badgeColor}
        icon={filteredPostType[0].name}
        size="medium"
      >
        {filteredPostType[0].uiName}
      </Badge>

      <h1 className="heading-1-medium">{title}</h1>
      <div className="flex flex-wrap gap-2">
        {tags &&
          tags.map((tag) => (
            <Badge size="medium" key={tag}>
              {tag}
            </Badge>
          ))}
      </div>
    </section>
  );
};

export default PostOverview;
