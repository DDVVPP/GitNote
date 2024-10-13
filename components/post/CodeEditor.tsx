"use client";

import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

import EyeIcon from "../shared/icons/EyeIcon";
import CodeIcon from "../shared/icons/CodeIcon";

const CodeEditor = ({
  onChange,
  codeContent,
  errors,
}: {
  onChange: (value: string) => void;
  codeContent: string;
  errors: string;
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [numberOfEditorLines, setNumberOfEditorLines] = useState(0);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
    setNumberOfEditorLines(codeContent.split("\n").length);

    if (!textAreaRef.current) return;
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  }, [codeContent, isPreview]);

  return (
    <section className="flex flex-col space-y-2 text-white-300">
      <div className="paragraph-3-medium flex items-center rounded-md border-none">
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
        <p className="ml-2 font-light">(required)</p>
      </div>

      {isPreview ? (
        <pre className="language-javascript !h-96 !overflow-y-auto !rounded !bg-[#21212c] !text-[14px]">
          <code className="!text-wrap">{codeContent}</code>
        </pre>
      ) : (
        <div className="relative flex h-96 overflow-y-auto bg-black-700">
          <div className="editorLineNumbers absolute left-0 top-0 flex flex-col pt-2">
            {[...Array(numberOfEditorLines)].map((_, idx) => (
              <span key={idx}>{idx + 1}</span>
            ))}
          </div>
          <textarea
            id="code-text-area"
            spellCheck={false}
            ref={textAreaRef}
            className="codeTextArea no-scrollbar w-full rounded-md border-none bg-black-700 pt-2 focus:ring-0"
            onChange={(e) => onChange(e.target.value)}
            value={codeContent}
          />
        </div>
      )}

      {errors && <span className="error-message">{errors}</span>}
    </section>
  );
};

export default CodeEditor;
