const { beforeMiddleware, onListening } = require('./server/configure')

process.env.VUE_APP_VERSION = process.env.npm_package_version

module.exports = {
    transpileDependencies: ['vuetify'],
    devServer: {
        https: !process.env.USE_HTTP,
        port: 5000,
        before: beforeMiddleware,
        onListening: onListening,
    },
    //devServer: {     port: 3000,     proxy: "https://api.avax.network:443"   },
    // publicPath: '',
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all',
                minSize: 600 * 1000,
                maxSize: 2000 * 1000,
            },
        },
    },
    pwa: {
        name: 'AVAX Wallet',
        manifestOptions: {
            start_url: '/',
        },
        iconPaths: {
            favicon16: 'img/icons/favicon-16x16.png',
            favicon32: 'img/icons/favicon-32x32.png',
            appleTouchIcon: 'img/icons/apple-touch-icon.png',
            maskIcon: 'img/icons/favicon-32x32.png',
            msTileImage: 'img/icons/mstile-150x150.png',
        },
    },
}
