## Select（开发中）


:::demo
```html
<template>
  <wr-select :list="data"></wr-select>
</template>
<script>
export default {
  data(){
    return {
      data:[
        {value:1,text:'张飞'},
        {value:2,text:'赵云'},
        {value:3,text:'关羽'},
        {value:4,text:'子龙'},
        {value:5,text:'黄忠'},
      ]
    }
  }
}
</script>
```
:::
### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| list     |  选项列表数据 |  ——  |   ——  |    ——   |   