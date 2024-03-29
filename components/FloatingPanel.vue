<template>
  <Portal selector="#portal-panel">
    <transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-300"
      enter-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="visibleModel"
        style="z-index: 100"
        class="grid fixed bg-gray-500 bg-opacity-50 backdrop-blur z-4"
        :class="[
          inside
            ? 'w-1/2 max-w-[88vw] md:max-w-[30rem]'
            : 'top-0 left-0 right-0 bottom-0',
        ]"
        :style="
          inside
            ? {
                right: from === 'right' ? '2rem' : '',
                left: from === 'left' ? '2rem' : '',
                top: '2rem',
                bottom: '2rem',
              }
            : null
        "
      >
        <div
          v-if="!inside"
          class="absolute inset-0 bg-opacity-50 backdrop-blur z-4 bg-warngray"
          @click="close"
        />

        <transition
          appear
          enter-active-class="transition-transform duration-500 transform-gpu"
          :enter-class="
            from === 'left' ? '-translate-x-full' : 'translate-x-full'
          "
        >
          <Card
            v-if="visibleModel"
            ref="panel"
            elevation="large"
            padding="large"
            class="
              flex
              overflow-hidden
              relative
              flex-col
              !pb-4
              space-y-2
              w-full
              max-w-[88vw]
              md:max-w-[30rem]
              z-5
            "
            :class="{
              'xl:w-1/3': !inside,
              'rounded-l-none': from === 'left' && !inside,
              'rounded-r-none': from === 'right' && !inside,
              'justify-self-end': from === 'right',
            }"
            :style="attrStyle"
          >
            <header
              class="
                flex
                justify-between
                items-start
                pb-4
                border-b border-whitesmoke
              "
              :class="{
                'flex-row-reverse': from === 'right',
              }"
            >
              <slot name="header">
                <strong>&nbsp;</strong>
              </slot>

              <!-- <Tooltip v-if="enableClose" :label="`Close`">
                <button
                  v-if="enableClose"
                  appearance="tertiary"
                  class="-mt-1.5 -mb-3 w-2 h-2 text-darksilver hover:text-black"
                  @click="close"
                >
                  <IconClose slot="icon" />
                </button>
              </Tooltip> -->
            </header>
            <div
              v-if="waiting"
              class="
                flex flex-col flex-1
                justify-center
                items-center
                space-y-6
                drop-shadow
                md:overflow-hidden
              "
            >
              <!-- <Loading class="opacity-20" /> -->
            </div>
            <slot v-else name="card">
              <div class="flex overflow-hidden relative flex-1 -m-6">
                <div
                  class="
                    absolute
                    top-0
                    right-4
                    left-2
                    z-40
                    h-4
                    bg-gradient-to-b
                    from-white
                    to-transparent
                    pointer-events-none
                  "
                />

                <div class="overflow-auto flex-auto py-4 px-6">
                  <slot />
                </div>

                <div
                  class="
                    absolute
                    right-4
                    bottom-0
                    left-2
                    z-40
                    h-4
                    bg-gradient-to-b
                    from-transparent
                    to-white
                    pointer-events-none
                  "
                />

                <!-- <LazyWarnDialog
                  v-if="persistent"
                  v-bind="persistent"
                  ref="warnDialog"
                  @confirm="handleVisibility(false)"
                /> -->
              </div>
            </slot>
          </Card>
        </transition>
      </div>
    </transition>
  </Portal>
</template>

<script>
import { Portal } from '@linusborg/vue-simple-portal'

// import IconClose from '~/assets/icons/big-close.svg?inline'

export default {
  name: 'FloatingPanel',

  components: {
    // IconClose,
    Portal,
  },

  model: {
    prop: 'visible',
    event: 'toggle',
  },

  props: {
    waiting: {
      type: Boolean,
      default: false,
    },
    attrStyle: {
      type: String,
      default: null,
    },
    inside: {
      type: Boolean,
      default: false,
    },
    persistent: {
      type: Object,
      default: null,
    },
    visible: {
      type: Boolean,
      default: false,
    },

    visibleModelPreview: {
      type: Boolean,
      default: false,
    },

    externalClose: {
      type: Boolean,
      default: false,
    },

    enableClose: { type: Boolean, default: true },

    from: {
      type: String,
      validate: (value) => ['left', 'right'].includes(value),
      default: 'left',
    },
  },

  emits: ['toggle', 'closed'],

  computed: {
    visibleModel: {
      get() {
        return this.visible
      },

      set(value) {
        if (this.persistent && !value) {
          return this.$refs.warnDialog.show()
        }
        this.handleVisibility(value)
      },
    },
  },

  watch: {
    async visible(value) {
      await this.$nextTick()

      if (value) {
        document.addEventListener('keyup', this.close)

        const panel = this.$refs.panel
        if (panel && panel.$el && panel.$el.focus) panel.$el.focus()
      } else {
        document.removeEventListener('keyup', this.close)
      }
    },
  },

  destroyed() {
    document.removeEventListener('keyup', this.close)
  },

  methods: {
    handleVisibility(value) {
      if (!this.externalClose) {
        this.$emit('toggle', value)
      }

      if (!value) {
        this.$emit('closed')
      }
    },
    close(event) {
      if (event.type !== 'keyup' || event.keyCode === 27) {
        this.visibleModel = false
      }
    },
  },
}
</script>
