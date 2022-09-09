<template>
  <div class="wr-badge">
    <slot></slot>
    <sup
      v-show="showBadge"
      :class="[
        'wr-badge-sup',
        type ? `wr-badge-${type}` : `wr-badge-default`,
        isDot ? 'wr-badge-is-dot' : '',
      ]"
      >{{ !isDot ? valueShow : '' }}</sup
    >
  </div>
</template>

<script>
export default {
  name: 'wrBadge',
  props: {
    value: [String, Number],
    limit: Number,
    type: {
      type: String,
      validator(value) {
        return ['danger', 'default', 'success', 'warning'].indexOf(value) !== -1
      },
    },
    showBadge: {
      type: Boolean,
      default: true,
    },
    isDot: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    valueShow() {
      if (this.limit) {
        if (typeof this.value === 'number' && this.limit < this.value) {
          return this.limit + '+'
        }
        return this.value
      } else {
        return this.value
      }
    },
  },
}
</script>
