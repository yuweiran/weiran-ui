## Message

:::demo
```html
<template>
  <wr-button @click="handleMessage">按钮</wr-button>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  methods: {
    handleMessage(){
      this.$message({
        text:'提示信息'
      })
    }
  },
}
</script>
```
:::

:::demo
```html
<template>
  <wr-button @click="handleMessage('warning')">警告提示</wr-button>
  <wr-button @click="handleMessage('danger')">危险提示</wr-button>
  <wr-button @click="handleMessage('success')">成功按钮</wr-button>
  <wr-button @click="handleMessage('default')">默认按钮</wr-button>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  methods: {
    handleMessage(type){
      this.$message({
        showClose:true,
        text:'起来，坐下，坐下，起来，用一种现实的努力，去克制一种现实的悲哀',
        type:type
      })
    }
  },
}
</script>
```
:::

:::demo
```html
<template>
  <wr-button @click="handleWarning('warning')">警告提示</wr-button>
  <wr-button @click="handleDanger('danger')">危险提示</wr-button>
  <wr-button @click="handleSuccess('success')">成功按钮</wr-button>
  <wr-button @click="handleDefault('default')">默认按钮</wr-button>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  methods: {
    handleWarning(){
      this.$message.warning({
        showClose:true,
        text:'提示信息',
      })
    },    
    handleDanger(){
      this.$message.danger({
        showClose:true,
        text:'提示信息',
      })
    },    
    handleSuccess(){
      this.$message.success({
        showClose:true,
        text:'提示信息',
      })
    },
    handleDefault(){
      this.$message.default({
        showClose:true,
        text:'提示信息',
      })
    }
  }
}
</script>
```
:::

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| text     |  内容文字  |   string |   ——  |    ——   |   
| showClose    |  是否显示可关闭按钮 | boolean    | —— |  '确认'  |
| type     |  类型  |   string  |   default/success / warning / danger   |    'default'   |   
