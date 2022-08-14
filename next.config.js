const withPreact = require('next-plugin-preact');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    // disableStaticImages: true,
    loader: 'akamai',
    path: '/',
  },
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
};

module.exports = withPreact(nextConfig);
