/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com'], // External image domains
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Match SVG files
      use: ['@svgr/webpack'], // Use @svgr/webpack loader to import SVGs as React components
    });

    return config;
  },
};

module.exports = nextConfig;
