const isDev = process.env.NODE_ENV !== "production"

module.exports = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: ""
    },
    basePath: isDev ? "": "/mike-can-code",
    assetPrefix: isDev ? "": "/mike-can-code/"
}