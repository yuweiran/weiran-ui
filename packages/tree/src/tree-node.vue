<template>
  <div class="wr-tree-node">
    <div @click="nodeExpand(data.children)" class="wr-tree-expand">
      <span
        :class="[!isExpanded ? 'wr-icon-fill-right' : 'wr-icon-fill-bottom']"
      ></span
      >{{ data.label }}
    </div>
    <div v-if="isExpanded">
      <wr-tree-node
        v-for="(child, index) in childData"
        :data="child"
        :key="index"
      ></wr-tree-node>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wrTreeNode',
  componentName: 'wrTreeNode',
  data() {
    return {
      childData: null,
      isExpanded: false,
    }
  },
  methods: {
    nodeExpand(children) {
      this.childData = children
      this.isExpanded = !this.isExpanded
    },
  },
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.wr-tree-node {
  padding-left: 12px;
}
</style>
