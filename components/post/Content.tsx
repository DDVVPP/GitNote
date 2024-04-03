import { Editor } from "@tinymce/tinymce-react";

const Content = ({ onChange }: { onChange: any }) => {
  return (
    <section className="flex flex-col">
      <h3 className="paragraph-3-medium text-white-500 mb-6">CONTENT</h3>
      <Editor
        apiKey="91tfu23es3ds7f3oxa0tfujm9otbwas6fvtv714eitd41uln"
        init={{
          menubar: false,
          content_style: `body { background-color: blue}`,
          toolbar:
            "blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
        }}
        initialValue="Welcome to TinyMCE!"
        onEditorChange={(content) => onChange(content)}
      />
    </section>
  );
};

export default Content;
