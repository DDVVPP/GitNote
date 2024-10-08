const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { faker } = require("@faker-js/faker");
import bcryptjs from "bcryptjs";
import { Role } from "@prisma/client";

async function main() {
  try {
    const userIds = [];
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

    // USERS
    for (let i = 0; i < 10; i++) {
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
      userIds.push(user.id);
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
    userIds.push(demoUser.id);
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
