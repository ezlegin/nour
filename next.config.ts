import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The whole site is static: no server, no database, no admin.
  output: "export",
  trailingSlash: true,
  // pin the project root (a stray lockfile higher up confuses detection)
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
