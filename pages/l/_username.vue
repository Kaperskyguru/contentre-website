<template>
  <section class="w-full h-full">
    <LinkOverview :profile="profile" />
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
  </section>
</template>
  
  <script>
import { GET_LINK_PROFILE } from '~/graphql'
import LinkOverview from '~/components/LinkOverview.vue'
export default {
  name: 'LinkView',
  components: {
    LinkOverview,
  },
  layout: 'Link',

  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient

    const skip = !context.params.username

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
  },

  head() {
    return {
      title: this.profile?.name ? `${this.profile.name}` : '',
    }
  },
}
</script>
  
<style>
body {
  @apply !bg-[#EAF9FE];
}
</style>
  