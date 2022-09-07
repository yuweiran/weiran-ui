<template>
  <div class="wr-full-height">
    <div
      class="wr-full-height"
      :style="{
        display: 'grid',
        'grid-template-rows': `${parseInt(headerHeight)}px 1fr`,
      }"
      v-if="type === 'header-main'"
    >
      <div :style="{ height: `${parseInt(headerHeight)}px` }">
        <slot name="header"></slot>
      </div>
      <div class="wr-overflow-auto"><slot name="main"></slot></div>
    </div>
    <div
      class="wr-full-height"
      :style="{
        display: 'grid',
        'grid-template-rows': `${parseInt(headerHeight)}px 1fr ${parseInt(
          footerHeight
        )}px`,
      }"
      v-if="type === 'header-main-footer'"
    >
      <div
        class="wr-overflow-auto"
        :style="{ height: `${parseInt(headerHeight)}px` }"
      >
        <slot name="header"></slot>
      </div>
      <div class="wr-overflow-auto"><slot name="main"></slot></div>
      <div
        class="wr-overflow-auto"
        :style="{ height: `${parseInt(footerHeight)}px` }"
      >
        <slot name="footer"></slot>
      </div>
    </div>
    <div
      class="wr-full-height"
      :style="{
        display: 'grid',
        'grid-template-rows': `1fr ${parseInt(footerHeight)}px`,
      }"
      v-if="type === 'main-footer'"
    >
      <div class="wr-overflow-auto"><slot name="main"></slot></div>
      <div
        class="wr-overflow-auto"
        :style="{ height: `${parseInt(footerHeight)}px` }"
      >
        <slot name="footer"></slot>
      </div>
    </div>
    <div
      class="wr-full-height wr-aside-main"
      :style="{
        display: 'grid',
        'grid-template-columns': `${parseInt(asideWidth)}px 1fr`,
      }"
      v-if="type === 'aside-main'"
    >
      <div
        class="wr-overflow-auto"
        :style="{ width: `${parseInt(asideWidth)}px` }"
      >
        <slot name="aside"></slot>
      </div>
      <div class="wr-overflow-auto"><slot name="main"></slot></div>
    </div>
    <div
      class="wr-full-height"
      :style="{
        display: 'grid',
        'grid-template-columns': `1fr ${parseInt(asideWidth)}px`,
      }"
      v-if="type === 'main-aside'"
    >
      <div class="wr-overflow-auto"><slot name="main"></slot></div>
      <div
        class="wr-overflow-auto"
        :style="{ width: `${parseInt(asideWidth)}px` }"
      >
        <slot name="aside"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wrContainer',
  props: {
    type: {
      type: String,
    },
    asideWidth: {
      type: [String, Number],
      default() {
        return 200
      },
    },
    headerHeight: {
      type: [String, Number],
      default() {
        return 60
      },
    },
    footerHeight: {
      type: [String, Number],
      default() {
        return 60
      },
    },
  },
}
</script>
