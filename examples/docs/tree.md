## Tree(优化中)

### 基本用法

:::demo
```html
<template>
  <wr-tree :data='data' :props='defaultProps' ></wr-tree>
</template>
<script>
  export default {
    data(){
      return {
        data: [
          {
            id: 'root_1',
            text: 'root-1',
            children: [
              {
                id: 'child-1',
                text: 'child-1',
                children: [{ id: 'child-2', text: 'child-2' }],
              },
            ],
          },
          {
            id: 'root_2',
            text: 'root-2',
            children: [
              {
                id: 'child-3',
                text: 'child-3',
                children: [{ id: 'child-5', text: 'child-5' }],
              },
            ],
          },
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
| props   | 用于默认字段映射修改  | object    |   ——   |   {id:'id',label:'label',children:'children'}  |      
| data    | 树数据   | array    | — |  —  |
