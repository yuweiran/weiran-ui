## Badge


### 基本用法
:::demo
```html
<template>
  <wr-badge  value='2'><wr-button>测试按钮</wr-button></wr-badge>
  <wr-badge type="success"  value='new'><wr-button>测试按钮</wr-button></wr-badge>
  <wr-badge value='hot' type='danger'><wr-button>测试按钮</wr-button></wr-badge>
  <wr-badge :value='100' type="danger" :limit='99'><wr-button>测试按钮</wr-button></wr-badge>
  <wr-badge :value='77' :showBadge='isShow' type="warning" :limit='99'><wr-button @click='isShow=!isShow'>测试按钮</wr-button></wr-badge>
</template>
<script>
  export default {
    data(){
      return {
        isShow:true
      }
    }
  }
</script>
```
:::

### 小圆点
:::demo
```html
<template>
  <wr-badge  is-dot><wr-button>测试按钮</wr-button></wr-badge>
  <wr-badge  is-dot type="danger"><wr-button>测试按钮</wr-button></wr-badge>
  <wr-badge  is-dot type="success"><wr-button>测试按钮</wr-button></wr-badge>
  <wr-badge  is-dot type="warning"><wr-button>测试按钮</wr-button></wr-badge>
</template>
<script>
  export default {
    data(){
      return {
        isShow:true
      }
    }
  }
</script>
```
:::
