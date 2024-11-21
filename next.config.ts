import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'amaranth-calm-hippopotamus-262.mypinata.cloud',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'coral-junior-magpie-341.mypinata.cloud',
        port: '',
        pathname: '/**',
      },

    ],
  }
};

export default nextConfig;
