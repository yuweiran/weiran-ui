<template>
  <button
    @click="handleClick"
    :class="[
      'wr-button',
      buttonClass,
      buttonType !== 'default' ? `wr-button--${buttonType}` : '',
      {
        'wr-disabled': disabled,
        'wr-dashed': dashed,
        'wr-button-circle': circle,
        'wr-button-plain': plain,
      },
    ]"
  >
    <i v-if="icon" :class="[icon]"></i>
    <span v-if="$slots.default"><slot>按钮</slot></span>
  </button>
</template>
<script>
export default {
  name: 'wrButton',
  props: {
    disabled: {
      type: Boolean,
      default() {
        return false
      },
    },
    dashed: {
      type: Boolean,
      default() {
        return false
      },
    },
    circle: {
      type: Boolean,
      default() {
        return false
      },
    },
    plain: {
      type: Boolean,
      default() {
        return false
      },
    },
    type: {
      type: String,
      default() {
        return 'default'
      },
    },
    size: {
      type: String,
      default() {
        return 'small'
      },
    },
    icon: String,
  },
  methods: {
    handleClick(evt) {
      if (!this.disabled) {
        this.$emit('click', evt)
      }
    },
  },
  computed: {
    buttonType() {
      let type = this.type
      return ['success', 'primary', 'danger', 'default', 'warning'].indexOf(
        type
      ) === -1
        ? 'default'
        : type
    },
    buttonSize() {
      let size = this.size
      return ['medium', 'small', 'mini'].indexOf(size) === -1 ? 'small' : size
    },
    buttonClass() {
      let circle = this.circle
      let buttonSize = this.buttonSize
      return `wr-button${circle ? '-circle' : ''}-${buttonSize}` ===
        'wr-button-small'
        ? ''
        : `wr-button${circle ? '-circle' : ''}-${buttonSize}`
    },
  },
}
</script>
