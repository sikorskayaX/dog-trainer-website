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
    BOT_TOKEN: process.env.NEXT_PUBLIC_BOT_TOKEN,
    CHAT_ID: process.env.NEXT_PUBLIC_CHAT_ID,
  },
};

export default nextConfig;
