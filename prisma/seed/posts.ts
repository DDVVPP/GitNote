import { CreateType } from "@prisma/client";
import { createPost } from "./postHelpers";
const { faker } = require("@faker-js/faker");

export async function createPosts(emails: String[]) {
  // USER POSTS
  for (let i = 0; i < 20; i++) {
    const userEmail = faker.helpers.arrayElement(emails);
    const createType = faker.helpers.enumValue(CreateType);
    await createPost(userEmail, createType);
  }

  // DEMO USER POSTS
  const createTypes = Object.values(CreateType);
  const demoUserEmail = "demouser@email.com";

  // Create one post for each type
  createTypes.forEach(async (type) => {
    await createPost(demoUserEmail, type);
  });

  // Create more posts with random number of types
  const additionalPostsCount = 40 - createTypes.length;
  for (let i = 0; i < additionalPostsCount; i++) {
    const createType = faker.helpers.arrayElement(createTypes);

    await createPost(demoUserEmail, createType);
  }
}
