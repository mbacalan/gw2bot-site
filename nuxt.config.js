export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'GW2Bot - A Discord Bot for Guild Wars 2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'theme-color', content: '#C12D2B' },
      { name: 'msapplication-TileColor', content: '#fff' },
      { name: 'application-name', content: 'GW2Bot' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'description', content: 'GW2Bot is a powerful Guild Wars 2 bot for Discord!' },
      { property: 'og:title', content: 'GW2Bot - A Discord Bot for Guild Wars 2' },
      { property: 'og:description', content: 'GW2Bot is a powerful Guild Wars 2 bot for Discord!' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://gw2bot.info' },
      { property: 'og:image', content: 'https://gw2bot.info/og-image.png' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#b40000' },
      { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com'},
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'crossorigin'},
      { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600&display=swap', as: 'style', crossorigin: 'crossorigin' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600&family=Roboto:wght@400;700&family=Roboto+Mono:wght@400;600&display=swap', media: 'print', onload: 'this.onload=null;this.removeAttribute("media")' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#b40000' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/globalVariables',
    '~/plugins/filters',
    '~/plugins/loadScript'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  serverMiddleware: [
    '~/api/api'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    credentials: true
  },

  auth: {
    strategies: {
      discord: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://discord.com/api/oauth2/authorize',
        userinfo_endpoint: 'https://discord.com/api/users/@me',
        client_id: 'YOUR_CLIENT_ID',
        scope: ['identify'],
        response_type: 'token',
        token_type: 'Bearer',
        redirect_uri: process.env.REDIRECT_URI || 'http://localhost:3000/login'
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    transpile: ['vue-plugin-load-script']
  }
}
