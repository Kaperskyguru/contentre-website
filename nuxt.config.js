import dotenv from 'dotenv'

dotenv.config({ silent: process.env.NODE_ENV === 'production' })
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (pageTitle) => {
      return pageTitle && pageTitle !== 'Contentre'
        ? `${pageTitle} | Contentre`
        : 'Contentre'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content:
          'Access your contents anywhere published, monitor your content analytics in real time, create and customize your writing portfolio across your clients.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Content management for content creators | Contentre',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Access your contents anywhere published, monitor your content analytics in real time, create and customize your writing portfolio across your clients.',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Contentre',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/logo.png',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@contentre',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@contentre',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'content creators, freelance writing, content marketing, writing portfolio',
      },
      { hid: 'robots', name: 'robots', content: 'index, follow' },

      { hid: 'language', name: 'language', content: 'English' },
      { hid: 'revisit-after', name: 'revisit-after', content: '7 days' },

      { name: 'theme-color', content: '#dcf6f3' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    APP_URL: process.env.APP_URL || 'https://contentre.herokuapp.com',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/toast'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo.js',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
