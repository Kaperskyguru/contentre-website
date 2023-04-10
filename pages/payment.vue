<template>
  <div>
    You're been redirected to the payment page. If not,
    <a href="#" @click.prevent="openPayment">click here.</a>
  </div>
</template>

<script>
export default {
layout:"techpad",
  mounted() {
    Paddle.Setup({ vendor: 153088 })
    // Paddle.Checkout.open({ product: 822998 })
  },
  method: {
    openPayment() {
      Paddle.Checkout.open({ product: 822998 })
    }
  }
}
</script>

<style>
</style>
