const pkg = require('./package')
require('dotenv').config()

const merge = require('webpack-merge')
const moduleConfig = require('../marketplace_builder/nuxt/nuxt.config.js')

module.exports = merge({ 
  mode: 'universal',

  /*
  ** Revised directories
  */
  dir: {
    middleware: '../../nuxt/middleware'
  },
  
  srcDir: '../marketplace_builder/nuxt/',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [],
    link: []
  },

  env: {},

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Router property options
  */
  router: {

    /*
    ** Middleware to run on every route
    */
    middleware: ['pOS-globals'] // ,'pOS-pages' 'pOS-authenticity_token',
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'nuxt-vuex-router-sync',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: (process.env.POS_ENV !== 'production') ? process.env.STAGING_URL + process.env.API_PREFIX : process.env.PROD_URL + process.env.API_PREFIX,
    proxy: (process.env.NODE_ENV !== 'production') ? true : false
  },
  proxy: [
    process.env.STAGING_URL + process.env.API_PREFIX
  ],

  /*
  ** Generated files directory
  */
  generate: {
    dir: '../marketplace_builder/assets/_nuxt'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    publicPath: (process.env.POS_ENV !== 'production') ? 'https://uploads' + process.env.STAGING_URL + '/instances/' + process.env.POS_INSTANCE + '/assets/_nuxt/' : 'https://uploads' + process.env.PROD_URL + '/instances/' + process.env.POS_INSTANCE + '/assets/_nuxt/',
    extend(config, ctx) {
      /*
      ** Add support for pOS block
      */
      config.module.rules.push({
        resourceQuery: /blockType=pos/,
        loader: require.resolve("./pOS/pos-loader.js")
      })

    },
    /*
    ** Change build directory of files
    */
    filenames: {
    app: ({ isDev }) => isDev ? '[path][name].js' : 'scripts/[chunkhash].js',
    chunk: ({ isDev }) => isDev ? '[path][name].js' : 'scripts/[chunkhash].js',
    css: ({ isDev }) => isDev ? '[name].css' : 'styles/[contenthash].css',
    img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'images/[hash:7].[ext]',
    font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
    video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]'
    }
  },
  hooks: {

    /*
    ** Add generate script to compile for Platform OS
    */
    'generate:page': (page) => {
      const pOSLoader = require('./pOS/pos-generate.js') 
      pOSLoader(page)
    }

  },

  /*
    ** Turn on Dev tools
  */
  vue: {
    config: {
     devtools: false
    }
  }
}, moduleConfig )