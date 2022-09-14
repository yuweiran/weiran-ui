<template>
  <label class="wr-radio">
    <span :class="['wr-radio-cover', model === label ? 'is-selected' : '']">
      <input
        ref="radio"
        :class="['wr-radio-inner']"
        @change="handleChange"
        v-model="model"
        :value="label"
        type="radio"
      />
    </span>
    <span v-if="$slots.default" class="wr-radio-label"><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: 'wrRadio',
  data() {
    return {}
  },
  props: {
    value: {},
    label: {},
  },
  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit('change', this.model)
      })
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
        this.$refs.radio &&
          (this.$refs.radio.checked = this.model === this.label)
      },
    },
  },
}
</script>
