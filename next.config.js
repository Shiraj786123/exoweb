const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: true,
  },
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        source: '/full-stack-web-development',
        destination: '/website-development',
        permanent: true,
      },
      {
        source: '/ecommerce-development-optimization',
        destination: '/ecommerce-development',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif|ico|bmp|svg)$/i,
      type: 'asset/resource',
    });

    return config;
  },
};

module.exports = nextConfig;
