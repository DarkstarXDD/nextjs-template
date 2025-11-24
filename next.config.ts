import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  logging: {
    fetches: { fullUrl: true },
  },

  // typedRoutes: true,
  // cacheComponents: true,
}

export default nextConfig
