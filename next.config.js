const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = () => withSass(withCSS({
  basePath: '/next_app',
  cssModules: false,
  async redirects() {
    return [
      // {
      //   source: '/:*',
      //   destination: '/',
      //   permanent: true,
      // },
    ]
  },
  // experimental: {
  //   amp: {
  //     skipValidation: true
  //   }
  // }
  sassLoaderOptions: {
    sassOptions: {
      includePaths: [
        path.resolve(__dirname, './styles'),
        path.resolve(__dirname, './components/*/*.sass')
      ]
    }
  },
  webpack (config, options) {
    config.watchOptions.poll = true
    // config.resolve.alias.styles = path.resolve(__dirname, './styles')
    // config.resolve.alias.components = path.resolve(__dirname, './components')
    // config.resolve.alias.utils = path.resolve(__dirname, './utils')
    // console.log(config.module.rules)
    return config
  }
}))

