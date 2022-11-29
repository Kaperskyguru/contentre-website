<template>
  <PortfolioIndex :portfolio="portfolio" :error="error" />
</template>

<script>
export default {
  name: 'IndexPage',

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
}
</script>

<style>
</style>