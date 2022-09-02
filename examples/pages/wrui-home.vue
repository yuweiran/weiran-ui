<template>
  <div style="max-width: 1200px; margin: 0 auto">
    <wr-grid type="header-main">
      <template #header><HomeHeader /></template>
      <template #main>
        <wr-grid type="aside-main">
          <template #aside><HomeAside /></template>
          <template #main>
            <HomeMain />
          </template>
        </wr-grid>
      </template>
    </wr-grid>
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
}
</script>

<style lang="scss" scoped></style>
