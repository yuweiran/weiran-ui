## 组件使用指南

### 安装

```shell
npm install weiran-ui --save
```

### 全局引入
**index.js**

```js
import Vue from 'vue'
import WeiranUi from 'weiran-ui';
import "weiran-ui/lib/index.min.css"
Vue.use(WeiranUi)
```

**example.vue**
```html
<template>
  <wr-button>按钮</wr-button>
</template>
```