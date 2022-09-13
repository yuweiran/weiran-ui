<template>
  <div class="wr-select">
    <input
      :tabindex="tabindex"
      v-bind="$attrs"
      :class="['wr-select-inner']"
      :readonly="readonly"
      :autocomplete="autocomplete"
      ref="input"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
    <div class="wr-select-items-container" v-show="focused">
      <template v-if="list.length === 0">
        <div>无匹配数据</div>
      </template>
      <template v-else>
        <div
          v-for="item in list"
          @click.prevent="handleSelectCurrentItem(item)"
          :key="item.value"
          style="cursor: pointer"
        >
          {{ item.text }}
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'wrSelect',

  inheritAttrs: false,

  data() {
    return {
      focused: false,
      showList: true,
    }
  },

  props: {
    list: Array,
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
    handleSelectCurrentItem(item) {
      this.$emit('input', item.value)
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
