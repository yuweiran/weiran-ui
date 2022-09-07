<template>
  <transition
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__swing"
    leave-active-class="animate__bounceOutRight"
  >
    <div :class="['wr-notify', `wr-notify-${position}`]">
      <div class="wr-flex-ac-js wr-padding-bottom-10 wr-notify-header">
        <div>{{ title || '提示' }}</div>
        <div><span @click="close" class="wr-icon-remove"></span></div>
      </div>
      <div :style="{ color: type === 'error' ? 'red' : '' }">
        {{ text }}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'wrNotify',
  data() {
    return {
      isShow: true,
      title: '',
      text: '',
      type: '',
      position: 'top-right',
      animate: '',
      onClose: null,
      duration: 3000,
    }
  },
  computed: {
    animateOutClass() {
      let reflect = {
        'top-right': 'animate__bounceOutRight',
        'top-left': 'animate__bounceOutRight',
        'bottom-left': 'animate__bounceOutRight',
        'bottom-right': 'animate__bounceOutRight',
      }
      return reflect[this.position]
    },
  },
  watch: {
    isShow(newVal) {
      if (newVal) {
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    },
  },
  methods: {
    close() {
      this.isShow = true
      this.onClose()
    },
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
  },
  mounted() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (this.isShow) {
          this.close()
        }
      }, this.duration)
    }
    document.addEventListener('keydown', this.keydown)
  },
}
</script>

<style lang="scss" scoped>
.wr-notify {
  position: absolute;
  padding: 10px;
  width: 200px;
  background-color: #fff;
  box-shadow: 0 0 1px #0007;
  transition: top 500ms, bottom 500ms;

  .wr-notify-header {
    font-size: 14px;
    font-weight: bold;
  }
}
.wr-notify-top-right,
.wr-notify-bottom-right {
  right: 20px;
}
.wr-notify-top-left,
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
