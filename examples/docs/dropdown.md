## Dropdown


### 基本使用
:::demo placement设置下拉列表出现的位置
```html
<template>
  <wr-dropdown v-for="(item,index) in placement" ref="dropdown" :placement="item" :key="index" style="margin:20px">
    <wr-button type="primary">{{item}}</wr-button>
    <wr-dropdown-menu  slot="dropdown">
      <wr-dropdown-item @click="handleOperate(operate)" v-for="(operate,ind) in operations" :key="ind">{{operate.name}}</wr-dropdown-item>
    </wr-dropdown-menu>
  </wr-dropdown>
</template>
<script>
  export default {
    data(){
      return {
        placement:['bottom','bottom-start', 'bottom-end', 'top', 'top-start', 'top-end' ],
        operations:[
          { name:"加" , type :"add"},
          { name:"减" , type :"minus"},
          { name:"乘" , type :"multiply"},
          { name:"除" , type :"divide"}
        ]
      }
    },
    methods:{
     handleOperate(operate){
      console.log(operate.type)
     }
    }
  }
</script>
```
:::
### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| placement     | 位置  | String    |  'bottom','bottom-start', 'bottom-end', 'top', 'top-start', 'top-end'   |    'bottom'   |   
| auto-hidden    | 点击菜单项后自动隐藏菜单   | Boolean    | true/false |  true  |


### 插槽
| 插槽     | 说明    | 
|---------- |-------- |
|  dropdown     | 菜单列表  |    