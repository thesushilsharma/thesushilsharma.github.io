import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
 reactCompiler: true,
 images: {
   remotePatterns: [
     {
       protocol: 'https',
       hostname: 'images.unsplash.com',
       pathname: '/**',
     },
     {
       protocol: 'https',
       hostname: 'placehold.co',
       pathname: '/**',
     },
   ],
 },
};

export default nextConfig;
