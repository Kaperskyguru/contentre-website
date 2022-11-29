<template>
  <PortfolioCode :portfolio="portfolio" :error="error" />
</template>

<script>
export default {
  name: 'CodePage',

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