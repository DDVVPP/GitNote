import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const RenderedCodeEditor = ({ codeEditor }: { codeEditor: string }) => {
  const highlightedCode = Prism.highlight(
    codeEditor,
    Prism.languages.javascript,
    "javascript"
  );

  return (
    <pre className="language-javascript !h-auto !overflow-y-auto !rounded-lg !border-white-500 !bg-black-800 !p-4 !text-[14px]">
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
};

export default RenderedCodeEditor;
