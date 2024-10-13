import React, { Suspense } from "react";

import CreatePost from "@/components/post/CreatePost";

const CreatePostWrapper = async () => {
  return <Suspense><CreatePost /></Suspense>;
};

export default CreatePostWrapper;
