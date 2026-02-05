/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  output: 'standalone',
  // Generate unique build ID to prevent cache mismatches
  generateBuildId: async () => {
    return `build-${Date.now()}`
  },
  // Disable static optimization for pages with dynamic behavior
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Add headers to prevent aggressive caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
