import dotenv from 'dotenv'
import nuxtI18nConfig from './nuxt.i18n.config'
dotenv.config({ silent: process.env.NODE_ENV === 'production' })
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Contentre',
    script: [
      {
        src: 'https://cdn.tailwindcss.com',
      },
      {
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              author: { '@id': '#identity' },
              copyrightHolder: { '@id': '#identity' },
              copyrightYear: new Date(),
              creator: { '@id': '#creator' },
              dateModified: new Date(),
              datePublished: '2022-05-02T10:10:00-07:00',
              description:
                'All-in-one workspace for top freelance technical writers, organize contents, manage clients, create multiple portfolios, discover new opportunities, and lots more, all in one place.',
              headline: 'Grow your freelance writing career from one place',
              image: {
                '@type': 'ImageObject',
                url: '/logo.png',
              },
              inLanguage: 'en-us',
              mainEntityOfPage: 'https://contentre.io/',
              name: 'Grow your freelance writing career from one place',
              publisher: { '@id': '#creator' },
              url: 'https://contentre.io',
            },
            {
              '@id': '#identity',
              '@type': 'LocalBusiness',
              priceRange: '$0.00',
            },
            { '@id': '#creator', '@type': 'Organization' },
            {
              '@type': 'BreadcrumbList',
              description: 'Breadcrumbs list',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  item: 'https://contentre.io/auth/register',
                  name: 'Get Started for free',
                  position: 1,
                },

                {
                  '@type': 'ListItem',
                  item: 'https://contentre.io/pricing',
                  name: 'Pricing',
                  position: 2,
                },

                {
                  '@type': 'ListItem',
                  item: 'https://blog.contentre.io/',
                  name: 'Become a better freelance writer',
                  position: 4,
                },

                {
                  '@type': 'ListItem',
                  item: 'https://contentre.io/products',
                  name: 'Products',
                  position: 3,
                },
              ],
              name: 'Breadcrumbs',
            },
          ],
        },
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content:
          'All-in-one workspace for top freelance technical writers, organize contents, manage clients, create multiple portfolios, share samples, discover new opportunities, and lots more, all in one place.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'Grow your freelance technical writing career from one place | Contentre',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'All-in-one workspace for top freelance technical writers, organize contents, manage clients, create multiple portfolios, share samples, discover new opportunities, and lots more, all in one place.',
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
        content: '@contentreio',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@contentreio',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'content creators, freelance technical writers, technical writers, freelance writing, technical writing portfolio, writing portfolio, freelance writers',
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

    script: [
      {
        src: 'https://cdn.paddle.com/paddle/paddle.js',
        hid: 'Paddle',
      },
    ],
  },

  env: {
    APP_URL: process.env.APP_URL || 'https://test.contentre.io/graphql',
  },

  // target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/toast',
    '~/plugins/vuelidate',
    '~/plugins/utils',
    { src: '~/plugins/vue-infinite-scroll', mode: 'client', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/templates', '~/components/covers'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'vue-ssr-carousel/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@dansmaculotte/nuxt-segment',
    '@nuxtjs/apollo',
    '@nuxtjs/svg',
    '@nuxtjs/gtm',
    ['@nuxtjs/i18n', nuxtI18nConfig],
  ],

  gtm: {
    enabled: process.env.NODE_ENV === 'production' || false,
    id: 'GTM-KFL7V5T',
    pageTracking: true,
    pageViewEventName: 'index',
  },

  segment: {
    writeKey: process.env.SEGMENT_WRITE_KEY,
    disabled: false,
    useRouter: process.env.SEGMENT_USE_ROUTER || true,
  },

  publicRuntimeConfig: {
    SEGMENT_WRITE_KEY: process.env.SEGMENT_WRITE_KEY,
    SEGMENT_USE_ROUTER: process.env.SEGMENT_USE_ROUTER || true,
  },

  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo.js',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  devServerHandlers: [],
  hooks: {
    render: {
      errorMiddleware(app) {
        // eslint-disable-next-line node/handle-callback-err
        app.use((error, req, res, next) => {
          if (error) {
            res.writeHead(307, {
              Location: '/errors/404',
            })
          }
          res.end()
        })
      },
    },
  },
}
