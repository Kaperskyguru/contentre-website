<!-- eslint-disable vue/no-v-html -->
<template>
  <main>
    <header>
      <div class="border-b-2 pb-12">
        <div class="text-center mt-20 mx-3 sm:mx-10 md:mx-6 lg:mx-16">
          <h1 class="text-3xl sm:text-4xl md:text-6xl text-[#102A27] font-bold">
            Technical Writers' Directory
          </h1>
          <p class="mt-5 text-[18px] sm:text-[24px]">
            Featured portfolios selected from over
            {{ formateNumber(portfolios.totalUsers) }} users.
          </p>
        </div>
      </div>
    </header>

    <section class="bg-[#4FD1C50D] mt-4 pb-20">
      <div class="max-w-[90%] lg:max-w-[80%] mx-auto pt-10">
        <div class="flex lg:flex-row flex-col gap-x-10 gap-y-5">
          <div class="lg:w-[25%]">
            <div class="w-full">
              <TextField
                v-model="filters.terms"
                placeholder="Search People"
                class="pr-4 py-3 text-lg w-full"
              />
            </div>
            <div class="border-b-2 border-black mt-5">
              <p class="text-xl">Tech Skills</p>
            </div>
            <div class="mt-4 lg:mt-0">
              <input
                id="video_editor"
                type="checkbox"
                name="video_editr"
                value="Video editor"
                @change="onSkills"
              />
              <label for="video_editor">Video editor</label><br />
              <input
                id="translator"
                type="checkbox"
                name="translator"
                value="translator"
                @change="onSkills"
              />
              <label for="translator">Translator</label><br />
              <input
                id="sub_editor"
                type="checkbox"
                name="sub_editor"
                value="sub editor"
                @change="onSkills"
              />
              <label for="sub_editor">Sub-editor</label><br />
              <input
                id="reporter"
                type="checkbox"
                name="reporter"
                value="reporter"
                @change="onSkills"
              />
              <label for="reporter">Reporter</label><br />
              <input
                id="proofreader"
                type="checkbox"
                name="proofreader"
                value="proofreader"
                @change="onSkills"
              />
              <label for="proofreader">Proofreader</label><br />

              <input
                id="tech_journalist"
                type="checkbox"
                name="tech_journalist"
                value="journalist"
                @change="onSkills"
              />
              <label for="tech_journalist">Tech Journalist</label><br />
              <input
                id="feature_writer"
                type="checkbox"
                name="feature_writer"
                value="feature writer"
                @change="onSkills"
              />
              <label for="feature_writer">Feature writer</label><br />
              <input
                id="editor"
                type="checkbox"
                name="editor"
                value="editor"
                @change="onSkills"
              />
              <label for="editor">Editor</label><br />
              <input
                id="creative_writer"
                type="checkbox"
                name="creative_writer"
                value="Bike"
                @change="onSkills"
              />
              <label for="creative_writer">Creative Writer</label><br />
              <input
                id="copy_writer"
                type="checkbox"
                name="copy_writer"
                value="copy writer"
                @change="onSkills"
              />
              <label for="copy_writer">Copy Writer</label><br />
              <input
                id="content_writer"
                type="checkbox"
                name="content_writer"
                value="content creator"
                @change="onSkills"
              />
              <label for="content_writer">Content Creator</label><br />
              <input
                id="blogger"
                type="checkbox"
                name="blogger"
                value="blogger"
                @change="onSkills"
              />
              <label for="blogger">Blogger</label><br />
              <input
                id="author"
                type="checkbox"
                name="author"
                value="author"
                @change="onSkills"
              />
              <label for="author">Author</label><br />
            </div>

            <div class="border-b-2 border-black mt-5">
              <p class="text-xl">Specialism</p>
            </div>
            <div class="mt-4 lg:mt-0">
              <input
                id="technology"
                type="checkbox"
                name="technology"
                value="Bike"
              />
              <label for="technology">Technology</label><br />
              <input
                id="vehicle1"
                type="checkbox"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1">Social Media</label><br />
              <input
                id="vehicle1"
                type="checkbox"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1">Science</label><br />
              <input
                id="vehicle1"
                type="checkbox"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1">Reviews</label><br />
            </div>
          </div>

          <div
            ref="infiniteScrollContainer"
            v-infinite-scroll="onLoadMoreData"
            class="overflow-y-auto w-full h-100 max-h-full text-sm"
            infinite-scroll-distance="300"
            :infinite-scroll-disabled="disableInfiniteScroll"
          >
            <div
              v-for="(item, index) in portfolios.items"
              :key="index"
              class="
                bg-gray-800
                flex flex-col
                md:flex-row
                z-10
                mt-2
                p-3
                md:mt-0
                mb-5
              "
            >
              <div class="md:w-[20%] w-full h-[150px]">
                <img
                  v-if="hasImage(item.user)"
                  :src="item.user.avatarURL"
                  :alt="item.user.name"
                  class="w-[100%] object-cover block h-[100%]"
                />
                <div
                  v-else
                  class="
                    flex
                    overflow-hidden
                    grow-0
                    w-full
                    shrink-0
                    justify-center
                    tracking-wider
                    h-full
                    items-center
                    text-darkblue
                    bg-lavander
                  "
                >
                  <span>{{ initials(item.user.name) }}</span>
                </div>
              </div>
              <div class="px-5 w-full flex-1 pt-3">
                <a
                  href="#"
                  class="text-white font-bold text-[16px] md:text-[18px]"
                  >{{ item.user.name }}</a
                >
                <article>
                  <p
                    class="text-[#ddd] text-[12px] md:text-[16px]"
                    v-html="formatBio(item.user.bio)"
                  ></p>
                </article>
                <div class="pt-3">
                  <a target="_blank" :href="`${item.url}`"
                    ><button
                      class="
                        text-white text-sm
                        font-semibold
                        bg-[#286963]
                        px-4
                        py-2
                        rounded-md
                        hover:bg-transparent
                        transition
                        duration-150
                        ease-in-out
                      "
                    >
                      View Portfolio
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TextField from '../components/TextField.vue'
import { GET_ALL_PORTFOLIOS } from '~/graphql'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Hiring',

  components: { TextField },
  data: () => ({
    skills: [],
    filters: {},
    itemsPerPage: 30,
    portfolios: {
      items: [],
      total: 0,
      totalUsers: 0,
    },
  }),
  head() {
    return {
      title: 'Hire Technical Writers',
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Hire highly vetted freelance technical writers.',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Hire highly vetted freelance technical writers.',
        },
      ],
    }
  },
  methods: {
    formateNumber(num) {
      if (!num) return 0
      return new Intl.NumberFormat('en-IN', {
        maximumSignificantDigits: 3,
      }).format(num)
    },

    formatBio(bio) {
      return bio && bio.length >= 170
        ? bio?.substring(0, 170) + '...' ?? ''
        : bio
    },
    onLoadMoreData() {
      if (
        !this.$apollo.queries.portfolios.loading &&
        this.portfolios.items.length !== 0 &&
        this.portfolios.items.length !== this.total
      ) {
        this.fetchMore({
          size: this.itemsPerPage,
          skip: this.portfolios.items.length,
        })
      }
    },
    disableInfiniteScroll() {
      return (
        this.$apollo.queries.portfolios.loading ||
        this.portfolios.items.length >= this.total
      )
    },
    hasImage(user) {
      return !!user?.avatarURL
    },

    initials(name) {
      if (!name) return '?'
      const names = name.toUpperCase().split(' ')
      const firstName = names.shift() || ''
      const lastName = names.pop() || ''
      if (!firstName && !lastName) return '?'
      return `${firstName.substr(0, 1)}${lastName.substr(0, 1)}`
    },

    onSkills(e) {
      const target = e.target
      if (!e || !target) return false

      // Remove item if exist
      const index = this.skills.findIndex((el) => el === target.value)
      if (index === -1) {
        this.skills.push(target.value)
      } else this.skills.splice(index, 1)

      this.filters = {
        ...this.filters,
        skills: this.skills,
      }
    },

    fetchMore(sizeAndSkip) {
      if (this.$apollo.queries.portfolios.loading) return
      const itemsKey = 'portfolios'
      const queryName = 'getAllPortfolios'

      this.$apollo.queries.portfolios.fetchMore({
        // New variables
        variables: {
          ...sizeAndSkip,
          filters: {
            ...this.filters,
          },
        },
        // Transform the previous result with new data
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newItems =
            ((fetchMoreResult ?? {})[queryName] ?? {})[itemsKey] ?? []
          const oldItems =
            ((previousResult ?? {})[queryName] ?? {})[itemsKey] ?? []

          return {
            [queryName]: {
              ...fetchMoreResult[queryName],
              [itemsKey]: [...oldItems, ...newItems],
            },
          }
        },
      })
    },
  },

  apollo: {
    portfolios: {
      query: GET_ALL_PORTFOLIOS,
      fetchPolicy: 'cache-and-network',
      variables() {
        return {
          size: 30,
          skip: 0,
          filters: { ...this.filters },
        }
      },
      update(data) {
        return {
          items: data.getAllPortfolios.portfolios,
          total: data.getAllPortfolios.meta.total,
          totalUsers: data.getAllPortfolios.meta.totalUsers,
        }
      },
    },
  },
}
</script>

<style>
</style>