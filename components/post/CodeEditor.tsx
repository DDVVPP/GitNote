"use client";

import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

import EyeIcon from "../shared/icons/EyeIcon";
import CodeIcon from "../shared/icons/CodeIcon";

const CodeEditor = ({ register, watch }: { register: any; watch: any }) => {
  const codeContent = watch("codeEditor");

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [numberOfEditorLines, setNumberOfEditorLines] = useState(0);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    setNumberOfEditorLines(codeContent.split("\n").length);

    if (!textAreaRef.current) return;
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  }, [codeContent]);

  useEffect(() => {
    Prism.highlightAll();
  }, [isPreview]);

  return (
    <section className="text-white-300 flex flex-col space-y-2">
      <div className="paragraph-3-medium flex rounded-md border-none">
        <button
          type="button"
          className={`${
            isPreview ? "bg-black-800" : "bg-black-700"
          } flex items-center gap-x-2 rounded p-3`}
          onClick={() => setIsPreview(false)}
        >
          <CodeIcon size={20} />
          Code
        </button>

        <button
          type="button"
          className={`${
            isPreview ? "bg-black-700" : "bg-black-800"
          } flex items-center gap-x-2 rounded p-3`}
          onClick={() => setIsPreview(true)}
        >
          <EyeIcon size={20} />
          Preview
        </button>
      </div>

      {isPreview ? (
        <pre className="language-javascript">
          <code>{codeContent}</code>
        </pre>
      ) : (
        <div className="bg-black-700 relative flex h-96 justify-start overflow-y-auto">
          <div className="editorLineNumbers absolute left-0 top-0 flex flex-col pt-2">
            {[...Array(numberOfEditorLines)].map((_, idx) => (
              <span>{idx + 1}</span>
            ))}
          </div>
          <textarea
            ref={textAreaRef}
            className="codeTextArea bg-black-700 no-scrollbar w-full rounded-md border-none pt-2 focus:ring-0"
            placeholder=""
            {...register("codeEditor")}
            id="code-text-area"
          />
        </div>
      )}
    </section>
  );
};

export default CodeEditor;
