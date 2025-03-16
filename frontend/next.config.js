require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  trailingSlash: true, // 🔥 これを追加（Azure でのスタティックファイル読み込みを安定化）
  outputFileTracingRoot: __dirname, // ✅ `experimental` から移動
};

console.log("NEXT_PUBLIC_API_ENDPOINT:", process.env.NEXT_PUBLIC_API_ENDPOINT); // 追加

module.exports = nextConfig;
