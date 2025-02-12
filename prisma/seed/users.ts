import bcryptjs from "bcryptjs";
import { PrismaClient, Role } from "@prisma/client";
import { platformArray, knowledgeLevels, tech } from "./utils";
import getBlurDataURL from "../../lib/utils/getBlurDataURL";

const { faker } = require("@faker-js/faker");

export async function createUsers(prisma: PrismaClient) {
  const emails: String[] = [];

  // ALL USERS
  for (let i = 0; i < 5; i++) {
    const imageSrc = faker.image.urlLoremFlickr({ category: "avatar" });
    const blurDataURL = await getBlurDataURL(imageSrc);
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
    const password = process.env.ALL_USERS_PASSWORD;
    const hashedPassword = bcryptjs.hashSync(password as string, 10);

    const user = await prisma.user.create({
      data: {
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        email: faker.internet.exampleEmail(),
        password: hashedPassword,
        image: imageSrc,
        blurImage: blurDataURL,
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
    emails.push(user.email as string);
  }

  // DEMO USER
  const password = process.env.DEMO_USER_PASSWORD;
  const hashedPassword = bcryptjs.hashSync(password as string, 10);
  const demoUserEmail = "demouser@email.com";
  const demoUserImage =
    "https://git-note.s3.us-west-1.amazonaws.com/flouffy-qEO5MpLyOks-unsplash2.jpg";
  const demoUserblurDataURL = await getBlurDataURL(demoUserImage);

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
      image: demoUserImage,
      blurImage: demoUserblurDataURL,
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
      knowledgeLevel: [
        "Proficient in React",
        "Intermediate in Python",
        "Learning Django",
        "Expert in GraphQL",
        "Familiar with Cybersecurity Fundamentals",
      ],
      // TODO: techStack: ["reactjs", "Python", "Django", "GraphQL"],
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
  emails.push(demoUser.email as string);

  return emails;
}
