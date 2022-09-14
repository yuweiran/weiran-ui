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
