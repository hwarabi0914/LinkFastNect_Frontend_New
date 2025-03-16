require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  trailingSlash: true, // ✅ 既存の設定維持
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "", // ✅ 既存の設定維持
  basePath: "", // 🔥 追加 (空にすることでデプロイ時のパス問題を解決)
  outputFileTracingRoot: __dirname, // ✅ 既存の設定維持
};

console.log("NEXT_PUBLIC_API_ENDPOINT:", process.env.NEXT_PUBLIC_API_ENDPOINT);
console.log("NEXT_PUBLIC_ASSET_PREFIX:", process.env.NEXT_PUBLIC_ASSET_PREFIX);
console.log("BASE_PATH:", nextConfig.basePath); // ✅ デバッグ用

module.exports = nextConfig;
