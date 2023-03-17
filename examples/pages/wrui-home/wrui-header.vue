<template>
  <div class="f-ac-jb header-line full-height" style="padding: 0 40px">
    <div class="full-height f-ac-jc c-pointer  position-relative us-none" @click="routeChangeToHome">
      <div>
        <img style="height: 52px;" src="@/assets/images/logo.svg" alt="logo" />
      </div>
      <div style="margin-left: 12px">
        <span class="position-relative" style="font-size:18px ;color:#7a839c">WR-UI</span>
      </div>
    </div>
    <div class="full-height f-ac-jc  c-pointer" style="-webkit-tap-highlight-color: transparent;color: #585e6f;">
      <div :class="[item.route === activePath ? 'is-active' : '', 'nav-link']" @click="routeChangeTo(item)"
        v-for="item in navList" :key="item.id">
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
        { id: 1, name: '指南', route: 'guide', path: '/wrui/guide' },
        { id: 2, name: '组件', route: 'components', path: '/wrui/components/basic' },
        {
          id: 3,
          name: 'Github',
          route: 'github',
          path: 'https://github.com/yuweiran/weiran-ui',
        },
      ],
      activePath: '',
    }
  },
  methods: {
    routeChangeTo(item) {
      let targetPath = item.path
      if (item.route === 'github') {
        window.open(item.path)
      } else if (item.route === 'guide') {
        this.activePath = item.route
        this.$router.replace(targetPath)
        this.whetherHiddenLeft(targetPath)
      } else {
        this.activePath = item.route
        // if (sessionStorage.getItem('activeRoutePath')) {
        //   targetPath = sessionStorage.getItem('activeRoutePath')
        // }
        this.$router.push(targetPath)
        this.whetherHiddenLeft(targetPath)
      }
    },
    routeChangeToHome() {
      this.activePath = ''
      this.$router.replace('/')
      this.whetherHiddenLeft('/')
    },
    whetherHiddenLeft(path) {
      let state = path.indexOf('/wrui/components/') !== -1 ? false : true
      if (state) {
        this.$emit('hiddenLeft', true)
      } else {
        this.$emit('hiddenLeft', false)
      }
    },
  },
  mounted() {
    let href = location.href
    if (href.indexOf('/wrui/components') !== -1) {
      this.activePath = 'components'
    } else if (href.indexOf('/wrui/guide') !== -1) {
      this.activePath = 'guide'
    } else {
      this.activePath = ''
    }
  },
}
</script>

<style lang="scss" scoped>
.header-line {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 3%), 0 1px 6px -1px rgb(0 0 0 / 2%), 0 2px 4px 0 rgb(0 0 0 / 2%);
}

.is-active {
  color: #000;
}

.is-active.nav-link::before {
  transition: 1s;
  left: 0;
}

.nav-link {
  padding: 10px 2px;
  position: relative;
  overflow: hidden;
  font-size: 14px;

  &+& {
    margin-left: 20px;
  }
}
</style>
