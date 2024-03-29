<template>
  <span>
    <div class="p-5 relative flex flex-col h-full">
      <div class="pb-10 mx-auto w-full max-w-xl b bg-[#102A27] rounded-md">
        <div class="flex flex-col py-5">
          <!-- Profile Image -->
          <div class="flex justify-center w-full">
            <div>
              <Avatar
                :src="avatar"
                :name="name"
                size="auto"
                class="w-32 h-32"
              />
            </div>
          </div>
          <div class="w-full text-center text-[#54605F] px-2">
            <h1 class="px-4 mt-6 mb-7 text-5xl text-[#DCF6F3]">
              {{ name }}
            </h1>

            <p class="text-[#EAF9FE]">{{ jobTitle }}</p>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <p class="text-[#EAF9FE]" v-html="bio"></p>
          </div>

          <div class="px-4 mt-10 sm:px-7">
            <!-- Portfolio -->
            <div>
              <div class="w-full flex justify-between items-center mb-4">
                <div class="w-[40%] h-[10px] border-b bg--red-500"></div>
                <h3 class="text-center text-[#DCF6F3] font-semibold">
                  Portfolio
                </h3>
                <div class="w-[40%] h-[10px] border-b bg--red-500"></div>
              </div>
              <a
                v-for="(portfolio, i) in portfolios"
                :key="i"
                class="flex justify-between items-center py-3 px-5 mb-5 text-[#54605F] hover:text-white bg-[#EAF9FE] hover:bg-[#8892b0] hover:bg-opacity-10 rounded-full transition"
                target="_blank"
                :href="`${portfolio.url}`"
                ><span>{{ portfolio.title }}</span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-world"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <line x1="3.6" y1="9" x2="20.4" y2="9"></line>
                    <line x1="3.6" y1="15" x2="20.4" y2="15"></line>
                    <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                    <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                  </svg>
                </div>
              </a>
            </div>
            <!-- Profile -->

            <div class="w-full flex justify-between items-center mb-4">
              <div class="w-[40%] h-[10px] border-b bg--red-500"></div>
              <h3 class="text-center text-[#DCF6F3] font-semibold">Profile</h3>
              <div class="w-[40%] h-[10px] border-b bg--red-500"></div>
            </div>
            <a
              v-for="(client, i) in clients"
              :key="i"
              class="flex justify-between items-center py-3 px-5 mb-5 hover:text-white text-[#54605F] bg-[#EAF9FE] hover:bg-[#8892b0] hover:bg-opacity-10 rounded-full transition"
              target="_blank"
              :href="client.profile"
              ><span>{{ client.name }}</span>
              <div>
                <Avatar
                  :src="computeIcon(client.name, client.icon)"
                  :name="client.name"
                  size="small"
                />
              </div>
            </a>

            <!-- Social Media -->
            <div class="w-full flex justify-between items-center mb-4">
              <div class="w-[40%] h-[10px] border-b bg--red-500"></div>
              <h3 class="text-center text-[#DCF6F3] font-semibold">Socials</h3>
              <div class="w-[40%] h-[10px] border-b bg--red-500"></div>
            </div>
            <a
              v-for="(social, i) in allSocials"
              :key="i"
              class="flex justify-between items-center py-3 px-5 mb-5 hover:text-white text-[#54605F] bg-[#EAF9FE] hover:bg-[#8892b0] hover:bg-opacity-10 rounded-full transition"
              target="_blank"
              :href="social.link"
              ><span>{{ social.name }}</span>
              <div>
                <Avatar
                  :src="computeIcon(social.name, social.icon)"
                  :name="social.name"
                  size="small"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full py-10 md:pb-0 md:pt-10">
      <div class="flex justify-center">
        <a
          target="_blank"
          :href="`https://contentre.io/?source=linktree_${$route.params.username}`"
          class="font-bold text-2xl cursor-pointer"
          >Contentre</a
        >
      </div>
    </div>
  </span>
</template>
  
  <script>
export default {
  name: 'LinkOverview',
  props: {
    profile: {
      type: Object,
      default: () => {},
    },
  },

  data: () => ({
    socials: [
      {
        name: 'Facebook',
        icon: '~/assets/portfolio/Facebook.png',
      },
      {
        name: 'Twitter',
        icon: '~/assets/portfolio/Twitter.png',
      },
      {
        name: 'Instagram',
        icon: '~/assets/portfolio/Instagram.png',
      },
      {
        name: 'LinkedIn',
        icon: '~/assets/portfolio/LinkedIn.png',
      },
      {
        name: 'WhatsApp',
        icon: '~/assets/portfolio/WhatsApp.png',
      },
      {
        name: 'Medium',
        icon: '~/assets/portfolio/Medium.png',
      },
    ],
  }),

  computed: {
    url() {
      return `${process.env.FE_URL ?? 'https://contentre.io'}`
    },

    avatar() {
      return this.profile?.avatar
    },

    name() {
      return this.profile?.name
    },

    jobTitle() {
      return this.profile?.jobTitle
    },

    bio() {
      return this.profile?.bio
    },

    portfolios() {
      return this.profile?.portfolios
    },

    clients() {
      return this.profile?.clients
    },

    allSocials() {
      return this.profile?.socials
    },
  },
  methods: {
    computeIcon(name, icon) {
      const social = this.socials.find((i) => i.name === name)

      if (!social) return icon ?? null
      return require(`~/assets/portfolio/${social.name}.png`)
    },
  },
}
</script>
  
  <style></style>
  