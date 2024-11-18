import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/driver-panel",
        destination: "/",
        permanent: true,
      },
      {
        source: "/primeira-entrega",
        destination: "/",
        permanent: true,
      },
      {
        source: "/integracao",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
