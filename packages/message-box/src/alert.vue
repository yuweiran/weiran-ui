<template>
  <div class="wr-mask" @click.stop.prevent="close">
    <transition @after-leave="destroyEl" appear enter-active-class="animate__animated  animate__fadeIn">
      <div v-show="visible" @click.stop.prevent="" :class="['wr-message-alert']">
        <div class="wr-message-alert-header">
          <div>{{ title || '提示' }}</div>
          <div>
            <span @click="close" style="font-size: 18px" class="wr-icon-remove"></span>
          </div>
        </div>
        <div class="wr-message-alert-main">
          {{ content }}
        </div>
        <div class="wr-message-alert-footer">
          <button @click="handleConfirm(true)">{{ confirmButtonText }}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'wrMessageAlert',
  data() {
    return {
      visible: false,
      closed: false,
      resolve: null,
      reject: null,
      title: '',
      text: '',
      type: '',
      onClose: null,
      content: '',
      confirmButtonText: '确认',
    }
  },
  methods: {
    close() {
      this.closed = true
      this.visible = false
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    destroyEl() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    handleConfirm(val) {
      this.visible = false
      if (val) {
        this.resolve(val)
      } else {
        this.reject(val)
      }
    },
  },
}
</script>
