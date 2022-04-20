<template>
  <AutocompleteField
    :id="id"
    ref="elementRef"
    class="w-full"
    hide-arrow-down
    :placeholder="placeholder"
    :value="value"
    :label="label"
    :label-class="labelClass"
    :chip-style="chipStyle"
    :items="items"
    :allow-creation="allowCreation"
    :hide-pencil-icon="hidePencilIcon"
    :disabled="disabled"
    :show-border="showBorder"
    @update:search="search = $event"
    @update:value="selectTag"
    @create="selectTag"
    @blur="onBlurAutocomplete"
    @focus="onFocusAutocomplete"
  />
</template>

<script>
// import gql from 'graphql-tag'
export default {
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

    tagId: {
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
    items: {
      type: [Array, Object],
      default: null,
    },

    all: {
      type: Boolean,
      default: true,
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

    hidePencilIcon: {
      type: Boolean,
      default: true,
    },

    fakeInput: {
      default: false,
      type: Boolean,
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
    tags: [],
    getTags: {
      items: [],
    },
  }),

  computed: {
    displayTag() {
      return this.value?.name ?? this.value ?? ''
    },

    joinTags() {
      return (
        this.filteredTags && this.filteredTags.map((tag) => tag.name).join(',')
      )
    },

    filteredTags() {
      return this.tags.filter((tag) => tag && tag.name)
    },
  },
  watch: {
    disabled: {
      handler(va) {
        this.disableField = va
      },
      immediate: true,
    },

    value: {
      handler(va) {
        this.tags.push(va)
      },
      immediate: true,
      deep: true,
    },
  },

  mounted() {
    this.tags = []
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
    selectTag(tag) {
      this.showAutoComplete = false

      tag = tag?.name ? tag : { name: tag }
      const found = this.tags.find((tag1) => tag && tag1.name === tag.name)
      if (!found) this.$emit('update:value', tag)
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