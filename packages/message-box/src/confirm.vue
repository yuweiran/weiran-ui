<script>
export default {
  name: 'wrMessageConfirm',
  data() {
    return {
      visible: false,
      closed: false,
      title: '',
      text: '',
      type: '',
      resolve: null,
      reject: null,
      content: '',
      confirmButtonText: '确认',
      cancelButtonText: '取消',
    }
  },
  components: {},
  methods: {
    close() {
      this.closed = true
      this.visible = false
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
  render() {
    let _this = this
    let title = this.title
    let visible = this.visible
    let content = this.content
    let confirmButtonText = this.confirmButtonText
    let cancelButtonText = this.cancelButtonText
    return (
      <div
        class="wr-mask"
        vOn:click={(e) => {
          e.preventDefault()
          _this.close()
        }}
      >
        <transition
          appear={true}
          enter-active-class="animate__animated  animate__fadeIn"
          vOn:after-leave={() => {
            this.destroyEl()
          }}
        >
          <div vShow={visible} class="wr-message-confirm">
            <div class="wr-message-confirm-header">
              <div>{title || '提示'}</div>
              <div>
                <span
                  vOn:click={() => _this.close()}
                  style="font-size: 18px"
                  class="wr-icon-remove"
                ></span>
              </div>
            </div>
            <div class="wr-message-confirm-main">{content}</div>
            <div class="wr-message-confirm-footer">
              <button
                class="wr-message-confirm-footer-confirm"
                vOn:click={() => {
                  this.handleConfirm(true)
                }}
              >
                {confirmButtonText}
              </button>
              <button
                class="wr-message-confirm-footer-cancel"
                vOn:click={() => {
                  this.handleConfirm(false)
                }}
              >
                {cancelButtonText}
              </button>
            </div>
          </div>
        </transition>
      </div>
    )
  },
}
</script>
