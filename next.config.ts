import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.113"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.holovin.com",
      },
      {
        protocol: "https",
        hostname: "holovin.com",
      },
      {
        protocol: "https",
        hostname: "scontent.fflr2-1.fna.fbcdn.net",
      },
    ],
  },
}

export default nextConfig;
