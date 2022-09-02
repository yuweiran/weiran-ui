<template>
  <div
    :class="[type === 'textarea' ? 'wr-textarea' : 'wr-input']"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <template v-if="type !== 'textarea'">
      <input
        :tabindex="tabindex"
        v-if="type !== 'textarea'"
        v-bind="$attrs"
        :class="['wr-input-inner']"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :readonly="readonly"
        :autocomplete="autoComplete || autocomplete"
        ref="input"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />
    </template>
    <textarea
      v-else
      :tabindex="tabindex"
      class="wr-textarea-inner"
      @input="handleInput"
      :style="{ height: `${parseInt(height)}px` }"
      ref="textarea"
      v-bind="$attrs"
      :disabled="inputDisabled"
      :readonly="readonly"
      :autocomplete="autoComplete || autocomplete"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    >
    </textarea>
    <span
      v-if="isWordLimitVisible && type === 'textarea'"
      class="el-input__count"
      >{{ textLength }}/{{ upperLimit }}</span
    >
  </div>
</template>
<script>
export default {
  name: 'wrInput',

  inheritAttrs: false,

  data() {
    return {
      textareaCalcStyle: {},
      hovering: false,
      focused: false,
      isComposing: false,
      passwordVisible: false,
    }
  },

  props: {
    value: [String, Number],
    size: String,
    resize: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text',
    },
    autosize: {
      type: [Boolean, Object],
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    /** @Deprecated in next major version */
    autoComplete: {
      type: String,
      validator() {
        process.env.NODE_ENV !== 'production' &&
          console.warn(
            "[Element Warn][Input]'auto-complete' property will be deprecated in next major version. please use 'autocomplete' instead."
          )
        return true
      },
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    tabindex: String,
    height: [String, Number],
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize
    },
    validateState() {
      return this.elFormItem ? this.elFormItem.validateState : ''
    },
    needStatusIcon() {
      return this.elForm ? this.elForm.statusIcon : false
    },
    validateIcon() {
      return {
        validating: 'el-icon-loading',
        success: 'el-icon-circle-check',
        error: 'el-icon-circle-close',
      }[this.validateState]
    },
    inputSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
    },
    inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ''
        : String(this.value)
    },
    showClear() {
      return (
        this.clearable &&
        !this.inputDisabled &&
        !this.readonly &&
        this.nativeInputValue &&
        (this.focused || this.hovering)
      )
    },
    showPwdVisible() {
      return (
        this.showPassword &&
        !this.inputDisabled &&
        !this.readonly &&
        (!!this.nativeInputValue || this.focused)
      )
    },
    isWordLimitVisible() {
      return (
        this.showWordLimit &&
        this.$attrs.maxlength &&
        (this.type === 'text' || this.type === 'textarea') &&
        !this.inputDisabled &&
        !this.readonly &&
        !this.showPassword
      )
    },
    upperLimit() {
      return this.$attrs.maxlength
    },
    textLength() {
      if (typeof this.value === 'number') {
        return String(this.value).length
      }

      return (this.value || '').length
    },
    inputExceed() {
      return this.isWordLimitVisible && this.textLength > this.upperLimit
    },
  },

  watch: {
    value() {
      this.$nextTick(this.resizeTextarea)
    },
    nativeInputValue() {
      this.setNativeInputValue()
    },
    type() {
      this.$nextTick(() => {
        this.setNativeInputValue()
        this.resizeTextarea()
        this.updateIconOffset()
      })
    },
  },

  methods: {
    focus() {
      this.getInput().focus()
    },
    blur() {
      this.getInput().blur()
    },
    getMigratingConfig() {
      return {
        props: {
          icon: 'icon is removed, use suffix-icon / prefix-icon instead.',
          'on-icon-click': 'on-icon-click is removed.',
        },
        events: {
          click: 'click is removed.',
        },
      }
    },
    handleBlur(event) {
      this.focused = false
      this.$emit('blur', event)
    },
    select() {
      this.getInput().select()
    },
    setNativeInputValue() {
      const input = this.getInput()
      if (!input) return
      if (input.value === this.nativeInputValue) return
      input.value = this.nativeInputValue
    },
    handleFocus(event) {
      this.focused = true
      this.$emit('focus', event)
    },
    handleCompositionStart(event) {
      this.$emit('compositionstart', event)
      this.isComposing = true
    },
    handleCompositionEnd(event) {
      this.$emit('compositionend', event)
      if (this.isComposing) {
        this.isComposing = false
        this.handleInput(event)
      }
    },
    handleInput(event) {
      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (this.isComposing) return

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (event.target.value === this.nativeInputValue) return

      this.$emit('input', event.target.value)

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      this.$nextTick(this.setNativeInputValue)
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    },
    calcIconOffset(place) {
      let elList = [].slice.call(
        this.$el.querySelectorAll(`.el-input__${place}`) || []
      )
      if (!elList.length) return
      let el = null
      for (let i = 0; i < elList.length; i++) {
        if (elList[i].parentNode === this.$el) {
          el = elList[i]
          break
        }
      }
      if (!el) return
      const pendantMap = {
        suffix: 'append',
        prefix: 'prepend',
      }

      const pendant = pendantMap[place]
      if (this.$slots[pendant]) {
        el.style.transform = `translateX(${place === 'suffix' ? '-' : ''}${
          this.$el.querySelector(`.el-input-group__${pendant}`).offsetWidth
        }px)`
      } else {
        el.removeAttribute('style')
      }
    },
    updateIconOffset() {
      this.calcIconOffset('prefix')
      this.calcIconOffset('suffix')
    },
    clear() {
      this.$emit('input', '')
      this.$emit('change', '')
      this.$emit('clear')
    },
    handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible
      this.$nextTick(() => {
        this.focus()
      })
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea
    },
    getSuffixVisible() {
      return (
        this.$slots.suffix ||
        this.suffixIcon ||
        this.showClear ||
        this.showPassword ||
        this.isWordLimitVisible ||
        (this.validateState && this.needStatusIcon)
      )
    },
  },

  created() {
    this.$on('inputSelect', this.select)
  },

  mounted() {
    this.setNativeInputValue()
    this.updateIconOffset()
  },

  updated() {
    this.$nextTick(this.updateIconOffset)
  },
}
</script>
<style lang="scss" scoped>
.wr-input-inner {
  width: 100%;
  outline: none;
  padding: 6px 4px;
}

.wr-textarea-inner {
  outline: none;
  resize: none;
  width: 100%;
  padding: 6px 4px;
}
</style>
