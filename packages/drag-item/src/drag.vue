<template>
  <div @mouseleave="handleMouseLeave" class="wr-drag">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '../../../src/utils/emitter'

export default {
  name: "wrDrag",
  mixins: [Emitter],
  props: {
    value: Array,
    props: {
      type: Object,
      required: false,
      default() {
        return {
          value: 'value',
          text: 'text'
        }
      }
    }
  },
  methods: {
    handleMouseLeave() {
      console.log('鼠标离开')
    },
    handleMouseOut() {
      console.log('handleMouseOut')
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
