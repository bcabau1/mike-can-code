const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const isDev = process.env.NODE_ENV !== "production"

module.exports = withPlugins([
    [withImages, {
        assetPrefix: isDev ? "": "/mike-can-code/"
    }],
    {
    reactStrictMode: true,
    basePath: isDev ? "": "/mike-can-code",
    }
])