"use client";

const PostDetails = () => {
  return (
    <section className="flex flex-col">
      <h1>Mobile Navigation</h1>
      <p>Description</p>
      <div className="flex">
        <p>Date created</p>
        <p>stars</p>
        <p>views</p>
      </div>

      <div className="flex">
        <div>tag1</div>
        <div>tag2</div>
        <div>tag3</div>
      </div>

      <section>CodeBlock</section>
      <section>ContentBlock</section>

      <section>
        <div>resource 1</div>
        <div>resource 2</div>
        <div>resource 3</div>
      </section>
    </section>
  );
};

export default PostDetails;
