<template>
  <div style="max-width: 1200px; margin: 0 auto; height: 100%">
    <wr-container type="header-main">
      <template #header
        ><HomeHeader ref="header" @hiddenLeft="handleAsideHidden"
      /></template>
      <template #main>
        <wr-container v-show="!hiddenAside" aside-width="240" type="aside-main">
          <template #aside
            ><HomeAside @scrolltop="handleMdContentToTop"
          /></template>
          <template #main>
            <HomeMain id="mdFileShow" />
          </template>
        </wr-container>
        <HomeMain v-show="hiddenAside" id="mdFileShow2" />
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
  data() {
    return {
      hiddenAside: false,
    }
  },
  methods: {
    handleMdContentToTop() {
      this.$el.querySelector('#mdFileShow').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    },
    handleAsideHidden(state) {
      this.hiddenAside = state
    },
  },
  mounted() {
    console.log(location.href.indexOf('/wrui/guide'))
    this.hiddenAside =
      location.href.indexOf('/wrui/guide') !== -1 ? true : false
  },
}
</script>

<style lang="scss" scoped></style>
