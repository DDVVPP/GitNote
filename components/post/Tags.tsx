"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const Tags = ({
  setValue,
  defaultValueTags = [],
}: {
  setValue: any;
  defaultValueTags?: string[];
}) => {
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>(defaultValueTags);

  useEffect(() => {
    setValue("tags", tags);
  }, [setValue, tags]);

  useEffect(() => {
    const onEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter" && document.activeElement?.id === "tags") {
        event.preventDefault();
        const trimmedTags = tagInput
          .trim()
          .split("s*")
          .filter((tag) => tag.length > 0);
        setTags((prevTags) => [...prevTags, ...trimmedTags]);
        setTagInput("");
      }
    };

    window.addEventListener("keydown", onEnter);
    return () => window.removeEventListener("keydown", onEnter);
  }, [tagInput, tags]);

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
    }
  }, [tagInput]);

  const handleDelete = (tag: string) => {
    const filteredTags = tags.filter((tagToRemove) => tag !== tagToRemove);
    setTags(filteredTags);
    setValue("tags", filteredTags);
  };

  return (
    <section className="space-y-6">
      <div className="text-white-300 flex flex-col">
        <label className="paragraph-3-medium mb-2">Tags</label>
        <div className="bg-black-700 relative flex w-full flex-wrap items-center gap-2 rounded-md border-none p-3 focus:ring-1">
          {tags.length > 0 &&
            tags.map((tag, idx) => (
              <span
                key={idx}
                className="paragraph-3-medium bg-black-600 flex items-center gap-2 text-nowrap rounded-md px-2"
              >
                {tag}
                <button type="button" onClick={() => handleDelete(tag)}>
                  <X
                    className="text-white-500 hover:text-white-300 hover:duration-300"
                    size={16}
                  />
                </button>
              </span>
            ))}
          <input
            className="paragraph-3-regular flex min-w-[70px] grow basis-[70px] border-none bg-transparent px-1 py-0 focus:ring-0"
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
