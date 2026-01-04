/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  experimental: {
    webpackBuildWorker: false,
  },
}

module.exports = nextConfig