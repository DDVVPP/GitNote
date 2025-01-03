import { createPosts } from "./posts";
import { createUsers } from "./users";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  try {
    const emails = await createUsers(prisma);
    await createPosts(emails, prisma);
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
