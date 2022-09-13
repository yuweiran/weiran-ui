## Checkbox

### 基本使用

:::demo 
```html
<template>
    <wr-checkbox v-model="checked">选项1</wr-checkbox>
</template>
<script>
export default {
  data(){
    return {
      checked:false
    }
  }
}
</script>
```
:::

### 复选框组

:::demo 
```html 
<template>
    <wr-checkbox-group v-model="checked">
      <wr-checkbox label="选项1"></wr-checkbox>
      <wr-checkbox label="选项2"></wr-checkbox>
      <wr-checkbox label="选项3"></wr-checkbox>
    </wr-checkbox-group>
    <wr-button @click="handleLogChecked">打印</wr-button>
</template>
<script>
export default {
  data(){
    return {
      checked:['选项1','选项2']
    }
  },
  methods:{
    handleLogChecked(){
      console.log(this.checked)
    }
  }

}
</script>
```
:::


### wr-checkbox属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 值   | boolean/string/number  |    —      |    —     |
| type     | 类型   | string    |   primary / success / warning / danger  |     —    |
| is-dot     | 是否为点   | boolean    | — | false   |
| limit  | 当value为number类型时，最大值限制    | number   | —   |  —   |
| showBadge  | 控制badge隐藏显示 | boolean   |  true  |  —  |
