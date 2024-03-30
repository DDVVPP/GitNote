const Content = ({ register }: { register: any }) => {
  return (
    <section className="flex flex-col">
      <h3 className="paragraph-3-medium text-white-500 mb-6">CONTENT</h3>
      <textarea
        className="paragraph-3-regular text-white-300 bg-black-700 rounded-md border-none p-3"
        placeholder=""
        {...register("content")}
      />
    </section>
  );
};

export default Content;
