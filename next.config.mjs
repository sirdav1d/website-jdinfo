/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'jdinfoblog.jdinformatica.com.br'],
  },
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://jdinfoblog.jdinformatica.com.br' : '',
  basePath: '',
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Removido experimental.optimizeCss que estava causando o erro do 'critters'
}

export default nextConfig
