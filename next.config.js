const { withContentCollections } = require("@content-collections/next")

/** @type {import('next').NextConfig} */
const nextConfig = {
  // your next.js config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io"
      }
    ]
  }
}

// withContentCollections must be the outermost plugin
module.exports = withContentCollections(nextConfig)
