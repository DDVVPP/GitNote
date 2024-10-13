# <a name="introduction">GitNote</a>

GitNote is your all-in-one solution for developers, designed to be their second brain, a comprehensive learning tool, and an efficient progress tracker. Seamlessly capture and organize knowledge, set and track learning goals, and monitor study habits with ease. Developed as part of the JSM Masterclass, GitNote empowers developers to enhance their productivity and knowledge management skills effortlessly.

&nbsp;

## <a name="features">☀️ Key Features</a>

- **Authentication** - Next auth for secure sign-up, sign-in, and logout functionalities.
- **Onboarding** – Provides an introduction and walkthrough for new users.
- **Profile Management** - Easily update profile details and link social media accounts for enhanced connectivity.
- **Creating Learning Posts** - Document knowledge, components, or workflows effortlessly, enriched with resources and links.
- **Related Posts**- Connect related content seamlessly for improved information accessibility.
- **Tagging for Context** - Enhance post context and retrieval efficiency with intuitive tagging.
- **Contribution Grid** - Track progress visually as the grid dynamically updates with each post similar to Github.
- **Goals & Experience Tracking** - Monitor and reflect on learning goals conveniently from your profile.
- **Search & Filter** - Retrieve past notes and tutorials swiftly with global search and filtering.
- **Post Collection** - Explore content easily with pagination features, witnessing your learning progression firsthand.
<!-- 👉 **Responsive**: Ensures seamless functionality and aesthetics across all devices and many more, including code architecture and reusability -->

&nbsp;

## <a name="tech-stack">⚙️ Tech Stack</a>

- **TypeScript** - Superset of JavaScript that adds static typing for improved code quality and maintainability.
- **Next.js** - Framework for building server-side-rendered React applications.
- **PostgreSQL** - Relational database management system.
- **Prisma.io** - ORM for interacting with the database.
- **Supabase** - Backend-as-a-Service for database management.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **TinyMCE** - WYSIWYG HTML editor.
- **Prism.js** - Lightweight syntax highlighter for code snippets.
- **React DatePicker** - Flexible date and time picker component for React applications.

&nbsp;

## <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**\
Ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Steps**
1. Clone the Repo:
```bash
git clone https://github.com/[username]/GitNote.git
cd GitNote
```

2. Install Dependencies
```bash
npm install
```

3. Set Up Environment Variables: Create a `.env` file in the project root:
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

4. Run the Project
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

&nbsp;
## <a name="todo">✅ To Do List</a>

**Home Page**

- [ ] Integrate contributions grid (react-calendar-heatmap)

**Profile Page**

- [ ] Integrate contributions grid (react-calendar-heatmap)

**Edit Profile Page**

- [ ] 'Enter' keyboard event should not trigger form submit
- [x] Add a 'Cancel' button
- [ ] Disable 'Update Profile' button if no updates have been made to the inputs

**Left Sidebar**

- [ ] Display posts in the 'Posts' section

**Right Sidebar**

- [ ] Post Details: Determine what indicates a related post, and show related posts
- [ ] Profile Page: If there are no social media links - move button under section and update text to 'Add social links'
- [ ] Update social links modal: If there are no updates made to the modal inputs, disable the 'Update Links' button
- [ ] Create Post: Either remove 'Tags' section, or disable them

**Post Details Page**

- [x] Remove 'Resources & Links' section if there is no content

**Create / Update Post Pages**

- [x] Fix padding in Tag input when there are two words
- [x] Visually indicate which fields are required and/or optional
- [ ] Figure out focus ring order
- [x] 'Add checkmark' button should be disabled if the input hasn't yet been filled
- [x] Add a 'Cancel' button
- [x] Disable 'Update Post' button if no updates have been made to the inputs

**Miscellaneous Updates**

- [ ] Add mobile responsiveness
- [x] Add hover states to all clickable items
- [x] Add loading.tsx files for each route
- [ ] Add Skeleton loaders
- [x] Create a seed file
- [ ] Add a Demo User
- [x] Deploy site
