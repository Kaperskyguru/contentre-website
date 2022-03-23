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
        content: 'Content management platform for content creators | Contentre',
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

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    ],
  },

  env: {
    APP_URL: process.env.APP_URL || 'https://test.contentre.io/graphql',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/toast'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components'],
  },

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
    '@dansmaculotte/nuxt-segment',
    '@nuxtjs/apollo',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  publicRuntimeConfig: {
    SEGMENT_WRITE_KEY:
      process.env.SEGMENT_WRITE_KEY || 'GC68y1Bqqa8Gz4VNkIuBtU8WIfPwrqFW',
    SEGMENT_USE_ROUTER: process.env.SEGMENT_USE_ROUTER || true,
  },

  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo.js',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  hooks: {
    render: {
      errorMiddleware(app) {
        // eslint-disable-next-line node/handle-callback-err
        app.use((error, req, res, next) => {
          res.writeHead(307, {
            Location: '/errors/404',
          })
          res.end()
        })
      },
    },
  },
}
