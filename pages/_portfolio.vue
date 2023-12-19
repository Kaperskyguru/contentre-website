<template>
  <client-only>
    <nuxt-child :portfolio="portfolio" :error="error" />
  </client-only>
</template>

<script>
import { GET_PORTFOLIO_DETAIL } from '../graphql'

export default {
  layout: 'portfolio',
  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient
    const url = `${process.env.FE_URL ?? 'https://contentre.io'}`

    const filter = {}
    let skip = !context.params.portfolio
    if (context.params.code) {
      filter.code = context.params.code
      skip = !context.params.portfolio && !context.params.code
    }

    try {
      const {
        data: { getPortfolioDetail: portfolioDetail },
      } = await client.query({
        query: GET_PORTFOLIO_DETAIL,
        variables: {
          filters: {
            username: context.params.portfolio,
            url: `${url}${context.route.fullPath}`,
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
  data: () => ({
    portfolio: {},
    error: false,
  }),

  head() {
    if (!this.error) {
      return {
        title: `${this.portfolio.name}'s writing portfolio`,
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: `${this.portfolio?.job}`,
          },
          {
            hid: 'description',
            name: 'description',
            content: `${this.portfolio?.about}`,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: `${this.portfolio.name}'s writing portfolio`,
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.portfolio?.about,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.portfolio?.profileImage,
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: this.$route?.fullPath,
          },
          {
            hid: 'og:image:width',
            property: 'og:image:width',
            content: '800',
          },
          {
            hid: 'og:image:height',
            property: 'og:image:height',
            content: '800',
          },
          {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        ],

        script: [this.getDynamicAnalytics(), this.setUmamiAnalytics()],
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.initializeAnalytics()
    })
  },

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

    setUmamiAnalytics() {
      const id = this.portfolio?.analyticsId

      if (!id) return {}

      if (process.env.NODE_ENV === 'production') {
        return {
          hid: this.$route.params?.portfolio ?? '',
          'data-website-id': id,
          'data-host-url': 'https://stats.contentre.io',
          src: `https://stats.contentre.io/script.js`,
          async: true,
          defer: true,
        }
      }

      if (process.env.NODE_ENV === 'development')
        return {
          hid: this.$route.params?.portfolio ?? '',
          'data-website-id': id,
          src: `http://localhost:3000/script.js`,
          async: true,
          defer: true,
        }

      return {
        hid: this.$route.params?.portfolio ?? '',
        'data-website-id': id,
        'data-host-url': 'https://stats-staging.contentre.io',
        src: `https://stats-staging.contentre.io/script.js`,
        async: true,
        defer: true,
      }
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
</style>