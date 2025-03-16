require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT, // ✅ 明示的に設定
  },
};

console.log("✅ NEXT_PUBLIC_API_ENDPOINT:", process.env.NEXT_PUBLIC_API_ENDPOINT);

module.exports = nextConfig;
