<template>
  <div style=" margin: 0 auto; height: 100%;" class="page-container">
    <div class="page-header">
      <HomeHeader ref="header" @hiddenLeft="handleAsideHidden" />
    </div>
    <div class="page-body">
      <div class="page-aside" :style="{ width: asideWidth + 'px' }">
        <HomeAside v-if="!hiddenAside" :mini="isMini" @scrolltop="handleMdContentToTop" />
      </div>
      <div class="page-main">
        <HomeMain id="mdFileShow" />
      </div>
    </div>
    <!-- <wr-container type="header-main" header-height="64">
      <template #header>
        <HomeHeader ref="header" @hiddenLeft="handleAsideHidden" />
      </template>
      <template #main>
        <wr-container v-if="!hiddenAside" :aside-width="asideWidth" type="aside-main">
          <template #aside>
            <HomeAside :mini="isMini" @scrolltop="handleMdContentToTop" />
          </template>
          <template #main>
            <HomeMain id="mdFileShow" />
          </template>
        </wr-container>
        <HomeMain v-if="hiddenAside" id="mdFileShow2" />
      </template>
    </wr-container> -->
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
      asideWidth: 240,
    };
  },
  computed: {
    isMini() {
      if (this.asideWidth > 150) {
        return false
      }
      return true
    }
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
    handleResizeWindow() {
      if (document.body.clientWidth < 700) {
        this.asideWidth = 80
      } else {
        this.asideWidth = 240
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResizeWindow)
  },
  mounted() {
    this.handleResizeWindow()
    this.hiddenAside =
      location.href.indexOf("/wrui/guide") !== -1 ? true : false;
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResizeWindow)
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;

  .page-header {
    height: 64px;
  }

  .page-body {
    display: flex;
    flex-direction: row;
    flex: 1;
    overflow: auto;

    .page-aside {
      overflow: visible;
    }

    .page-main {
      flex: 1;
      overflow: auto;
    }
  }
}

@media screen and (max-width: 700px) {
  .menu-container {
    width: 80px;
  }


}
</style>
