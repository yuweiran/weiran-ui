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

### 按钮组
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
      checked:[]
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