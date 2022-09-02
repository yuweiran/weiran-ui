<template>
  <button
    @click="handleClick"
    :class="[
      'wr-button',
      buttonSize !== 'small' ? `wr-button-${buttonSize}` : '',
      buttonType !== 'default' ? `wr-button-${buttonType}` : '',
      {
        'wr-disbaled': disabled,
        'wr-dashed': dashed,
        'wr-circle': circle,
        'wr-button-plain': plain,
      },
    ]"
  >
    <i v-if="icon" :class="[icon ? `iconfont ${icon}` : '']"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'wrButton',
  props: {
    disabled: {
      type: Boolean,
      default() {
        return false
      },
    },
    dashed: {
      type: Boolean,
      default() {
        return false
      },
    },
    circle: {
      type: Boolean,
      default() {
        return false
      },
    },
    plain: {
      type: Boolean,
      default() {
        return false
      },
    },
    type: {
      type: String,
      default() {
        return 'default'
      },
    },
    size: {
      type: String,
      default() {
        return 'small'
      },
    },
    icon: String,
  },
  methods: {
    handleClick(evt) {
      if (!this.disabled) {
        this.$emit('click', evt)
      }
    },
  },
  computed: {
    buttonType() {
      let type = this.type
      return ['success', 'primary', 'danger', 'default', 'warning'].indexOf(
        type
      ) === -1
        ? 'default'
        : type
    },
    buttonSize() {
      let size = this.size
      return ['medium', 'small', 'mini'].indexOf(size) === -1 ? 'small' : size
    },
  },
}
</script>
<style lang="scss" scoped>
.wr-button {
  background-color: #fff;
  font-size: 13px;
  height: 32px;
  padding: 0px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #606266;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.wr-button:hover {
  border: 1px solid rgb(100, 149, 237);
  background-color: rgb(239, 244, 253);
  color: rgb(100, 149, 237);
}

// 禁用
.wr-disbaled {
  user-select: none;
  cursor: not-allowed;
  color: #c0c4cc;
  border-color: #ebeef5;
  &:hover {
    /* cursor: not-allowed; */
    color: #c0c4cc;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}

//虚线边框
.wr-dashed {
  border-style: dashed !important;
  &:hover {
    /* cursor: not-allowed; */
    border-style: dashed !important;
  }
}

//圆形按钮
.wr-circle {
  border-radius: 50%;
  padding: 0;
  font-size: 16px;
}

.wr-button-medium {
  height: 36px;
}
.wr-button-mini {
  height: 28px;
  padding: 0 10px;
}
.wr-circle.wr-button-mini {
  height: 30px;
  width: 30px;
}
.wr-circle {
  height: 34px;
  width: 34px;
}
.wr-circle.wr-button-medium {
  height: 38px;
  width: 38px;
}

//以下为按钮类型
//危险按钮
.wr-button-danger {
  color: white;
  background-color: #ee0a24;
  border: 1px solid #ee0a24;
  &:hover {
    background-color: inherit;
    background-color: #ee0a24;
    border: 1px solid #ee0a24;
    color: white;
    opacity: 0.8;
  }
}
//成功按钮
.wr-button-success {
  color: white;
  background-color: #07c160;
  border: 1px solid #07c160;
  &:hover {
    background-color: inherit;
    border: 1px solid #07c160;
    background-color: #07c160;
    color: white;
    opacity: 0.8;
  }
}
//警告按钮
.wr-button-warning {
  color: white;
  background-color: #ff5722;
  border: 1px solid #ff5722;
  &:hover {
    background-color: inherit;
    border: 1px solid #ff5722;
    background-color: #ff5722;
    color: white;
    opacity: 0.8;
  }
}

//主要按钮
.wr-button-primary {
  color: white;
  background-color: #1989fa;
  border: 1px solid #1989fa;
  &:hover {
    background-color: inherit;
    border: 1px solid #1989fa;
    background-color: #1989fa;
    color: white;
    opacity: 0.8;
  }
}

.iconfont + span {
  margin-left: 6px;
}

.wr-button-plain {
  background-color: #fff;
  &:hover {
    background-color: #fff;
    color: inherit;
  }
}
.wr-button-plain.wr-button-danger {
  color: #ee0a24;

  &:hover {
    opacity: 0.8;
  }
}
.wr-button-plain.wr-button-warning {
  color: #ff5722;

  &:hover {
    opacity: 0.8;
  }
}
.wr-button-plain.wr-button-success {
  color: #07c160;

  &:hover {
    opacity: 0.8;
  }
}
.wr-button-plain.wr-button-primary {
  color: #1989fa;

  &:hover {
    opacity: 0.8;
  }
}
</style>
