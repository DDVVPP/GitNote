"use client";

import React from "react";

const CodeEditor = ({ register }: { register: any }) => {
  return (
    <section className="text-white-300 flex flex-col space-y-2">
      placeholder
      <div className="paragraph-3-medium flex  rounded-md border-none">
        <label className="bg-black-700 rounded p-3">Code</label>
        <label className="bg-black-800 rounded p-3">Preview</label>
      </div>
      <textarea
        className="paragraph-3-regular bg-black-700 rounded-md border-none p-3"
        placeholder=""
        {...register("codeEditor")}
      />
    </section>
  );
};

export default CodeEditor;
