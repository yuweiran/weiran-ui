<template>
  <div class="wr-progress">
    <div class="wr-progress-container wr-flex-1 wr-flex-ac">
      <div
        :class="[
          'wr-progress-loaded',
          status ? `wr-progress-status-${status}` : '',
          stripeType ? `wr-progress-load-${stripeType}` : '',
        ]"
        :style="{
          width: progressValue + '%',
          'background-color': customColor ? currentCustomColor : 'none',
        }"
      ></div>
    </div>
    <div class="wr-progress-value">
      {{ hiddenPercent ? '' : progressValue + '%' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'wrProgress',
  props: {
    percent: {
      type: [Number, String],
      default() {
        return 0
      },
      validator(val) {
        return val >= 0
      },
    },
    total: {
      type: [Number, String],
      default() {
        return 100
      },
      validator(val) {
        return val > 0
      },
    },
    type: {
      type: String,
      default: 'normal',
    },
    hiddenPercent: {
      type: Boolean,
      default() {
        return false
      },
    },
    stripeType: {
      type: String,
      validator(val) {
        return ['line', 'zebra'].indexOf(val) !== -1
      },
    },
    status: {
      type: String,
      validator(val) {
        return ['normal', 'success', 'exception', 'warning'].indexOf(val) !== -1
      },
    },
    customColor: [Array, String],
  },
  computed: {
    progressValue() {
      let percent = parseFloat(this.percent)
      let total = parseFloat(this.total)
      if (percent >= total) {
        return 100
      } else {
        return ((percent / total) * 100).toFixed(0)
      }
    },
    currentCustomColor() {
      let percent = parseFloat(this.percent)
      if (percent > this.total) percent = this.total
      let isArr = Array.isArray(this.customColor)
      if (isArr) {
        let target = null
        let maxPercentItem = null
        this.customColor.forEach((item, index) => {
          let val = parseFloat(item.percent) - percent
          if (target) {
            if (val >= 0 && val < target.value) {
              target = {
                value: val,
                index,
              }
            }
          } else if (val >= 0) {
            target = {
              value: parseFloat(item.percent) - percent,
              index,
            }
          }
          if (maxPercentItem) {
            if (item.percent - maxPercentItem.percent > 0) {
              maxPercentItem = item
            }
          } else {
            maxPercentItem = item
          }
        })
        if (!target) {
          //比如传入的自定义数据最大percent小于total？prop的percent介于最大percent和total之间时
          return maxPercentItem.color
        }
        return this.customColor[target['index']].color
      } else {
        return this.customColor
      }
    },
  },
}
</script>
