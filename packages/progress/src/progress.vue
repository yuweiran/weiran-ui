<template>
  <div class="wr-flex-ac wr-margin-10">
    <div class="wr-progress-container wr-flex-1 wr-flex-ac">
      <div
        :class="[
          'wr-progress',
          type ? `wr-progress-${type}` : '',
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

<style lang="scss" scoped>
.wr-progress-container {
  width: 100%;
  background-color: #0002;
}
.wr-progress {
  position: relative;
  height: 10px;
  background-color: #1989fa;
  transition: 500ms;
  overflow: hidden;
}
.wr-progress::before {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
}

.wr-progress-status-exception {
  background-color: #ee0a24;
}
.wr-progress-status-warning {
  background-color: #ff5722;
}
.wr-progress-status-success {
  background-color: #07c160;
}

.wr-progress-load-line::before {
  left: -100%;
  width: 100%;
  background: linear-gradient(90deg, transparent, #fff6);
  animation: wr-progress-load-animate 2s ease-in-out infinite;
}

.wr-progress-load-zebra {
  width: 100%;
  background-image: linear-gradient(
    -45deg,
    #fff6 25%,
    transparent 25%,
    transparent 50%,
    #fff6 50%,
    #fff6 75%,
    transparent 75%,
    transparent
  );
  background-size: 12px 12px;
  animation: wr-progress-load-animate-zebra 1s linear infinite;
}
.wr-flex-ac {
  display: flex;
  align-items: center;
}

.wr-flex-1 {
  flex: 1;
}
.wr-progress-value {
  width: 60px;
  padding: 0 2px;
}
.wr-margin-10 {
  margin: 10px 0;
}

@keyframes wr-progress-load-animate {
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
}
@keyframes wr-progress-load-animate-zebra {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 12px 0;
  }
}
</style>
