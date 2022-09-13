<template>
  <div class="f-ac-jb header-line full-height" style="padding: 0 20px">
    <div class="full-height padding-20 position-relative us-none">
      <img class="full-height" src="@/assets/images/loge.svg" alt="logo" />
      <span class="position-relative" style="top: -2px; color: #5c5c66"
        >eiran</span
      >
    </div>
    <div class="full-height f-ac-jc c-pointer">
      <div
        :class="[item.name === activePath ? 'is-active' : '', 'nav-link']"
        @click="routeChangeTo(item)"
        v-for="item in navList"
        :key="item.id"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { id: 1, name: '指南', path: '/wrui/guide' },
        { id: 2, name: '组件', path: '/wrui/basic' },
        {
          id: 3,
          name: 'Github',
          path: 'https://github.com/jiangshuifan/weiran-ui',
        },
      ],
      activePath: '指南',
    }
  },
  methods: {
    routeChangeTo(item) {
      let targetPath = item.path
      if (item.name === 'Github') {
        window.open(item.path)
      } else if (item.name === '指南') {
        this.activePath = item.name
        this.$router.replace(targetPath)
        this.whetherHiddenLeft(targetPath)
      } else {
        this.activePath = item.name
        if (sessionStorage.getItem('activeRoutePath')) {
          targetPath = sessionStorage.getItem('activeRoutePath')
        }
        this.$router.replace(targetPath)
        this.whetherHiddenLeft(targetPath)
      }
    },
    whetherHiddenLeft(path) {
      let state = path === '/wrui/guide' ? true : false
      if (state) {
        this.$emit('hiddenLeft', true)
      } else {
        this.$emit('hiddenLeft', false)
      }
    },
  },
  mounted() {
    this.activePath =
      location.href.indexOf('/wrui/guide') !== -1 ? '指南' : '组件'
  },
}
</script>

<style lang="scss" scoped>
.header-line {
  border-bottom: 1px solid #888;
}
.is-active {
  color: #8a2be2;
}
.is-active.nav-link::before {
  transition: 1s;
  left: 0;
}
.nav-link {
  padding: 10px 2px;
  position: relative;
  overflow: hidden;
  & + & {
    margin-left: 20px;
  }
  &::before {
    transition: 1s;
    position: absolute;
    content: '';
    bottom: 2px;
    height: 2px;
    width: 100%;
    left: -100%;
    background-color: #8a2be2;
  }
  &:hover {
    &::before {
      transition: 1s;
      left: 0;
    }
  }
}
</style>
