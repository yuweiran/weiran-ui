<template>
  <div id="app" style="height: 100vh">
    <WrHome style="height: 100%" />
  </div>
</template>

<script>
import WrHome from '@/pages/wrui-home.vue'
export default {
  name: 'App',
  components: {
    WrHome,
  },
}
</script>

<style lang="scss">
@import './assets/css/common.scss';
</style>
