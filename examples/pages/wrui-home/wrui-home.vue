<template>
  <div style=" margin: 0 auto; height: 100%">
    <wr-container type="header-main" header-height="64">
      <template #header>
        <HomeHeader ref="header" @hiddenLeft="handleAsideHidden" />
      </template>
      <template #main>
        <wr-container v-if="!hiddenAside" aside-width="240" type="aside-main">
          <template #aside>
            <HomeAside @scrolltop="handleMdContentToTop" />
          </template>
          <template #main>
            <HomeMain id="mdFileShow" />
          </template>
        </wr-container>
        <HomeMain v-if="hiddenAside" id="mdFileShow2" />
      </template>
    </wr-container>
  </div>
</template>

<script>
import HomeAside from "./wrui-aside.vue";
import HomeHeader from "./wrui-header.vue";
import HomeMain from "./wrui-main.vue";
export default {
  components: {
    HomeAside,
    HomeHeader,
    HomeMain,
  },
  data() {
    return {
      hiddenAside: false,
    };
  },
  methods: {
    handleMdContentToTop() {
      this.$el.querySelector("#mdFileShow").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    handleAsideHidden(state) {
      this.hiddenAside = state;
    },
  },
  mounted() {
    this.hiddenAside =
      location.href.indexOf("/wrui/guide") !== -1 ? true : false;
  },
};
</script>

<style lang="scss" scoped>

</style>
