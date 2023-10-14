/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
    forceSwcTransforms: true,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
