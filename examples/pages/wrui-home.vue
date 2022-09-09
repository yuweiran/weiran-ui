<template>
  <div style="max-width: 1200px; margin: 0 auto">
    <wr-container type="header-main">
      <template #header><HomeHeader /></template>
      <template #main>
        <wr-container aside-width="240" type="aside-main">
          <template #aside
            ><HomeAside @scrolltop="handleMdContentToTop"
          /></template>
          <template #main>
            <HomeMain id="mdFileShow" />
          </template>
        </wr-container>
      </template>
    </wr-container>
  </div>
</template>

<script>
import HomeAside from './wrui-aside.vue'
import HomeHeader from './wrui-header.vue'
import HomeMain from './wrui-main.vue'
export default {
  components: {
    HomeAside,
    HomeHeader,
    HomeMain,
  },
  methods: {
    handleMdContentToTop() {
      this.$el
        .querySelector('#mdFileShow')
        .scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
