<template>
  <div class="container">
    <h1 v-if="error404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ErroR404',
  layout: 'portfolio',
  props: ['error'], // you can set a custom layout for the error page

  computed: {
    error404() {
      return this.error?.statusCode === 404
    },
  },
}
</script>