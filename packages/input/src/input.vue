<template>
  <div :class="[type === 'textarea' ? 'wr-textarea' : 'wr-input']">
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
      focused: false,
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
    inputDisabled() {
      return this.disabled
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ''
        : String(this.value)
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
  },

  watch: {
    nativeInputValue() {
      this.setNativeInputValue()
    },
    type() {
      this.$nextTick(() => {
        this.setNativeInputValue()
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
    handleInput(event) {
      if (event.target.value === this.nativeInputValue) return

      this.$emit('input', event.target.value)

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      this.$nextTick(this.setNativeInputValue)
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
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
  },

  created() {
    this.$on('inputSelect', this.select)
  },

  mounted() {
    this.setNativeInputValue()
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
