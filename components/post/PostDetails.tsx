"use client";

import { format as formatDate } from "date-fns";
import { CreateType, Post, Resource } from "@prisma/client";
import Badge from "../shared/ui/Badge";
import { createTypeList } from "@/lib/constants/createTypeList";
import { Calendar, Star, Eye, ExternalLink, CheckSquare } from "lucide-react";

const PostDetails = ({
  post,
}: {
  post: Post & { resources?: Partial<Resource[]> };
}) => {
  const {
    title,
    description,
    createdAt,
    tags,
    codeEditor,
    content,
    learnings,
    steps,
    createType,
    resources,
  } = post;
  const createdAtDate =
    createdAt && formatDate(new Date(createdAt), "MMMM dd, yyyy");
  const filteredPostType = createTypeList.filter(
    (type) => type.name === createType
  );

  return (
    <section className="flex flex-col space-y-6">
      <section className="flex items-center justify-between">
        <h1 className="display-2-bold text-white-100">{title}</h1>
        <div className="flex gap-x-2">
          <Badge
            color={filteredPostType[0].badgeColor}
            icon={filteredPostType[0].name}
            size="medium"
          >
            {filteredPostType[0].uiName}
          </Badge>
        </div>
      </section>

      <p className="paragraph-3-regular text-white-300">{description}</p>

      <div className="flex gap-x-4">
        <div className="flex items-center gap-x-1">
          <Calendar size={16} className="text-white-500" />
          <p className="paragraph-3-regular text-white-300">{createdAtDate}</p>
        </div>
        <div className="flex items-center gap-x-1">
          <Star size={16} className="text-white-500" />
          <p className="paragraph-3-regular text-white-300">stars</p>
        </div>
        <div className="flex items-center gap-x-1">
          <Eye size={16} className="text-white-500" />
          <p className="paragraph-3-regular text-white-300">views</p>
        </div>
      </div>

      <div className="flex gap-x-3">
        {tags && tags.map((tag) => <Badge size="medium">{tag}</Badge>)}
      </div>

      <hr className="dark:bg-black-700 h-px w-full border-0" />

      {createType === CreateType.COMPONENT && codeEditor && (
        <>
          <section>{codeEditor}</section>
          <hr className="dark:bg-black-700 h-px w-full border-0" />
        </>
      )}

      {createType === CreateType.KNOWLEDGE && learnings && (
        <>
          <section>{learnings}</section>
          <hr className="dark:bg-black-700 h-px w-full border-0" />
        </>
      )}

      {createType === CreateType.WORKFLOW && steps && (
        <>
          <section>{steps}</section>
          <hr className="dark:bg-black-700 h-px w-full border-0" />
        </>
      )}

      {content && (
        <>
          <section>{content}</section>
          <hr className="dark:bg-black-700 h-px w-full border-0" />
        </>
      )}

      {resources && (
        <section>
          <p className="paragraph-2-bold text-white-100">Resources & Links</p>
          {resources.map((resource) => {
            return (
              <div className="text-white-300 paragraph-3-regular mb-3 mt-3 flex items-center gap-x-2">
                <CheckSquare size={16} className="flex text-green-400" />
                <a
                  target="_blank"
                  href={resource?.link ?? "/"}
                  className="flex items-center gap-x-2 underline"
                >
                  {resource?.label ?? "no label"}
                  <ExternalLink size={16} />
                </a>
              </div>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default PostDetails;
