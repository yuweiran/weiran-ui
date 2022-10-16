## Select（开发中）


:::demo
```html
<template>
  <wr-select v-model="selectValue" :props="defaultProps" :list="data"></wr-select>
</template>
<script>
export default {
  data(){
    return {
      selectValue:'',
      data:[
        {id:'1',value:1,text:'张飞'},
        {id:'2',value:2,text:'赵云'},
        {id:'3',value:3,text:'关羽'},
        {id:'4',value:4,text:'子龙'},
        {id:'5',value:5,text:'黄忠'},
      ],
      defaultProps:{
        label:'text'
      }
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