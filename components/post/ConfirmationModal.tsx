"use client";

import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

import { Button } from "../shared";
import { deletePost } from "@/lib/actions/post.actions";
import useEscapeHandler from "@/lib/utils/useEscapeHandler";
import useOutsideClickHandler from "@/lib/utils/useOutsideClickHandler";

const ConfirmationModal = ({
  onClose,
  postId,
}: {
  onClose: () => void;
  postId: number;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClickHandler(ref, onClose);
  useEscapeHandler(onClose);

  const handleDelete = async (postId: number) => {
    console.log("postId");
    setIsSubmitting(true);
    try {
      await deletePost(postId);
    } catch (error) {
      toast.error("Unable to delete post");
    } finally {
      setIsSubmitting(false);
      onClose();
    }
  };

  return (
    <section
      className="bg-black-800 flex flex-col space-y-8 rounded-md p-8"
      ref={ref}
    >
      <p className="text-white-300">
        Are you sure you'd like to delete this post?
      </p>
      <div className="flex justify-between gap-x-4">
        <Button color="blue" type="submit" onClick={() => handleDelete(postId)}>
          {isSubmitting ? <Loader2 className="animate-spin" /> : "Yes, Delete!"}
        </Button>
        <Button color="gray" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </section>
  );
};

export default ConfirmationModal;
