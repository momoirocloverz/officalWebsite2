import pkg from './package'
export default {
  mode: 'universal',
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '万才网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '万才,万才网,新业态从业人员,新业态从业人员管理,考勤软件,考勤系统,排班软件,排班系统,智能排班,劳动力管理,临时工管理,分时用工,众包平台' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/swiper/css/swiper.min.css' }
    ],
    script: [
      { src: 'http://api.map.baidu.com/api?v=3.0&ak=HIpuFBetnp1KKYrfcleBipO6x31IeI63' },
      { src: '/czc.js' },
      { src: 'https://unpkg.com/swiper/js/swiper.min.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/main.scss',
    '@/assets/css/quill.bubble.css',
    '@/assets/css/quill.core.css',
    '@/assets/css/quill.snow.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
      '@/plugins/element-ui',
      '@/plugins/main',
      '@/plugins/apiListsPlugin',
      '@/plugins/dayjs',
      '@/plugins/qrcode',
      '@/plugins/priceFilter'
  ],

  router: {
    // base:'../',
    middleware: 'auth'
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */

  axios: {
    proxy: false
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api': {
      target: 'http://test.api.10000rc.com',
      pathRewrite: { '^/api': '' }
    }
  },
  generate: {
    minify: {
      collapseWhitespace: false
    }
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    extend(config, { isDev, isClient }) {
      const vueLoader = config.module.rules.find(r => r.loader === 'vue-loader')
      vueLoader.options.transformAssetUrls = {
        video: 'poster'
      }
    }
    /*
     ** You can extend webpack config here
     */


  }
}
