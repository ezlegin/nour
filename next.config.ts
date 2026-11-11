import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The whole site is static: no server, no database, no admin.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
