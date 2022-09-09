## Radio


:::demo
```html
<template>
  <wr-radio v-model="radioValue" label="aa">值aa</wr-radio>
  <wr-radio v-model="radioValue" label="bb">值bb</wr-radio>
  <div style="margin-top:10px">
    <wr-button size="mini" @click="handleLogValue">按钮</wr-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      radioValue:'aa'
    }
  },
  methods:{
    handleLogValue(){
      console.log(this.radioValue)
    }
  }
}
</script>
```
:::