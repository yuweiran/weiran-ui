<template>
  <div class="menu-container">
    <div
      class="c-pointer menu-group"
      v-for="(group, index) in menu"
      :key="index"
    >
      <div class="menu-group-name" @click="groupNodeClick(group)">
        {{ group.text }}
      </div>
      <div
        :class="['menu-child', active === child.path ? 'is-active' : '']"
        v-for="(child, childI) in group.children"
        :key="childI"
        @click="nodeClick(group.path + '/' + child.path, child.path)"
      >
        <span class="menu-child-text">{{ child.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import menuData from '../../mock/menu'
export default {
  data() {
    return {
      menu: menuData,
      active: '',
    }
  },
  methods: {
    nodeClick(path, activePath) {
      if (this.$route.fullPath !== path) {
        this.$router.replace(path)
        this.setActivePath(activePath)
        sessionStorage.setItem('activeRoutePath', path)
        this.$emit('scrolltop')
      }
    },
    groupNodeClick(group) {
      if (this.$route.fullPath !== group.path) {
        this.$router.replace(group.path)
        sessionStorage.setItem('activeRoutePath', group.path)
        this.$emit('scrolltop')
      }
      this.setActivePath(group.children[0].path)
    },
    setActivePath(path) {
      this.active = path
      sessionStorage.setItem('activeComponent', path)
    },
  },
  created() {
    if (sessionStorage.getItem('activeComponent')) {
      this.active = sessionStorage.getItem('activeComponent')
    } else {
      this.active = 'button'
      sessionStorage.setItem('activeComponent', 'button')
    }
  },
}
</script>

<style lang="scss" scoped>
.menu-container {
  padding: 6px 20px;
  .menu-group {
    padding: 12px 0px;

    .menu-group-name {
      padding: 4px 0px;
      font-weight: bold;
      font-size: 16px;
      color: #222;
    }
    .menu-child {
      position: relative;
      color: #666;
      padding: 4px;
      font-size: 15px;
      overflow: hidden;
      .menu-child-text::before {
        transition: 1s;
        position: absolute;
        content: '';
        width: 2px;
        height: 100%;
        right: 2px;
      }
      &:hover {
        color: #8a2be2;
        .menu-child-text::before {
          background-color: #8a2be2;
          transition: 1s;
        }
      }
    }
    .is-active {
      color: #8a2be2;
      .menu-child-text::before {
        background-color: #8a2be2;
      }
    }
  }
}
</style>
