import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/driver-panel",
        destination: "https://spx-legacy.netlify.app/",
        permanent: true,
      },
      {
        source: "/primeira-entrega",
        destination: "https://own-fleet.shps-br-services.com/",
        permanent: true,
      },
      {
        source: "/integracao",
        destination: "https://spx-legacy.netlify.app/integracao",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
