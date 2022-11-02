/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sneakybirdbucket.s3.us-west-1.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
