## Input

### 基本使用
:::demo
```html
<template>
  <wr-input v-model='inputValue' ></wr-input>
  <div style="margin-bottom:10px"></div>
  <wr-input type="textarea"  v-model='inputValue' ></wr-input>
</template>
  <script>
    export default {
      data(){
        return {
          inputValue:''
        }
      }
    }
  </script>
```
:::
### 密码框
:::demo
```html
<template>
  <wr-input v-model='password' :showPassword='true' ></wr-input>
</template>
<script>
export default {
  data(){
    return{
      password:''
    }
  },
}
</script>
```
:::

### 长度限制
:::demo
```html
<template>
  <wr-input v-model='account' :maxlength='10' :showWordLimit="true"></wr-input>
  <div style="margin-top:20px"></div>
  <wr-input v-model='account' type="textarea" :maxlength='220' :showWordLimit="true"></wr-input>
</template>
<script>
export default {
  data(){
    return{
      account:'',
    }
  },
}
</script>
```
:::

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     |  类型  |   string  |   text/textarea   |    text   |   
| resize    | 是否可调整元素尺寸（textarea）   | string    | none|both|horizontal|vertical |  both  |
| autocomplete     |  自动补全提示  |   string  |   off/on   |    off   |   
| readonly     |  是否只读  |   boolean  |   true/false   |    false   |   
| disabled     |  是否禁用 |   boolean  |   true/false   |    false   |   
| showPassword     |  是否展示密码 |   boolean  |   true/false   |    false   |   
| showWordLimit     |  是否显示可输入长度 |   boolean  |   true/false   |    false   |   
| maxlength     | 最大长度 |   number  |   ——   |    ——   |   
| height     |  textarea设置高度 |   string/number  |   ——   |    ——   |   
