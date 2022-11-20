## Icon

### 基本用法

:::demo
```html
<template>
  <div >
    <i class="wr-icon-edit"></i>
    <i class="wr-icon-search"></i>
    <i class="wr-icon-delete"></i>
  </div>
</template>

```
:::

### 图标列表
<div class="wr-icon-container">
  <div class="wr-icon-item--show" v-for="icon in $icons" :key="icon">
    <div :class="['wr-icon-item',icon]"></div>
    <div class="wr-icon-text">{{icon}}</div>
  </div>
</div>