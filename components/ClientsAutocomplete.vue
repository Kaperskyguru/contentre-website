<template>
  <AutocompleteField
    :id="id"
    ref="elementRef"
    class="z-40"
    :placeholder="placeholder"
    :value="value"
    :label="label"
    :label-class="labelClass"
    :chip-style="chipStyle"
    :items="items ? items : []"
    :allow-creation="allowCreation"
    :hide-pencil-icon="hidePencilIcon"
    :disabled="disabled"
    :show-border="showBorder"
    @update:search="search = $event"
    @update:value="selectClient"
    @create="selectClient"
    @blur="onBlurAutocomplete"
    @focus="onFocusAutocomplete"
  />
</template>

<script>
// import gql from 'graphql-tag'
// import vClickOutside from 'v-click-outside'
export default {
  // directives: {
  //   clickOutside: vClickOutside.directive
  // },
  model: {
    prop: 'value',
    event: 'update:value',
  },

  props: {
    hideArrowDown: {
      type: Boolean,
      default: true,
    },

    id: {
      type: String,
      default: '',
    },

    items: {
      type: [Array, Object],
      default: null,
    },

    categoryId: {
      type: String,
      default: null,
    },
    shouldShowEditingOptions: {
      default: false,
      type: Boolean,
    },

    shouldUpdate: {
      type: Boolean,
      default: true,
    },

    isRequired: {
      default: true,
      type: Boolean,
    },
    value: {
      type: [String, Object],
      default: null,
    },

    label: {
      type: String,
      default: null,
    },

    labelClass: {
      default: '',
      type: String,
    },

    chipStyle: {
      type: [String, Array, Object],
      default: '',
    },

    error: {
      type: [String, Boolean],
      default: null,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    allowCreation: {
      type: Boolean,
      default: true,
    },

    transaction: {
      type: Object,
      default: null,
    },
    showBorder: {
      type: Boolean,
      default: false,
    },

    isInputBorderEnabled: {
      type: Boolean,
      default: true,
    },

    fakeInput: {
      default: false,
      type: Boolean,
    },

    hidePencilIcon: {
      type: Boolean,
      default: true,
    },

    shouldShowOptions: {
      default: true,
      type: Boolean,
    },
    placeholder: {
      default: 'Sample placeholder',
      type: String,
    },
  },

  data: () => ({
    showEditingOptions: false,
    showOptions: false,
    disableField: false,
    search: '',
    showAutoComplete: false,
  }),

  computed: {
    displayClient() {
      return this.value?.name ?? this.value ?? ''
    },
  },
  watch: {
    disabled: {
      handler(va) {
        this.disableField = this.disabled
      },
      immediate: true,
    },
  },

  methods: {
    onClickShowAutoComplete() {
      if (this.disabled) return

      this.showAutoComplete = true

      this.$nextTick(() => {
        const input = this.$el.querySelector('input')
        input?.focus()
      })
    },
    selectClient(client) {
      this.showAutoComplete = false
      this.$emit('update:value', client)
    },

    onClickOutside() {
      this.showAutoComplete = false
      this.showOptions = false
      this.showEditingOptions = false
    },

    onStopPropagation(event) {
      if (this.disabled) return
      event.preventDefault()
      event.stopPropagation()
    },

    onFocusAutocomplete() {
      this.showAutoComplete = true
      this.$emit('focus')
    },

    toggleEditingOptions() {
      this.showEditingOptions = !this.showEditingOptions
    },
    toggleOptions() {
      this.showOptions = !this.showOptions
    },

    onBlurAutocomplete() {
      setTimeout(() => {
        this.showAutoComplete = false
      }, 150)

      this.$emit('blur')
    },
  },
}
</script>

<style>
</style>