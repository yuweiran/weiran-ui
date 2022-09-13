<template>
  <transition
    appear
    :enter-active-class="`animate__animated ${animateInClass}`"
    :leave-active-class="`animate__animated ${animateOutClass}`"
    @after-leave="destroyEl"
  >
    <div v-show="visible" :class="['wr-message', type ? `is-${type}` : '']">
      <div class="wr-message-content">
        {{ text }}
      </div>
      <div v-if="showClose">
        <span
          @click="close"
          style="font-size: 16px; font-weight: bold"
          class="wr-icon-remove"
        ></span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'wrMessage',
  data() {
    return {
      showClose: false,
      visible: false,
      closed: false,
      title: '',
      text: '',
      type: 'default',
      appearAnimate: null,
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
      return 'animate__fadeOut'
    },
    animateInClass() {
      if (this.appearAnimate) {
        return 'animate__' + this.appearAnimate
      }
      return 'animate__fadeIn'
    },
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false
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
    this.timer = setTimeout(() => {
      if (!this.closed) {
        this.close()
      }
    }, this.duration)
    document.addEventListener('keydown', this.keydown)
  },
}
</script>
