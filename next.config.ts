import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Enable optimization for local images
    unoptimized: false,
    // Local images don't need remote patterns, but we keep the config structure
    domains: [],
    // Allow local images to be optimized
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
