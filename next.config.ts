import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '',
      },
      {
        pathname: '/favicon/**',
        search: '',
      },
    ],
  },
  productionBrowserSourceMaps: false,
  compress: true,
}

export default nextConfig
