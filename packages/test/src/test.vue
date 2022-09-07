<template>
  <div :class="['wr-notify', `wr-notify-${position}`]">
    <div class="wr-flex-ac-js wr-padding-bottom-10">
      <div>{{ title || '提示' }}</div>
      <div>关闭</div>
    </div>
    <div
      class="animate__swing"
      :style="{ color: type === 'error' ? 'red' : '' }"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'wrNotify',
  data() {
    return {
      title: '',
      text: '',
      type: '',
      position: 'top-right',
    }
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.wr-notify {
  position: absolute;
  padding: 10px;
  width: 200px;
  background-color: #fff;
  box-shadow: 0 0 2px #000;
}
.wr-notify-top-right {
  right: 20px;
}
.wr-notify-top-left {
  left: 20px;
}
.wr-notify-bottom-right {
  right: 20px;
}

.wr-notify-bottom-left {
  left: 20px;
}

.wr-flex-ac-js {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wr-padding-bottom-10 {
  padding-bottom: 10px;
}
.wr-curser-pointer {
  cursor: pointer;
}
</style>
