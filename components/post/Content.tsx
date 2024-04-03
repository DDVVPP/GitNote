import { Editor } from "@tinymce/tinymce-react";

const Content = ({ onChange }: { onChange: any }) => {
  return (
    <section className="flex flex-col">
      <h3 className="paragraph-3-medium text-white-500 mb-6">CONTENT</h3>
      <Editor
        apiKey="91tfu23es3ds7f3oxa0tfujm9otbwas6fvtv714eitd41uln"
        init={{
          menubar: false,
          content_style: `body { background-color: #1D2032; color: #ADB3CC; border: none; } a { color: #11b7ff }`,
          plugins: "lists link image",
          toolbar:
            "bold | italic | underline | blockquote | link | image | checklist | bullist | numlist | align | indent | outdent",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
        }}
        onEditorChange={(content) => onChange(content)}
      />
    </section>
  );
};

export default Content;
