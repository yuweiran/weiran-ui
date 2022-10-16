## MessageBox

### alert

:::demo
```html
<template>
  <div>
    <wr-button @click="handleShowAlertBox">按钮</wr-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleShowAlertBox(){
      this.$alert({
        title:'自定义标题',
        content:'好胜人,耻闻过,骋辩给,眩聪明,厉威严,恣强愎,此六者,君上之弊也。好胜人,耻闻过,骋辩给,眩聪明,厉威严,恣强愎,此六者,君上之弊也。'
      }).then(res=>{
        console.log(res)
      })
    }
  },
}
</script>
```
:::


### confirm
:::demo
```html
<template>
  <div>
    <wr-button @click="handleShowConfirmBox">按钮</wr-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      inputValue:''
    }
  },
  methods: {
    handleShowConfirmBox(){
      this.$confirm({
        content:'确定取消当前操作？'
      }).then(res=>{
        console.log(res)
      }).catch(res=>{
        console.log('err')  
      })
    }
  },
}
</script>
```
:::


### prompt
:::demo
```html
<template>
  <div>
    <wr-button @click="handleShowConfirmBox">按钮</wr-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      inputValue:''
    }
  },
  methods: {
    handleShowConfirmBox(){
      this.$prompt({
        content:'"人生在世不称意"下一句是：'
      }).then(res=>{
        console.log(res)
        if(res==="明朝散发弄扁舟"){
          this.$message.success({
            text:"回答正确！"
          })
        }else{
          this.$message.danger({
            text:"回答错误！"
          })
        }
      }).catch(res=>{
        console.log('err')  
      })
    }
  },
}
</script>
```
:::

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| content     |  内容  |   string/vnode  |   ——  |    ——   |   
| confirmButtonText    |  '确认'按钮文字  | string    | —— |  '确认'  |
| cancelButtonText     |  '取消'按钮文字   |   string  |   ——   |    取消   |   
| title     |  标题头部  |  string  |   ——  |    '提示'   |   
