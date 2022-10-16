<template>
  <div ref="wrSelect" class="wr-select">
    <input v-bind="$attrs" :class="['wr-select-inner']" :readonly="readonly" ref="input" @input="handleInput"
      @focus="handleFocus" @blur="handleBlur" @click="focused = !focused" @change="handleChange" />
    <div class="wr-select-items-container" @mousedown.stop.prevent="" v-show="focused">
      <template v-if="list.length === 0">
        <div>无匹配数据</div>
      </template>
      <template v-else>
        <div :class="['wr-select-item',{'is-selected':item[propsReflect.value]===selectItem[propsReflect.value]}]"
          v-for="item in list" @click.stop="handleSelectCurrentItem(item)" :key="item[propsReflect.id]">
          {{ item[propsReflect.label] }}
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
      selectItem: {}
    }
  },

  props: {
    list: Array,
    value: [String, Number],
    size: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    props: Object
  },

  computed: {
    propsReflect() {

      return {
        id: 'id',
        value: 'value',
        label: 'label',
        ...this.props
      }
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ''
        : String(this.value)
    },
  },

  watch: {
    focused(value) {
      if (value) {
        this.getPosition()
      }
    },
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
      this.$emit('focus', event)
    },
    handleSelectCurrentItem(item) {
      this.selectItem = item
      this.$emit('input', item[this.propsReflect.label])
      this.focused = false
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
    getPosition() {
      console.dir(this.$refs.wrSelect)
      console.dir(this.$refs.wrSelect.clientTop)
      console.dir(this.$refs.wrSelect.offsetTop)
      console.dir(this.$refs.wrSelect.scrollTop)
    }
  },
  created() {
    this.$on('inputSelect', this.select)
  },

  mounted() {
    this.setNativeInputValue()
    console.log(this.propsReflect)
  },
}
</script>
