<template>
  <LinkOverview
    v-if="$store.state.isCustomDomain && !isPortfolio"
    :profile="profile"
  />

  <PortfolioOverview
    v-else-if="$store.state.isCustomDomain && isPortfolio"
    :portfolio="portfolio"
    :is-custom-domain="$store.state.isCustomDomain"
    :domain="$store.state.domain"
    :error="error"
  />
  <HomeOverview v-else />
</template>

<script>
import { GET_PORTFOLIO_DETAIL, GET_LINK_PROFILE } from '../graphql'
export default {
  name: 'HomePage',

  layout({ req }) {
    const originalDomain = req && req?.headers['x-contentre-origin-domain']

    console.log(originalDomain, 'layout')

    if (originalDomain && originalDomain.includes('kap.codes')) {
      return 'Link'
    }

    if (originalDomain && !originalDomain.includes('contentre')) {
      return 'portfolio'
    }
  },

  middleware({ store, req }) {
    if (process.server) {
      const originalDomain = req && req?.headers['x-contentre-origin-domain']
      if (
        (originalDomain && !originalDomain.includes('contentre')) ||
        (originalDomain && originalDomain.includes('kap.codes'))
      ) {
        store.state.isCustomDomain = true
        store.state.type = originalDomain.includes('kap.codes')
          ? 'link'
          : 'portfolio'
        store.state.domain = originalDomain
      }
    }
  },

  async asyncData(context) {
    if (!context.store.state.isCustomDomain) return

    console.log(context.store.state.type, 'layout')

    const client = context.app.apolloProvider.defaultClient
    const domain = context.store.state.domain
    const type = context.store.state.type
    const filter = {}
    const skip = !context.store.state.domain
    // if (context.params.code) {
    //   filter.code = context.params.code
    //   skip = !context.params.portfolio && !context.params.code
    // }

    if (type === 'link') {
      try {
        const {
          data: { getLinkProfile: linkProfile },
        } = await client.query({
          query: GET_LINK_PROFILE,
          variables: {
            filters: {
              username: context.params.username,
            },
          },
          skip() {
            return skip
          },
        })
        console.log(linkProfile)
        return {
          profile: {
            ...linkProfile,
          },
        }
      } catch (e) {
        return {
          error: true,
        }
      }
    }

    try {
      const {
        data: { getPortfolioDetail: portfolioDetail },
      } = await client.query({
        query: GET_PORTFOLIO_DETAIL,
        variables: {
          filters: {
            isCustomDomain: context.store.state.isCustomDomain,
            domain,
            ...filter,
          },
        },
        skip() {
          return skip
        },
      })

      return {
        portfolio: {
          ...portfolioDetail,
        },
      }
    } catch (e) {
      return {
        error: true,
      }
    }
  },

  computed: {
    isPortfolio() {
      console.log(this.$store.state.type, 'isPortfolio')
      return this.$store.state.type === 'portfolio'
    },
  },

  data: () => ({
    portfolio: {},
    error: false,
  }),

  methods: {
    initializeAnalytics() {
      const id = this.portfolio?.googleAnalyticId // ?? 'G-GKN67498E9'
      if (!id) return

      if (process.env.NODE_ENV !== 'production') return

      window.dataLayer = window.dataLayer || []
      function gtag() {
        // eslint-disable-next-line no-undef
        dataLayer.push(arguments)
      }

      gtag('js', new Date())

      gtag('config', id, {
        send_page_view: false, // Necessary to avoid duplicated page track on first page load
      })

      gtag('event', 'page_view', { page_path: this.$route.fullPath })

      // https://developers.google.com/analytics/devguides/collection/ga4/event-parameters?client_type=gtag
    },
    getDynamicAnalytics() {
      if (process.env.NODE_ENV !== 'production') return {}

      const id = this.portfolio?.googleAnalyticId // ?? 'G-GKN67498E9'
      if (!id) return {}

      return {
        hid: this.$route.params?.portfolio ?? '',
        src: `https://www.googletagmanager.com/gtag/js?id=${id}`,
        async: true,
      }
    },
  },
}
</script>

<style>
.list-none > li {
  margin-bottom: 10px;
}

.list-none,
li > a:hover {
  color: #4fd1c5;
}
</style>
