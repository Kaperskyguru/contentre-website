<template>
  <PortfolioIndex
    :portfolio="portfolio"
    :error="error"
    :is-custom-domain="isCustomDomain"
    :domain="domain"
  />
</template>
  
  <script>
export default {
  layout: 'portfolio',

  props: {
    portfolio: {
      type: Object,
      default: () => {},
    },
    isCustomDomain: {
      type: Boolean,
      default: false,
    },
    domain: {
      type: String,
      default: null,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },

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

        script: [this.getDynamicAnalytics()],
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