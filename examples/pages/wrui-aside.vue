<template>
  <div class="menu-container">
    <div
      class="c-pointer menu-group"
      v-for="(group, index) in menu"
      :key="index"
    >
      <div class="menu-group-name" @click="groupClick(group)">
        {{ group.text }}
      </div>
      <div
        class="menu-child"
        v-for="(child, childI) in group.children"
        :key="childI"
        @click="childClick(group.path + '/' + child.path)"
      >
        {{ child.text }}
      </div>
    </div>
  </div>
</template>

<script>
import menuData from '../mock/menu'
export default {
  data() {
    return {
      menu: menuData,
    }
  },
  methods: {
    groupClick(group) {
      this.$router.replace(group.path)
    },
    childClick(path) {
      this.$router.replace(path)
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-container {
  padding: 6px 20px;
  .menu-group {
    padding: 12px 0px;

    .menu-group-name {
      padding: 6px 0px;
      font-weight: bold;
      opacity: 0.5;
      font-size: 14px;
    }
    .menu-child {
      padding: 3px 16px;
      color: #444;
      font-size: 15px;
    }
  }
}
</style>
