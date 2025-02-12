import { CreateType, PrismaClient } from "@prisma/client";
import { codeSnippets, getRandomContent, techTags } from "./utils";
const { faker } = require("@faker-js/faker");

export async function createPost(
  email: string,
  createType: CreateType,
  prisma: PrismaClient
) {
  // between 2 to 5 elements
  const randomNumberOfArrayElements = Math.floor(Math.random() * 4) + 2;
  const learningsOrSteps = Array.from(
    { length: randomNumberOfArrayElements },
    () => faker.lorem.sentence()
  );

  // between 1 to 3 snippets
  const randomSnippetCount = Math.floor(Math.random() * 3) + 1;
  const content = getRandomContent();
  const codeEditorContent = faker.helpers
    .arrayElements(codeSnippets, randomSnippetCount)
    .join("\n\n");

  // between 0 to 5 resources
  const randomResourcesCount = Math.floor(Math.random() * 5);
  const resources = Array.from({ length: randomResourcesCount }, () => ({
    label: faker.lorem.words(3),
    link: faker.internet.url(),
  }));

  const titleAdjective = faker.hacker.adjective();
  const titleNoun = faker.hacker.noun();
  const capitalizedTitleAdjective = `${titleAdjective[0].toUpperCase()}${titleAdjective.slice(
    1
  )}`;
  const capitalizedTitleNoun = `${titleNoun[0].toUpperCase()}${titleNoun.slice(
    1
  )}`;

  await prisma.post.create({
    data: {
      title: `${capitalizedTitleAdjective} ${capitalizedTitleNoun}`,
      createType,
      description: faker.lorem.sentence(),
      content,
      ...(createType === "WORKFLOW" && { steps: learningsOrSteps }),
      ...(createType === "KNOWLEDGE" && { learnings: learningsOrSteps }),
      ...(createType === "COMPONENT" && { codeEditor: codeEditorContent }),
      user: {
        connect: {
          email,
        },
      },
      tags: faker.helpers.arrayElements(techTags, { min: 1, max: 10 }),
      ...(randomResourcesCount > 0 && {
        resources: {
          create: resources,
        },
      }),
    },
  });
}
