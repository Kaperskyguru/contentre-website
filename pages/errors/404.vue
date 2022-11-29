<template>
  <div
    class="
      grid
      justify-center
      content-center
      items-center
      mx-auto
      h-screen
      bg-white
      lg:mx-24
    "
  >
    <NoData :message="'Portfolio not found'">
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
</template>

<script>
export default {
  name: 'ErrorPage404',
  layout: 'portfolio',

  head() {
    return {
      title: 'No Portfolio Found',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'We provide the best resources and tools to help you grow your freelance writing career.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'No Portfolio Found',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'We provide the best resources and tools to help you grow your freelance writing career.',
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
    }
  },
}
</script>

<style>
</style>