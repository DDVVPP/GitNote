const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { faker } = require("@faker-js/faker");
import bcryptjs from "bcryptjs";
import { CreateType, Role } from "@prisma/client";

async function main() {
  try {
    const emails = [];
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
    const tech = [
      "Vue.js",
      "Angular",
      "Javascript",
      "Typescript",
      "StyledComponents",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "Svelte",
      "Django",
      "Jest",
      "Mocha",
      "Chai",
      "Kubernetes",
      "Terraform",
      "GraphQL",
      "MongoDB",
    ];
    const platformArray = [
      "Twitter",
      "LinkedIn",
      "Instagram",
      "Github",
      "Dribble",
    ];
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

    // USERS
    for (let i = 0; i < 5; i++) {
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
    const password = "password123";
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const demoUserSocialMedia = platformArray.map((platform) => ({
      username: faker.internet.userName(),
      type: platform,
      link: faker.internet.url(),
    }));

    const demoUser = await prisma.user.create({
      data: {
        name: "Demo User",
        email: "demouser@email.com",
        password: hashedPassword,
        image: "https://example.com/image2.jpg",
        location: "San Francisco",
        onboardingStatus: 5,
        portfolio: "https://demouserportfolio.com",
        role: Role.USER,
        knowledgeLevel: [
          "Proficient in React",
          "Intermediate in Python",
          "Learning Django",
          "Expert in GraphQL",
          "Familiar with Cybersecurity Fundamentals",
        ],
        techStack: ["React", "Python", "Django", "GraphQL"],

        socialMedia: {
          create: demoUserSocialMedia,
        },
        availability: true,
      },
    });
    emails.push(demoUser.email);

    // POSTS
    for (let i = 0; i < 40; i++) {
      const createType = faker.helpers.enumValue(CreateType);

      const randomNumberOfArrayElements = Math.floor(Math.random() * 4) + 2;
      const learningsOrSteps = Array.from(
        { length: randomNumberOfArrayElements },
        () => faker.lorem.sentence()
      );

      const randomParagraphsCount = Math.floor(Math.random() * 5) + 1;
      const content = faker.lorem.paragraphs(randomParagraphsCount);

      const randomResourcesCount = Math.floor(Math.random() * 5);
      const resources = Array.from({ length: randomResourcesCount }, () => ({
        label: faker.lorem.words(1),
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
              email: faker.helpers.arrayElement(emails),
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
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
