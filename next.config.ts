import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "blog.soundforlife.in",
      },
    ],
  },
  allowedDevOrigins:['diseased-nonfallacious-junie.ngrok-free.dev']
};

export default nextConfig;
