const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
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
      { source: '/web-design-batticaloa', destination: '/website-development-batticaloa', permanent: true },
      { source: '/web-design-kattankudy', destination: '/website-development-kattankudy', permanent: true },
      { source: '/web-design-kalmunai', destination: '/website-development-kalmunai', permanent: true },
      { source: '/web-design-ampara', destination: '/website-development-ampara', permanent: true },
      { source: '/web-design-trincomalee', destination: '/website-development-trincomalee', permanent: true },
      { source: '/seo-services-batticaloa', destination: '/seo-batticaloa', permanent: true },
      { source: '/seo-services-kattankudy', destination: '/seo-kattankudy', permanent: true },
      { source: '/seo-services-kalmunai', destination: '/seo-kalmunai', permanent: true },
      { source: '/seo-services-ampara', destination: '/seo-ampara', permanent: true },
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
