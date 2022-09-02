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
        style="padding: 0 4px"
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
          path: 'github',
        },
      ],
    }
  },
  methods: {
    routeChangeTo(navItem) {
      if (navItem.path !== 'github') {
        this.$router.replace(navItem.path)
      } else {
        console.log('跳转至github')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.header-line {
  border-bottom: 1px solid #888;
}
</style>
