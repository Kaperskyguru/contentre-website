<template>
  <div
    v-if="error"
    class="grid justify-center content-center items-center h-screen bg-white"
  >
    <NoData message="Portfolio not found">
      <Button
        type="link"
        href="https://app.contentre.io/auth/register?source=portfolio"
        class="mt-4"
        appearance="secondary"
        size="small"
      >
        {{ 'Create new portfolio' }}
      </Button>
    </NoData>
  </div>

  <span v-else>
    <component
      :is="
        $utils.checkCallback(`${generateName(portfolio.templateSlug)}`, [
          portfolio,
        ])
      "
      v-if="portfolio.templateType === 'TEMPLATE'"
      :portfolio="portfolio"
      :content-data="contentData"
      @next="fetchMore"
      @filters="onFilters"
    />

    <span v-else>
      <component :is="`style`"> {{ portfolio.css }} </component>

      <component :is="`section`">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="portfolio.html"></span>
      </component>
    </span>
  </span>
</template>
  
  <script>
import ImageBG from 'assets/img/cover_image.png'
import { GET_PORTFOLIO_CONTENT } from '~/graphql'

export default {
  name: 'PortfolioCode',

  props: {
    portfolio: {
      type: Object,
      default: () => {},
    },
    error: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    image: ImageBG,
    username: '',

    contentData: {},
    filters: {},

    total: 0,
    size: 9,
    skip: 0,
  }),

  apollo: {
    contentData: {
      query: GET_PORTFOLIO_CONTENT,
      fetchPolicy: 'cache-and-network',
      variables() {
        const url = `${process.env.FE_URL ?? 'https://contentre.io'}`
        return {
          size: 9,
          skip: 0,
          filters: {
            ...this.filters,
            username: this.$route?.params?.portfolio,
            code: this.$route?.params?.code,
            url: `${url}${this.$route.fullPath}`,
          },
        }
      },
      update(data) {
        return {
          ...data.getPortfolioContent,
          total: data.getPortfolioContent?.contents?.meta?.total ?? 0,
          contents: data.getPortfolioContent.contents.contents,
        }
      },
      skip() {
        return !this.$route?.params?.portfolio && !this.$route?.params?.code
      },
    },
  },

  watch: {
    '$route.params': {
      immediate: true,
      handler(params) {
        this.username = params.portfolio
        this.code = params.code
      },
    },
  },

  mounted() {
    const _self = this
    const btn = document.querySelector('#nextPage')
    if (btn)
      btn.addEventListener('click', function () {
        _self.next()
      })
  },

  methods: {
    next() {
      const len = this.contentData?.contents?.length
      if (len !== 0 && len !== (this.contentData?.total ?? 0)) {
        this.size = this.size ?? 9
        this.skip = len
      }
      if (this.contentData.total === len) {
        const btn = document.querySelector('#nextPage')
        if (btn) btn.disabled = true
        return
      }
      this.fetchMoreAndAppend({
        size: this.size ?? 12,
        skip: len,
      })
    },
    generateName(name) {
      return name?.split('_')[0]
    },

    fetchMoreAndAppend(sizeAndSkip) {
      this.fetchMore(sizeAndSkip)
      const domContents =
        document.querySelector('#allContents').lastElementChild
      if (!domContents) return
      this.contentData.contents.forEach((content) => {
        const html = `
        <div
          class="
            flex
            overflow-hidden
            relative
            flex-col
            col-span-4
            justify-between
            items-center
            py-12
            px-8
            space-y-4
            bg-gray-100
            sm:rounded-xl
          "
        >
          <div class="p-3 text-white bg-blue-500 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-8 h-8"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
              <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path>
              <circle cx="6" cy="14" r="3"></circle>
              <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path>
            </svg>
          </div>
          <h4 class="text-xl font-medium text-gray-700">${content.title}</h4>
          <p class="text-base text-center text-gray-500">${content.excerpt}</p>
        </div>
        
        `

        domContents.insertAdjacentHTML('afterend', html)
      })
    },

    fetchMore(sizeAndSkip) {
      if (this.$apollo.queries.contentData.loading) return
      const itemsKey = 'contents'
      const queryName = 'getPortfolioContent'
      const url = `${process.env.FE_URL ?? 'https://contentre.io'}`
      this.$apollo.queries.contentData.fetchMore({
        // New variables
        variables: {
          ...sizeAndSkip,
          filters: {
            username: this.username,
            code: this.code,
            url: `${url}${this.$route.fullPath}`,
          },
        },
        // Transform the previous result with new data
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newItems =
            ((fetchMoreResult ?? {})[queryName] ?? {})[itemsKey][itemsKey] ?? []
          const oldItems =
            ((previousResult ?? {})[queryName] ?? {})[itemsKey][itemsKey] ?? []

          return {
            [queryName]: {
              ...fetchMoreResult[queryName],
              [itemsKey]: {
                [itemsKey]: [...oldItems, ...newItems],
                meta: fetchMoreResult[queryName][itemsKey].meta,
              },
            },
          }
        },
      })
    },
    onFilters(data) {
      this.filters = {
        ...data,
      }
    },
  },
}
</script>