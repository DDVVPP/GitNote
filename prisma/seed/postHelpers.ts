import { CreateType } from "@prisma/client";
import { techTags } from "./constants";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { faker } = require("@faker-js/faker");

export async function createPost(
  userEmail: string,
  createType: string | CreateType
) {
  const randomNumberOfArrayElements = Math.floor(Math.random() * 4) + 2;
  const learningsOrSteps = Array.from(
    { length: randomNumberOfArrayElements },
    () => faker.lorem.sentence()
  );

  const randomParagraphsCount = Math.floor(Math.random() * 5) + 1;
  const content = faker.lorem.paragraphs(randomParagraphsCount);

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
      user: {
        connect: {
          email: userEmail,
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
