require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  trailingSlash: true,  // ✅ 既存の修正を保持
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "",  // ✅ 追加
  outputFileTracingRoot: __dirname, // ✅ `experimental` から移動
};

console.log("NEXT_PUBLIC_API_ENDPOINT:", process.env.NEXT_PUBLIC_API_ENDPOINT);
console.log("NEXT_PUBLIC_ASSET_PREFIX:", process.env.NEXT_PUBLIC_ASSET_PREFIX); // ✅ デバッグ用

module.exports = nextConfig;
