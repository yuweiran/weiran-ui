## Input

:::demo
```html
<template>
  <wr-input v-model='inputText'></wr-input>
  <div style="margin-top:20px"></div>
  <wr-input type='textarea' height='100' v-model='textareaText'></wr-input>
  <div style="margin-top:20px"></div>
  <wr-input type='textarea' height='100' resize='none' v-model='textareaText'></wr-input>
  <wr-button @click='handleLog'>按钮</wr-button>
</template>
<script>
export default {
  data(){
    return{
      inputText:'',
      textareaText:''
    }
  },
  methods: {
    handleLog(){
      console.log(this.inputText,this.textareaText)
    }
  },
}
</script>
```