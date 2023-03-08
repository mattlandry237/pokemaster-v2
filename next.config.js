/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
