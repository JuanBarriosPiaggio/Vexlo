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
  async redirects() {
    return [
      {
        source: '/industries/cleaning-companies',
        destination: '/ai-receptionist-cleaning-companies',
        permanent: true,
      },
      {
        source: '/industries/plumbers-heating-engineers',
        destination: '/ai-receptionist-plumbers',
        permanent: true,
      },
      {
        source: '/industries/dental-clinics',
        destination: '/ai-receptionist-dentists',
        permanent: true,
      },
      {
        source: '/industries/estate-agents',
        destination: '/ai-receptionist-estate-agents',
        permanent: true,
      },
      {
        source: '/industries/roofing-companies',
        destination: '/ai-receptionist-roofing-companies',
        permanent: true,
      },
      {
        source: '/industries/beauty-salons-barbers',
        destination: '/ai-receptionist-salons-barbers',
        permanent: true,
      },
      {
        source: '/industries/property-maintenance',
        destination: '/ai-receptionist-property-maintenance',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
