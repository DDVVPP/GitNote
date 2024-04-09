"use client";

import { format as formatDate } from "date-fns";
import "prismjs/themes/prism-tomorrow.css";
import { Calendar, Star, Eye, ExternalLink, CheckSquare } from "lucide-react";

import { CreateType, Post, Resource } from "@prisma/client";
import Badge from "../shared/ui/Badge";
import { createTypeList } from "@/lib/constants/createTypeList";
import RenderedCodeEditor from "./RenderedCodeEditor";

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
          <RenderedCodeEditor codeEditor={codeEditor} />
          <hr className="dark:bg-black-700 h-px w-full border-0" />
        </>
      )}

      {createType === CreateType.KNOWLEDGE && learnings && (
        <section className="space-y-2">
          <h1 className="paragraph-1-bold text-white-100">Key Takeaways</h1>
          {learnings &&
            learnings.map((item) => {
              return (
                <div className="flex items-center space-x-2">
                  <CheckSquare className="text-green-400" size={16} />
                  <p className="paragraph-2-regular text-white-300">{item}</p>
                </div>
              );
            })}

          <hr className="dark:bg-black-700 h-px w-full border-0" />
        </section>
      )}

      {createType === CreateType.WORKFLOW && steps && (
        <section className="space-y-2">
          <h1 className="paragraph-1-bold text-white-100">Task Checklist</h1>
          {steps &&
            steps.map((step) => {
              return (
                <div key={step} className="my-1 flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="border-white-500 bg-black-800 checked:border-white-500 h-4.5 w-4.5 cursor-pointer appearance-none rounded-sm border-2 checked:bg-transparent"
                  />
                  <p className="text-white-300 paragraph-2-regular">{step}</p>
                </div>
              );
            })}
          <hr className="dark:bg-black-700 h-px w-full border-0" />
        </section>
      )}

      {content && (
        <>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="bg-black-800 text-white-300 rounded-lg p-4"
          />
          <hr className="dark:bg-black-700 h-px w-full border-0" />
        </>
      )}

      {resources && (
        <section>
          <p className="paragraph-2-bold text-white-100">Resources & Links</p>
          {resources.map((resource) => {
            return (
              <div
                key={resource && resource.id}
                className="text-white-300  mb-3 mt-3 flex items-center gap-x-2"
              >
                <CheckSquare size={16} className="flex text-green-400" />
                <a
                  target="_blank"
                  href={resource?.link ?? "/"}
                  className="paragraph-3-regular flex items-center gap-x-2 underline"
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
