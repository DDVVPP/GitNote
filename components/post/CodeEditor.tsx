"use client";

import Prism from "prismjs";
import "prismjs/themes/prism-solarizedlight.css";
import React, { useEffect, useState } from "react";

const CodeEditor = ({
  register,
  useFormHelpers,
}: {
  register: any;
  useFormHelpers: any;
}) => {
  const { trigger, control, watch, setValue } = useFormHelpers;
  const codeContent = watch("codeEditor");

  const [numberOfEditorLines, setNumberOfEditorLines] = useState(0);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
    setNumberOfEditorLines(codeContent.split("\n").length);
    const textAreaElement = document.getElementById("code-text-area");
    textAreaElement.style.height = textAreaElement?.scrollHeight + "px";
  }, [codeContent]);

  return (
    <section className="text-white-300 flex flex-col space-y-2">
      <div className="paragraph-3-medium flex rounded-md border-none">
        <button
          type="button"
          className={`${
            isPreview ? "bg-black-800" : "bg-black-700"
          } rounded p-3`}
          onClick={() => setIsPreview(false)}
        >
          Code
        </button>
        <button
          type="button"
          className={`${
            isPreview ? "bg-black-700" : "bg-black-800"
          } rounded p-3`}
          onClick={() => setIsPreview(true)}
        >
          Preview
        </button>
      </div>

      {isPreview ? (
        <pre className="language-javascript">
          <code>{codeContent}</code>
        </pre>
      ) : (
        <div className="bg-black-700 no-scrollbar relative flex justify-start overflow-auto">
          <span className="editorLineNumbers absolute left-0 top-0 flex flex-col pt-2">
            {[...Array(numberOfEditorLines)].map((_, idx) => (
              <span>{idx + 1}</span>
            ))}
          </span>
          <textarea
            className="codeTextArea bg-black-700 no-scrollbar w-full rounded-md border-none pt-2"
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
