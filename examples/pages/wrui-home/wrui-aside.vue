<template>
  <div class="menu-container">
    <div class="c-pointer menu-group" v-for="(group, index) in menu" :key="index">
      <div class="menu-group-name f-ac" @click.prevent.stop="groupNodeClick(group)">
        <img :ref="group.text" style="height: 22px; width: 22px;margin-right: 10px;"
          :src="require(`../../assets/images/${group.text}.svg`)" alt="" srcset="">
        {{ !mini ? group.text : '' }}
      </div>
      <div :class="[mini ? 'is-mini' : '']" v-show="!mini ? true : group.text === activeGroup"
        :style="mini ? { top: domPosition.top + 'px', left: domPosition.left + 'px' } : ''">
        <div :class="['menu-child', active === child.path ? 'is-active' : '']" v-for="(child, childI) in group.children"
          :key="childI" @click.prevent.stop="nodeClick(group.path + '/' + child.path, child.path)">
          <span class="menu-child-text">{{ child.text }}</span>
        </div>
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
      activeGroup: '',
      domPosition: {
        top: 0,
        left: 0
      }
    }
  },
  props: {
    mini: {
      type: Boolean,
      default: false
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
      if (!this.mini) {
        if (this.$route.fullPath !== group.path) {
          this.$router.replace(group.path)
          sessionStorage.setItem('activeRoutePath', group.path)
          this.$emit('scrolltop')
        }
        this.setActivePath(group.children[0].path)
      } else {
        this.$nextTick(() => {
          let rectDom = this.$refs[group.text][0].getBoundingClientRect()
          if (this.activeGroup === group.text) {
            this.activeGroup = ""
          } else {
            this.activeGroup = group.text
            this.domPosition = {
              top: rectDom.top,
              left: rectDom.left + rectDom.width + 10,
            }
          }
        })

      }
    },
    setActivePath(path) {
      this.active = path
      sessionStorage.setItem('activeComponent', path)
    },
    clearActiveGroup() {
      this.activeGroup = ''
    }
  },
  created() {
    if (sessionStorage.getItem('activeComponent')) {
      this.active = sessionStorage.getItem('activeComponent')
    } else {
      this.active = 'button'
      sessionStorage.setItem('activeComponent', 'button')
    }
  },
  mounted() {
    document.addEventListener('click', this.clearActiveGroup)
  },
  watch: {
    mini() {
      this.activeGroup = ''
    }
  },
  beforeDestroy() {
    document.removeEventListener('click', this.clearActiveGroup)
  }
}
</script>

<style lang="scss" scoped>
.menu-container {
  border-right: 1px solid #54545434;
  height: 100%;
  overflow: auto;

  .menu-group {
    font-size: 14px;
    overflow: visible;
    color: rgba(0, 0, 0, .88);
    -webkit-tap-highlight-color: transparent;

    .is-mini {
      position: absolute;
      box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);
      top: 0;
      left: 72px;
      z-index: 99999;
      border-radius: 4px;
      background-color: #ffffff;

      .menu-child {
        position: relative;
        padding: 0 20px;
      }
    }

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
      background-color: #e2caf5 !important
    }
  }

  .menu-child-text {
    white-space: nowrap;
  }

}
</style>
