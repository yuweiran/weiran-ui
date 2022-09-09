<template>
  <label class="wr-checkbox">
    <span :class="['wr-checkbox-cover', isChecked ? 'is-checked' : '']">
      <span :class="['wr-checkbox-check']"></span>
      <input
        v-if="trueLabel || falseLabel"
        class="wr-checkbox-inner"
        :true-value="trueLabel"
        :false-value="falseLabel"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"
        v-model="model"
        type="checkbox"
      />
      <input
        v-else
        class="wr-checkbox-inner"
        type="checkbox"
        :value="label"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"
      />
    </span>
    <span style="margin-left: 6px">
      <slot></slot>
      <span v-if="!$slots.default">{{ label }}</span>
    </span>
  </label>
</template>

<script>
import Emitter from '../../../src/utils/emitter'
export default {
  name: 'wrCheckbox',
  mixins: [Emitter],
  data() {
    return {
      selfModel: false,
      focus: false,
    }
  },
  props: {
    value: {},
    label: {},
    trueLabel: [String, Number],
    falseLabel: [String, Number],
  },
  methods: {
    handleChange(ev) {
      let value
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel
      }
      this.$emit('change', value, ev)
      this.$nextTick(() => {
        if (this.isGroup) {
          this.dispatch('wrCheckboxGroup', 'change', [
            this._checkboxGroup.value,
          ])
        }
      })
    },
  },
  computed: {
    model: {
      get() {
        return this.isGroup
          ? this.store
          : this.value !== undefined
          ? this.value
          : this.selfModel
      },

      set(val) {
        if (this.isGroup) {
          this.dispatch('wrCheckboxGroup', 'input', [val])
        } else {
          this.$emit('input', val)
          this.selfModel = val
        }
      },
    },
    isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel
      }
      return ''
    },
    isGroup() {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'wrCheckboxGroup') {
          parent = parent.$parent
        } else {
          this._checkboxGroup = parent // eslint-disable-line
          return true
        }
      }
      return false
    },
    store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value
    },
  },
}
</script>
