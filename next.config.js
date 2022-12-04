/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate")

module.exports = nextTranslate({
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.node = {
        fs: false,
        path: false
      }
    }
    return config
  },
  trailingSlash: true,
  staticPageGenerationTimeout: 1000000,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    )
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })
    return config
  },
  images: {
    loader: "imgix",
    path: "",
    domains: ["assets.abraacdn.com", "s101.abraacdn.com"]
  },
  optimizeFonts: false,
  resolve: {
    fallback: {
      fs: false
    }
  },
  experimental: {
    outputStandalone: true,
    concurrentFeatures: true
  }
})
