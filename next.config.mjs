import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js"

/** @type {import('next').NextConfig} */
const sharedConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "jdinfoblog.jdinformatica.com.br",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
  httpAgentOptions: {
    keepAlive: true,
  },
}

export default function nextConfig(phase) {
  return {
    ...sharedConfig,
    // Keep dev and production outputs isolated so `next dev` does not reuse
    // or collide with artifacts produced by `next build` / `next start`.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  }
}
