/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["down-sg.img.susercontent.com"],
  },

  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
