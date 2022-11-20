<template>
  <div class="menu-container">
    <div class="c-pointer menu-group" v-for="(group, index) in menu" :key="index">
      <div class="menu-group-name" @click="groupNodeClick(group)">
        {{ group.text }}
      </div>
      <div :class="['menu-child', active === child.path ? 'is-active' : '']" v-for="(child, childI) in group.children"
        :key="childI" @click="nodeClick(group.path + '/' + child.path, child.path)">
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
  border-right: 1px solid #54545434;

  .menu-group {
    font-size: 14px;
    color: rgba(0, 0, 0, .88);

    .menu-group-name,
    .menu-child {
      height: 40px;
      line-height: 40px;
      border-radius: 6px;
      margin: 4px;
      transition: background-color 300ms;
    }

    .menu-group-name {
      padding-left: 30px;
    }

    .menu-child {
      position: relative;
      padding-left: 60px;
      overflow: hidden;
    }

    .menu-child:hover {
      background-color: #efefef
    }

    .is-active {
      background-color: #e2caf5 // .menu-child-text::before {
      //   background-color: #8a2be2;
      // }
    }
  }
}
</style>
