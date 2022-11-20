<template>
  <div class="wr-mask" @click.stop.prevent="close">
    <transition @after-leave="destroyEl" appear enter-active-class="animate__animated  animate__fadeIn">
      <div v-show="visible" @click.stop.prevent="" :class="['wr-message-prompt']">
        <div class="wr-message-prompt-header">
          <div>{{ title || '提示' }}</div>
          <div>
            <span @click="close" style="font-size: 13px" class="wr-icon-remove"></span>
          </div>
        </div>
        <div class="wr-message-prompt-main">
          <div style="margin-bottom: 4px; ">{{ content }}</div>
          <wr-input v-model="inputValue"></wr-input>
        </div>
        <div class="wr-message-prompt-footer">
          <button class="wr-message-prompt-footer-confirm" @click="handleConfirm(true)">
            {{ confirmButtonText }}
          </button>
          <button @click="handleConfirm(false)">{{ cancelButtonText }}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import WrInput from '../../input/src/input.vue'
export default {
  name: 'wrMessagePrompt',
  data() {
    return {
      visible: false,
      closed: false,
      resolve: null,
      reject: null,
      title: '',
      text: '',
      onClose: null,
      content: '',
      inputValue: '',
      cancelButtonText: '取消',
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
        this.resolve(this.inputValue)
      } else {
        this.reject(val)
      }
    },
  },
  components: {
    WrInput,
  },
}
</script>
