import type { NextConfig } from "next";
import dotenv from "dotenv";
dotenv.config();

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
  env: {
    BOT_TOKEN: process.env.BOT_TOKEN,
    CHAT_ID: process.env.CHAT_ID,
  },
};

export default nextConfig;
