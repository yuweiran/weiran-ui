<template>
  <div class="wr-dropdown" ref="dropdown" @mouseleave="handleHiddenList">
    <div class="wr-dropdown-body" @mouseover="handleRenderlist">
      <slot></slot>
    </div>
    <div class="wr-dropdown-list" @click="handleClick" :class="classList" :style="position"
      @mouseover="handleClearTimer" ref="dropdownlist" v-show="isRenderred">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script>
import Emitter from '../../../src/utils/emitter'

export default {
  name: 'wrDropdown',
  mixins: [Emitter],
  props: {
    placement: {
      type: String,
      default: 'bottom',
      validator(val) {
        return ['bottom', 'top', 'top-start', 'top-end', 'bottom-start', 'bottom-end'].indexOf(val) !== -1
      }
    },
    autoHidden: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dropdownHeight: 0,
      isRenderred: false,
      timer: null,
      offsetY: 0,
      isSpecialPlacement: '',
      position: {}
    }
  },
  computed: {

    classList() {
      let placement = this.placement

      if (this.isSpecialPlacement) {
        placement = this.isSpecialPlacement
      }
      return placement.split('-').map((item => {
        return `is-${item}`
      }))
    }
  },
  mounted() {
    this.dropdownHeight = this.$refs.dropdown.clientHeight
  },
  methods: {
    getPosition() {
      let placement = this.placement
      if (this.isSpecialPlacement) {
        placement = this.isSpecialPlacement
      }
      let height = this.dropdownHeight
      let gap = 10
      let reflect = {
        'bottom': { top: gap, left: '50%', transform: 'translateX(-50%)' },
        'top': { bottom: gap, left: '50%', transform: 'translateX(-50%)' },
        'bottom-start': { top: gap, left: 0 },
        'bottom-end': { top: gap, right: 0 },
        'top-start': { bottom: gap, left: 0 },
        'top-end': { bottom: gap, right: 0 }
      }
      if (reflect[placement].top) {
        reflect[placement].top = `${reflect[placement].top + height}px`
      } else {
        reflect[placement].bottom = `${reflect[placement].bottom + height}px`
      }
      let target = {
        ...reflect[placement]
      }
      return target
    },
    handleRenderlist() {
      if (!this.isRenderred) {
        this.position = this.getPosition()
        this.isRenderred = true
        this.$nextTick(() => {
          let listInfo = this.$refs.dropdownlist.getBoundingClientRect()
          let dropdownInfo = this.$refs.dropdown.getBoundingClientRect()
          let listContainerHeight = listInfo.height
          if (this.placement.split('-').indexOf('top') !== -1) {
            let s = dropdownInfo.top - listContainerHeight
            if (s < 20) {
              this.isSpecialPlacement = this.placement.split('-').map(item => {
                return item === 'top' ? 'bottom' : item
              }).join('-')
            }
          } else {
            let s = dropdownInfo.bottom - listContainerHeight
            if (s < 20) {
              this.isSpecialPlacement = this.placement.split('-').map(item => {
                return item === 'bottom' ? 'top' : item
              }).join('-')
            }
          }
          this.position = this.getPosition()
        })
        this.$refs.dropdownlist.style.opacity = 0
        this.handleClearTimer()
        setTimeout(() => {
          this.$refs.dropdownlist.style.opacity = 1
        }, 200);
      }
    },
    handleHiddenList() {
      this.timer = setTimeout(() => {
        this.isRenderred = false
        this.isSpecialPlacement = ''
      }, 200)
    },
    handleClearTimer() {
      clearTimeout(this.timer)
    },
    handleClick() {
      if (this.autoHidden) {
        this.isRenderred = false
        this.isSpecialPlacement = ''
      }
    }
  }
}
</script>
