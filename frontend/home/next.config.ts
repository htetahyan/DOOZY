import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const config: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
        protocol: 'https',
      },
      {
        hostname: 'upload.wikimedia.org',
        protocol: 'https',
      },
      {
        hostname: 'static.landbot.io',
        protocol: 'https',
      },
      {
        hostname: 'storage.googleapis.com',
        protocol: 'https',
      },
      {
        hostname: 'cdn.prod.website-files.com',
        protocol: 'https',
      },
    ],
  },
};

export default withNextIntl(config);
