<template>
  <main>
    <nuxt />
  </main>
</template>

<script>
export default {
  name: 'LinkLayout',

  mounted() {
    document.body.classList.add('!bg-[#EAF9FE]')
  },
}
</script>
