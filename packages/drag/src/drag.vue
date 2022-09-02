<template>
  <div class="dragableWr">
    <slot></slot>
  </div>
</template>

<script>
import Sortable from 'sortablejs'

export default {
  name: 'wrDrag',
  props: {
    config: Object,
    data: Array,
  },
  data() {
    return {
      originData: [],
    }
  },
  created() {},
  methods: {
    getData() {
      return this.originData
    },
  },
  mounted() {
    let config = this.config
    this.originData = this.data ? JSON.parse(JSON.stringify(this.data)) : []
    let onEndInject = config.onEnd
    config.onEnd = (e) => {
      onEndInject ? onEndInject() : ''
      if (this.data) {
        const tempItem = this.originData.splice(e.oldIndex, 1)[0]
        this.originData.splice(e.newIndex, 0, tempItem)
      }
    }
    Sortable.create(this.$el, config)
  },
}
</script>

<style lang="scss" scoped></style>
