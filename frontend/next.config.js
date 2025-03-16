require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  trailingSlash: true,
};

console.log("NEXT_PUBLIC_API_ENDPOINT:", process.env.NEXT_PUBLIC_API_ENDPOINT);

module.exports = nextConfig;
