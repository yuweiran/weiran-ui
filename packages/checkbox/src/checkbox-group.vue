<template>
  <div class="wr-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wrCheckboxGroup',
  componentName: 'wrCheckboxGroup',
  data() {
    return {}
  },
  props: {
    value: Array,
  },
}
</script>
