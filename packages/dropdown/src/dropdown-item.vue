<template>
  <div @click="handleDropdownItem" class="wr-dropdown-item">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '../../../src/utils/emitter'
export default {
  name: "wrDropdownItem",
  mixins: [Emitter],
  data() {
    return {}
  },
  methods: {
    handleDropdownItem() {
      this.$emit('click')
    }
  }
}
</script>