import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "digitalassets.tesla.com" },
      { protocol: "https", hostname: "www.tesla.com" },
      { protocol: "https", hostname: "www.kia.com" },
      { protocol: "https", hostname: "www.hyundai.com" },
      { protocol: "https", hostname: "www.genesis.com" },
      { protocol: "https", hostname: "www.volvocars.com" },
      { protocol: "https", hostname: "www.lexus.co.kr" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
