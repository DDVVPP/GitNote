"use client";

import { format as formatDate } from "date-fns";
import "prismjs/themes/prism-tomorrow.css";
import {
  Calendar,
  Star,
  Eye,
  ExternalLink,
  CheckSquare,
  SquarePen,
  Trash,
} from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { createPortal } from "react-dom";

import { CreateType, Post, Resource } from "@prisma/client";
import Badge from "../shared/ui/Badge";
import { createTypeList } from "@/lib/constants/createTypeList";
import RenderedCodeEditor from "./RenderedCodeEditor";
import VerticalEllipsisIcon from "../shared/icons/VerticalEllipsisIcon";
import { useRef, useState } from "react";
import useEscapeHandler from "@/lib/utils/useEscapeHandler";
import useOutsideClickHandler from "@/lib/utils/useOutsideClickHandler";
import ConfirmationModal from "./ConfirmationModal";

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
  const ref = useRef(null);
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  useOutsideClickHandler(ref, onClose);
  useEscapeHandler(onClose);

  return (
    <section className="flex flex-col space-y-6">
      <section className="flex flex-col space-y-5">
        <header className="max-xs-b:flex-col max-xs-b:items-start flex items-center justify-between gap-y-1">
          <h1 className="display-2-bold text-white-100 w-fit">{title}</h1>

          <div className="max-xs-b:justify-between max-xs-b:w-full flex h-fit justify-end gap-x-2">
            <Badge
              color={filteredPostType[0].badgeColor}
              icon={filteredPostType[0].name}
              size="medium"
            >
              {filteredPostType[0].uiName}
            </Badge>

            <div ref={ref}>
              <button
                type="button"
                id="triple-dot-button"
                className="hover:bg-black-600 rounded-md align-middle hover:duration-300"
                onClick={() => setIsOpen((prevState) => !prevState)}
              >
                <VerticalEllipsisIcon size={30} />
              </button>

              {isOpen && (
                <menu className="paragraph-3-medium bg-black-700 text-white-300 absolute right-7 z-10 mt-2 flex w-fit flex-col justify-end text-nowrap rounded-md py-2 lg:right-80">
                  <Link
                    href={`/posts/${params.postId}/update-post`}
                    className="hover:bg-black-600 flex gap-x-2 px-9 py-2 hover:py-2 hover:duration-300"
                  >
                    <SquarePen size={18} className="" />
                    <p className="text-white-100">Update Post</p>
                  </Link>

                  <div
                    className="hover:bg-black-600 flex cursor-pointer gap-x-2 px-9 py-2 hover:py-2 hover:duration-300"
                    onClick={() => setModalIsOpen((prevState) => !prevState)}
                  >
                    <Trash size={18} />
                    <p className="text-white-100">Delete Post</p>
                  </div>
                </menu>
              )}
            </div>
          </div>
        </header>

        <p className="paragraph-3-regular text-white-300">{description}</p>

        <section className="flex gap-x-4">
          <div className="flex items-center gap-x-1">
            <Calendar size={16} className="text-white-500 shrink-0" />
            <p className="paragraph-3-regular text-white-300">
              {createdAtDate}
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            <Star size={16} className="text-white-500" />
            <p className="paragraph-3-regular text-white-300">stars</p>
          </div>
          <div className="flex items-center gap-x-1">
            <Eye size={16} className="text-white-500" />
            <p className="paragraph-3-regular text-white-300">views</p>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          {tags &&
            tags.map((tag) => (
              <Badge key={tag} size="medium">
                {tag}
              </Badge>
            ))}
        </div>
      </section>

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
                <div className="flex items-start space-x-2" key={item}>
                  <CheckSquare
                    className="text-green-lighter m-1 shrink-0"
                    size={16}
                  />
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
                    className="h-4.5 w-4.5 border-white-500 bg-black-800 checked:border-white-500 cursor-pointer appearance-none rounded-sm border-2 checked:bg-transparent"
                  />
                  <p className="paragraph-2-regular text-white-300">{step}</p>
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

      {resources && resources.length > 0 && (
        <section>
          <p className="paragraph-2-bold text-white-100">Resources & Links</p>
          {resources.map((resource) => {
            return (
              <div
                key={resource?.id}
                className="text-white-300 hover:text-primary-500 my-3  flex items-center gap-x-2 hover:duration-300"
              >
                <CheckSquare
                  size={16}
                  className="text-green-lighter flex shrink-0"
                />
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

      {modalIsOpen &&
        createPortal(
          <div
            aria-labelledby="confirmation-modal"
            role="dialog"
            aria-modal="true"
            className="bg-opacity/75 fixed inset-0 z-50 flex items-center justify-center backdrop-blur transition-opacity"
          >
            <ConfirmationModal
              onClose={() => setModalIsOpen(false)}
              postId={post.id}
            />
          </div>,
          document.body
        )}
    </section>
  );
};

export default PostDetails;
