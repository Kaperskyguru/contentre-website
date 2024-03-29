<template>
  <Portal selector="#portal-toast">
    <transition
      enter-active-class="transition-all duration-300 delay-50 transform-gpu"
      leave-active-class="transition-all duration-300 transform-gpu"
      enter-class="scale-0 translate-y-full opacity-0"
      leave-to-class="scale-75 translate-y-full opacity-0"
    >
      <div
        v-if="formattedMessage"
        role="dialog"
        aria-modal="true"
        class="
          flex
          fixed
          bottom-4
          lg:bottom-8
          left-1/2
          z-5
          justify-between
          items-center
          py-2
          pr-3
          pl-6
          space-x-3
          w-full
          md:w-auto
          max-w-11/12
          md:max-w-3xl
          text-sm text-warndarkgray
          rounded-lg
          border
          shadow-lg
          transform
          -translate-x-1/2
        "
        :class="{
          'bg-mistyrose border-red': $toast.type === 'negative',
          'bg-powderblue border-darksilver border-opacity-50':
            $toast.type === 'positive',
        }"
      >
        <p>{{ formattedMessage }}</p>

        <Button appearance="tertiary" size="small" @click="$toast.message = ''">
          <IconClose slot="icon" />
        </Button>
      </div>
    </transition>
  </Portal>
</template>

<script>
import { Portal } from '@linusborg/vue-simple-portal'
import Button from '~/components/Button.vue'
import IconClose from '~/assets/icons/close.svg?inline'

export default {
  name: 'ToasT',

  components: {
    Button,
    Portal,
    IconClose,
  },

  data: () => ({
    closeTimeout: null,
  }),

  computed: {
    formattedMessage() {
      if (!this.$toast.message) return null

      const message = this.$toast.message
        .replace('GraphQL error: ', '')
        .replace('Network error: ', `${this.$i18n.t('networkError')} `)

      return `${message}.`.replace(/\.+$/g, '.').replace(/ +/g, ' ')
    },
  },

  watch: {
    '$toast.message': {
      immediate: true,
      handler(value) {
        if (this.closeTimeout) {
          clearTimeout(this.closeTimeout)
          this.closeTimeout = null
        }

        if (value && this.$toast.timeout) {
          this.closeTimeout = setTimeout(() => {
            this.$toast.message = ''
            this.closeTimeout = null
          }, this.$toast.timeout)
        }
      },
    },
  },
}
</script>
