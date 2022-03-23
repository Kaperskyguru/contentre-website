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
}
</script>

<style>
</style>