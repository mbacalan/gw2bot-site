export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'GW2Bot - A Discord Bot',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans|Open+Sans|Staatliches&display=swap' }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
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
        authorization_endpoint: 'https://discordapp.com/api/oauth2/authorize',
        userinfo_endpoint: 'https://discordapp.com/api/users/@me',
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
    }
  }
}
