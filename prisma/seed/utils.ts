import { faker } from "@faker-js/faker";

export const techTags = [
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

export const knowledgeLevels = [
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

// TODO: Fix icon list
export const tech = [
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

export const platformArray = [
  "twitter",
  "linkedIn",
  "instagram",
  "github",
  "dribble",
  "facebook",
];

export const contentTypes = ["sentence", "paragraph", "image", "codeBlock"];

export const codeSnippets = [
  `const sum = (a, b) => a + b;`,
  `function greet(name) { return "Hello, " + name; }`,
  `// Map method
  const items = [1, 2, 3].map(item => item * 2);`,
  `// ForEach method
  const fruits = ['apple', 'banana', 'orange'];\nfruits.forEach(fruit => console.log(fruit));`,
  `// Destructuring
  const user = { name: 'Alice', age: 25, city: 'Wonderland' };\nconst { name, city } = user;`,
  `if (age >= 18) { console.log('Adult'); } else { console.log('Minor'); }`,
  `// Spread
  const nums = [1, 2, 3];\nconst moreNums = [...nums, 4, 5];`,
  `//Filter method
  const names = ['Alice', 'Bob', 'Charlie'];\nconst startsWithA = names.filter(name => name.startsWith('A'));`,
  `import React from 'react';

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;`,
  `# Install project dependencies
npm install`,
  `# Create a new React app using Create React App
npx create-react-app my-app`,
  `# Initialize a Git repository
git init`,
  `<!-- Basic HTML Structure -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Webpage</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Welcome to my webpage.</p>
</body>
</html>`,
  `/* Center content with Flexbox */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`,
  `<!-- Basic HTML form -->
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <button type="submit">Submit</button>
</form>`,
  `// Fetch data from an API using fetch
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`,
  `// Fibonacci sequence generator
const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}`,
  `// Binary search in a sorted array
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1; // target not found
}`,
];

export const getRandomContent = () => {
  const content = [];
  // between 1 to 6
  const randomCount = Math.floor(Math.random() * 6) + 1;

  for (let i = 0; i < randomCount; i++) {
    const contentType = faker.helpers.arrayElement(contentTypes);

    switch (contentType) {
      case "sentence":
        content.push(`<p>${faker.lorem.sentence()}</p><br />`);
        break;
      case "paragraph":
        content.push(`<p>${faker.lorem.paragraph()}</p><br />`);
        break;
      case "image":
        content.push(
          `<img src="${faker.image.urlLoremFlickr({
            category: "cats",
          })}" alt="Random Image" /><br />`
        );
        break;
      case "codeBlock":
        content.push(
          `<pre><code class="language-javascript">${faker.helpers.arrayElement(
            codeSnippets
          )}</code></pre><br />`
        );
        break;

      default:
        break;
    }
  }

  return content.join("\n");
};
