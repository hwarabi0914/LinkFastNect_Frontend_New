require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    outputFileTracingRoot: __dirname, // 👈 これを追加（Azure での `standalone` デプロイを安定化）
  }
};

module.exports = nextConfig;
