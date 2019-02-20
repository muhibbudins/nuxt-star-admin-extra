const pkg = require('./package')
const changeLoaderOptions = loaders => {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === 'sass-loader') {
        Object.assign(loader.options, {
          includePaths: ['./assets']
        })
      }
    }
  }
}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'mdi/css/materialdesignicons.min.css',
    'flag-icon-css/css/flag-icon.min.css',
    'font-awesome/css/font-awesome.min.css',
    {
      src: '~/assets/scss/style',
      lang: 'scss'
    }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      const vueLoader = config.module.rules.find(
        ({ loader }) => loader === 'vue-loader'
      )
      const {
        options: { loaders }
      } = vueLoader || { options: {} }

      if (loaders) {
        for (const loader of Object.values(loaders)) {
          changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
        }
      }

      config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
    }
  }
}
