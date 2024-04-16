## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

GitNote - Your all-in-one solution for developers, designed to be their second brain, a comprehensive learning tool, and an efficient progress tracker. Seamlessly capture and organize knowledge, set and track learning goals, and monitor study habits with ease. Developed as part of the JSM Masterclass, GitNote empowers developers to enhance their productivity and knowledge management skills effortlessly.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 27k+ members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Prism.js
- TinyMCE
- PostgreSQL
- Prisma.io
- Supabase
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Authentication & Onboarding**: Seamlessly log in or sign up and personalize your experience with smooth onboarding.

👉 **Profile Management**: Easily update profile details and link social media accounts for enhanced connectivity.

👉 **Creating Learning Posts**: Document knowledge, components, or workflows effortlessly, enriched with resources and links.

👉 **Related Posts**: Connect related content seamlessly for improved information accessibility.

👉 **Tagging for Context**: Enhance post context and retrieval efficiency with intuitive tagging.

👉 **Contribution Grid**: Track progress visually as the grid dynamically updates with each post similar to Github.

👉 **Goals & Experience Tracking**: Monitor and reflect on learning goals conveniently from your profile.

👉 **Search & Filter**: Retrieve past notes and tutorials swiftly with global search and filtering.

👉 **Post Collection**: Explore content easily with pagination features, witnessing your learning progression firsthand.

<!-- 👉 **Responsive**: Ensures seamless functionality and aesthetics across all devices and many more, including code architecture and reusability -->

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/[username]/GitNote.git
cd GitNote
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

For a few specific applications, we require environment variables. Create .env.local file in the root of your project.

```env
DB_URL=""
DIRECT_URL=""

GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

NEXTAUTH_SECRET=""

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

AWS_S3_ACCESS_KEY=""
AWS_S3_SECRET_ACCESS_KEY=""
AWS_REGION=""

NEXT_PUBLIC_GOOGLE_PLACES_KEY=""
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

#
