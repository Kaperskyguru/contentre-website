<template>
  <section class="w-full h-full">
    <LinkOverview :profile="profile" />
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

  