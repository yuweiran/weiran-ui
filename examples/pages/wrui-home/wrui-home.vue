<template>
  <div style=" margin: 0 auto; height: 100%;" class="page-container">
    <div class="page-header">
      <HomeHeader ref="header" @hiddenLeft="handleAsideHidden" />
    </div>
    <div class="page-body">
      <div class="page-aside" v-show="!hiddenAside" :style="{ width: asideWidth + 'px' }">
        <HomeAside :mini="isMini" @scrolltop="handleMdContentToTop" />
      </div>
      <div class="page-main">
        <HomeMain id="mdFileShow" />
      </div>
    </div>
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
      location.href.indexOf("/wrui/components/") !== -1 ? false : true;
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
    flex: 1;
    overflow: hidden;

    .page-aside {
      overflow: visible;
    }

    .page-main {
      flex: 1;
      overflow-y: auto;
    }
  }
}

@media screen and (max-width: 700px) {
  .menu-container {
    width: 80px;
  }


}
</style>
