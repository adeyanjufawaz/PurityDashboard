// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dash',
        permanent: false, // or true if this is a permanent redirect
      },
    ]
  },
}

export default nextConfig