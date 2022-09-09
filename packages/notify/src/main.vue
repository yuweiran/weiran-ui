<template>
  <transition
    appear
    :enter-active-class="`animate__animated animate__${appearAnimate}`"
    :leave-active-class="`animate__animated ${animateOutClass}`"
    @after-leave="destroyEl"
  >
    <div v-show="visible" :class="['wr-notify', `wr-notify-${position}`]">
      <div class="wr-notify-header">
        <div>{{ title || '提示' }}</div>
        <div><span @click="close" class="wr-icon-remove"></span></div>
      </div>
      <div>
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
      keepShow: false,
      visible: false,
      closed: false,
      title: '',
      text: '',
      type: '',
      position: 'top-right',
      appearAnimate: 'swing',
      leaveAnimate: null,
      onClose: null,
      duration: 4500,
    }
  },
  computed: {
    animateOutClass() {
      if (this.leaveAnimate) {
        return 'animate__' + this.leaveAnimate
      }
      let reflect = {
        'top-right': 'animate__fadeOutRight',
        'top-left': 'animate__fadeOutLeft',
        'bottom-left': 'animate__fadeOutLeft',
        'bottom-right': 'animate__fadeOutRight',
      }
      return reflect[this.position]
    },
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false
        // this.$destroy(true)
        // this.$el.parentNode.removeChild(this.$el)
      }
    },
  },
  methods: {
    close() {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    destroyEl() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
  },
  mounted() {
    if (!this.keepShow) {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close()
        }
      }, this.duration)
    }
    document.addEventListener('keydown', this.keydown)
  },
}
</script>
