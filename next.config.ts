import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'heroui.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react', '@tabler/icons-react'],
  },
  // Enable compression
  compress: true,
  // Enable static optimization
  poweredByHeader: false,
  // Optimize bundle size
  swcMinify: true,
  // Enable React strict mode for better performance
  reactStrictMode: true,
};

export default nextConfig;
