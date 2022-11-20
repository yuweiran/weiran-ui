<template>
  <div @mousedown.prevent="handleDragItemMoving" @mouseup="handleDragItemMoved"
    :class="['wr-drag-item',{'is-selected':isSelected}]">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '../../../src/utils/emitter'

export default {
  name: "wrDragItem",
  mixins: [Emitter],
  data() {
    return {
      isSelected: false
    }
  },
  methods: {
    handleDragItemMoving(e) {
      this.isSelected = true
      let el = e.target
      window.document.body.append(el)
    },
    handleDragItemMoved() {
      this.isSelected = false
    }

  }
};
</script>

<style lang="scss" scoped>

</style>
