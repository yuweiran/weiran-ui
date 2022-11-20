<template>
  <div @click="handleChangeSliderState" :style="{height:height?height+'px':'8px'}" @mouseleave="handleSliderLeave"
    @mousemove="handleSliderHover" class="wr-slider" ref="slider">
    <div class="wr-slider-loaded" :style="{ width: currentValue + '%' }">
      <div class="wr-slider-button" @mouseleave="handleControllerLeave" @mouseover="handleControllerOver"
        @mousedown.prevent.stop="handleControlBtn" @mousemove.prevent.stop="" @click.prevent.stop="">
        <slot>
          <div class="wr-slider-inner-btn"></div>
        </slot>
        <div v-if="firstRenderSliderBtn" v-show="controllerMousedown" class="wr-slider-tooltip">
          {{ toolTipValue }}
        </div>
      </div>
      <div v-if="firstRenderSliderloader" v-show="!controllerMousedown && isloaderHover" :style="{
        left: loadToolTipLeft + 'px'
      }" class="wr-slider-loader-tooltip">
        {{ loadToolTipValue }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wrSlider',
  props: {
    step: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 100
    },
    formatTooltip: {
      type: Function
    },
    height: Number,
    value: {
      type: Number
    },
  },
  data() {
    return {
      isControlled: false,
      isloaderHover: false,
      currentValue: 0,
      loadToolTipValue: 0,
      loadToolTipLeft: 0,
      firstRenderSliderBtn: false,
      toolTipValue: 0,
      firstRenderSliderloader: false,
      controllerMousedown: false
    }
  },
  created() {
    if (this.formatTooltip) {
      this.toolTipValue = this.formatTooltip(this.currentValue)
    }
  },
  methods: {
    handleSliderLeave() {
      this.isloaderHover = false
      this.firstRenderSliderloader = false
    },
    handleControllerLeave() {
      this.isControlled = false
    },
    handleControllerOver() {
      this.isControlled = true
      this.firstRenderSliderBtn = true
    },
    handleSliderHover(e) {
      this.loadToolTipLeft = e.offsetX
      this.firstRenderSliderloader = true
      this.isloaderHover = true
      let width = this.$refs.slider.clientWidth
      this.calculateProcess({ current: e.offsetX, width, setLoadToolTip: true, setToolTip: true })
    },
    handleChangeSliderState(e) {
      if (!this.isControlled) {
        let width = this.$refs.slider.clientWidth
        this.calculateProcess({ current: e.offsetX, width, emitInput: true, emitChange: true })

      }
    },

    handleControlBtn() {
      //这个方法第一次用

      let DOMRect = this.$refs.slider.getBoundingClientRect()
      let left = DOMRect.left//距离屏幕左侧距离
      this.controllerMousedown = true
      let width = this.$refs.slider.clientWidth
      window.document.onmousemove = (e) => {
        let v = e.clientX - left
        let target = 0
        if (v >= width) {
          target = width
        } else if (v > 0) {
          target = v
        }
        //得到百分比
        this.currentValue = this.calculateProcess({ current: target, width, setToolTip: true })
      }
      window.document.onmouseup = this.clearControlEvent
      this.$refs.slider.onmouseup = this.clearControlEvent
    },
    //计算进度
    calculateProcess({ current, width, realvalue, setToolTip = false, setLoadToolTip = false, emitInput = false, emitChange = false }) {
      let value
      //current为当前鼠标离最左端位置距离
      let total = this.total
      let step = this.step
      if (realvalue) {
        value = realvalue
        if (realvalue > total) {
          value = total
        }
        if (realvalue < 0) {
          value = 0
        }
      } else {
        value = (current / width) * total
      }
      //找到最近的可选值，并返回
      let section = Math.round(value / step)
      let target = section * step
      if (this.formatTooltip) {
        target = this.formatTooltip(target)//tooltip值
      }
      if (setToolTip) {
        this.toolTipValue = target
      }
      if (emitChange || this.controllerMousedown) {
        this.$emit('change', value)
      }
      if (this.controllerMousedown && emitInput) {
        this.$emit('input', value)
      }
      if (setLoadToolTip) {
        this.loadToolTipValue = target
      }
      return section * step / total * 100
      //返回百分比
    },
    //清空事件
    clearControlEvent() {
      window.document.onmousemove = null
      this.$refs.slider.onmousemove = null
      window.document.onmouseup = null
      this.isControlled = false
      this.controllerMousedown = false
    }
  },
  watch: {
    value: {
      handler(val) {
        if (val) {
          if (!this.controllerMousedown) {
            this.$nextTick(() => {
              let width = this.$refs.slider.clientWidth
              let target = this.calculateProcess({
                realvalue: val,
                width,
              })
              this.currentValue = target
            })
          }
        }
      },
      immediate: true
    },
  }
}
</script>