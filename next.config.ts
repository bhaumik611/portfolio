import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  outputFileTracingRoot: '/Users/bhaumikpatel/Desktop/bhaumik-portfolio',
  images: {
    domains: [],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig