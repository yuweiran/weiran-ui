<template>
  <div class="wr-badge">
    <slot></slot>
    <sup
      v-show="showBadge"
      :class="[
        'wr-badge-sup',
        'wr-flex-ac',
        type ? `wr-badge-${type}` : `wr-badge-default`,
        isDot ? 'wr-badge-is-dot' : '',
      ]"
      >{{ !isDot ? valueShow : '' }}</sup
    >
  </div>
</template>

<script>
export default {
  name: 'wrBadge',
  props: {
    value: [String, Number],
    limit: Number,
    type: {
      type: String,
      validator(value) {
        return ['danger', 'default', 'success', 'warning'].indexOf(value) !== -1
      },
    },
    showBadge: {
      type: Boolean,
      default: true,
    },
    isDot: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    valueShow() {
      if (this.limit) {
        if (typeof this.value === 'number' && this.limit < this.value) {
          return this.limit + '+'
        }
        return this.value
      } else {
        return this.value
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wr-badge {
  position: relative;
  display: inline-block;
  .wr-badge-sup {
    color: #fff;
    line-height: inherit;
    position: absolute;
    height: 16px;
    font-size: 12px;
    padding: 0 3px;
    top: 0;
    right: 0;
    border-radius: 3px;
    transform: translate(50%, -50%);
  }
  .wr-badge-is-dot {
    height: 8px;
    width: 8px;
    padding: 0;
    border-radius: 50%;
  }
  .wr-badge-default {
    background-color: #1989fa;
  }
  .wr-badge-danger {
    background-color: #ee0a24;
  }
  .wr-badge-success {
    background-color: #07c160;
  }
  .wr-badge-warning {
    background-color: #ff5722;
  }
}
.wr-badge + .wr-badge {
  margin-left: 16px;
}
.wr-flex-ac {
  display: flex;
  align-items: center;
}
</style>
