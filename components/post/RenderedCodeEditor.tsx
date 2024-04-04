import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const RenderedCodeEditor = ({ codeEditor }: { codeEditor: string }) => {
  const highlightedCode = Prism.highlight(
    codeEditor,
    Prism.languages.javascript,
    "javascript"
  );

  return (
    <pre className="language-javascript !bg-black-800 !border-white-500 !h-auto !overflow-y-auto !rounded-lg !p-4 !text-[14px]">
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
};

export default RenderedCodeEditor;
