import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 reactCompiler: true,
 images: {
    remotePatterns: [new URL('https://placehold.co/600x400.png')],
  },
};

export default nextConfig;
