"use client";

import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClickHandler(ref, onClose);
  useEscapeHandler(onClose);

  const handleDelete = async (postId: number) => {
    setIsSubmitting(true);
    try {
      await deletePost(postId);
      router.push("/");
    } catch (error) {
      console.log("error in catch", error);
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
        <Button color="red" type="submit" onClick={() => handleDelete(postId)}>
          {isSubmitting ? <Loader2 className="animate-spin" /> : "Delete"}
        </Button>
        <Button color="gray" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </section>
  );
};

export default ConfirmationModal;
