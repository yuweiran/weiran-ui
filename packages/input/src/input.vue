<template>
  <div :class="[type === 'textarea' ? 'wr-textarea' : 'wr-input']">
    <template v-if="type !== 'textarea'">
      <input :tabindex="tabindex" v-if="type !== 'textarea'" v-bind="$attrs" :class="['wr-input-inner']"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" :readonly="readonly"
        :autocomplete="autocomplete" ref="input" @input="handleInput" @focus="handleFocus" @blur="handleBlur"
        @change="handleChange" />
    </template>
    <textarea v-else :tabindex="tabindex" class="wr-textarea-inner" @input="handleInput" :style="{
      height: `${typeof height === 'number' ? height + px : height}`,
      resize: resize,
    }" ref="textarea" v-bind="$attrs" :disabled="inputDisabled" :readonly="readonly" :autocomplete="autocomplete"
      @focus="handleFocus" @blur="handleBlur" @change="handleChange">
    </textarea>
    <span v-if="isWordLimitVisible" class="wr-input__count">{{ textLength }}/{{ upperLimit }}</span>
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
    resize: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text',
    },
    autocomplete: {
      type: String,
      default: 'off',
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
