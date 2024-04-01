"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const Tags = ({ useFormHelpers }: { useFormHelpers: any }) => {
  const { setValue } = useFormHelpers;

  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const onBackspace = (event: KeyboardEvent) => {
      if (
        event.key === "Backspace" &&
        tagInput === "" &&
        document.activeElement?.id === "tags"
      ) {
        setTags((prevTag) => prevTag.slice(0, prevTag.length - 1));
        if (tags.length > 0) {
          setTagInput(tags[tags.length - 1]);
          event.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", onBackspace);
    return () => window.removeEventListener("keydown", onBackspace);
  }, [tagInput, tags]);

  useEffect(() => {
    const isLastCharComma = tagInput[tagInput.length - 1] === ",";
    if (isLastCharComma) {
      const trimmedTags = tagInput
        .trim()
        .split(",")
        .filter((tag) => tag.length > 0);
      setTags((prevTags) => [...prevTags, ...trimmedTags]);
      setTagInput("");
      setValue("tags", tags);
    }
  }, [tagInput]);

  const handleDelete = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    tag: string
  ) => {
    event?.preventDefault();
    const filteredTags = tags.filter((tagToRemove) => tag !== tagToRemove);
    setTags(filteredTags);
    setValue("tags", filteredTags);
  };

  return (
    <section className="space-y-6">
      <div className="text-white-300 flex flex-col">
        <label className="paragraph-3-medium mb-2">Tags</label>
        <div className="bg-black-700 relative flex w-full items-center gap-2 rounded-md border-none px-2 focus:ring-1">
          {tags.length > 0 &&
            tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-black-600 paragraph-3-medium flex items-center gap-2 rounded-md px-2"
              >
                {tag}
                <button>
                  <X
                    className="text-white-500"
                    size={16}
                    onClick={(event) => handleDelete(event, tag)}
                  />
                </button>
              </span>
            ))}
          <input
            className="paragraph-3-regular flex w-full border-none bg-transparent px-1 py-3 focus:ring-0"
            type="text"
            id="tags"
            onChange={(event) => setTagInput(event.target.value)}
            placeholder="Add tags"
            value={tagInput}
          />
        </div>
      </div>
    </section>
  );
};

export default Tags;