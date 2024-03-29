/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'ui-avatars.com'],
  },
  env: {
    PASSWORD_PROTECT: true
  }
}

module.exports = nextConfig
