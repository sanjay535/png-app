/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "http://localhost:3000",
      "localhost",
      "pngsoftware.in",
      "http://pngsoftware.in",
      "https://pngsoftware.in",
      "http://15.206.174.17",
      "15.206.174.17",
    ],
  },
};

module.exports = nextConfig;
