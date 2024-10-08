/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.googleusercontent.com/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "git-note.s3.us-west-1.amazonaws.com/**",
        port: "",
      },
      // For seed file
      {
        protocol: "https",
        hostname: "loremflickr.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
