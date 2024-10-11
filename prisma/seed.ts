const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { faker } = require("@faker-js/faker");
import bcryptjs from "bcryptjs";
import { CreateType, Role } from "@prisma/client";

// POSTS - HELPER FUNCTION:
async function createPost(userEmail: string, createType: string | CreateType) {
  const techTags = [
    "JavaScript",
    "Python",
    "Java",
    "TypeScript",
    "Ruby",
    "C++",
    "React",
    "Angular",
    "Vue",
    "Django",
    "Node.js",
    "Express",
    "HTML",
    "CSS",
    "GraphQL",
    "REST",
    "APIs",
    "Docker",
    "Kubernetes",
    "Git",
    "Webpack",
    "Babel",
    "Jenkins",
    "Agile",
    "Scrum",
    "DevOps",
    "Continuous Integration",
    "Test-Driven Development",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "SQLite",
    "Redis",
    "Firebase",
    "AWS",
    "Azure",
    "Google Cloud",
    "Encryption",
    "OAuth",
    "Authentication",
    "Firewalls",
    "UI/UX",
    "Responsive Design",
    "Wireframes",
    "Prototyping",
    "User Testing",
    "AI",
    "Machine Learning",
    "AR/VR",
    "IoT",
  ];

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

async function main() {
  try {
    const emails: String[] = [];
    const knowledgeLevels = [
      "Expert in TailwindCSS",
      "Beginner in Three.js",
      "Advanced knowledge of MaterialUI and Shadcn",
      "Beginner Python user",
      "Learning AI",
      "Proficient in React",
      "Novice in GraphQL",
      "Beginner in C# and .NET",
      "Proficient in Git and Version Control",
      "Intermediate user of Docker",
      "Learning Cybersecurity Fundamentals",
    ];
    //TODO: Fix icon list
    const tech = [
      "javascript",
      "typescript",
      "styledcomponents",
      "tailwind",
      "nodejs",
      "vscode",
      "materialui",
      "reactjs",
      // "Express.js",
      // "Svelte",
      // "Django",
      // "Jest",
      // "Mocha",
      // "Chai",
      // "Kubernetes",
      // "Terraform",
      // "GraphQL",
      // "MongoDB",
    ];
    const platformArray = [
      "twitter",
      "linkedIn",
      "instagram",
      "github",
      "dribble",
      "facebook",
    ];

    // USERS
    for (let i = 0; i < 5; i++) {
      const randomGoalsCount = Math.floor(Math.random() * 6) + 1;
      const goals = Array.from({ length: randomGoalsCount }, () => ({
        name: faker.lorem.sentence(),
        isComplete: i % 2 === 0,
      }));
      const socialMedia = platformArray.map((platform) => ({
        username: faker.internet.userName(),
        type: platform,
        link: faker.internet.url(),
      }));
      const password = "password123";
      const hashedPassword = bcryptjs.hashSync(password, 10);

      const user = await prisma.user.create({
        data: {
          name: `${faker.person.firstName()} ${faker.person.lastName()}`,
          email: faker.internet.exampleEmail(),
          password: hashedPassword,
          image: faker.image.urlLoremFlickr({ category: "avatar" }),
          location: faker.location.city(),
          portfolio: faker.internet.url(),
          role: faker.helpers.enumValue(Role),
          goals: {
            create: goals,
          },
          knowledgeLevel: faker.helpers.arrayElements(knowledgeLevels),
          techStack: faker.helpers.arrayElements(tech),
          socialMedia: {
            create: socialMedia,
          },
          availability: i % 2 === 0,
        },
      });
      emails.push(user.email);
    }

    // DEMO USER
    const password = "demouser!2#";
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const demoUserEmail = "demouser@email.com";

    const demoUserSocialMedia = [
      {
        username: "duser",
        type: "twitter",
        link: faker.internet.url(),
      },
      {
        username: "demo.user",
        type: "instagram",
        link: faker.internet.url(),
      },
      {
        username: "d.dribbles",
        type: "dribble",
        link: faker.internet.url(),
      },
    ];

    const demoUser = await prisma.user.create({
      data: {
        name: "Demo User",
        email: demoUserEmail,
        password: hashedPassword,
        image: faker.image.urlLoremFlickr({ category: "avatar" }),
        location: "San Francisco",
        onboardingStatus: 5,
        portfolio: "https://demouserportfolio.com",
        role: Role.USER,
        goals: {
          create: [
            { name: "Build a personal portfolio website", isComplete: false },
            { name: "Contribute to open-source projects", isComplete: false },
            { name: "Learn more about cloud computing", isComplete: true },
            { name: "Understand the principles of DevOps", isComplete: false },
          ],
        },
        //TODO: techStack: ["reactjs", "Python", "Django", "GraphQL"],
        knowledgeLevel: [
          "Proficient in React",
          "Intermediate in Python",
          "Learning Django",
          "Expert in GraphQL",
          "Familiar with Cybersecurity Fundamentals",
        ],
        techStack: [
          "reactjs",
          "javascript",
          "node",
          "vscode",
          "materialui",
          "styledcomponents",
          "tailwind",
        ],
        socialMedia: {
          create: demoUserSocialMedia,
        },
        availability: true,
      },
    });
    emails.push(demoUser.email);

    // USER POSTS
    for (let i = 0; i < 20; i++) {
      const userEmail = faker.helpers.arrayElement(emails);
      const createType = faker.helpers.enumValue(CreateType);
      await createPost(userEmail, createType);
    }

    // DEMO USER POSTS
    const createTypes = Object.values(CreateType);
    createTypes.forEach(async (type) => {
      await createPost(demoUserEmail, type);
    });

    const additionalPostsCount = 40 - createTypes.length;
    for (let i = 0; i < additionalPostsCount; i++) {
      const createType = faker.helpers.arrayElement(createTypes);

      await createPost(demoUserEmail, createType);
    }
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
