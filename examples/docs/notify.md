## Notify
:::demo
  ```html
    <template>
      <wr-button @click='test'>默认</wr-button>
      <wr-button @click="setPosition('top-left')">左上</wr-button>
      <wr-button @click="setPosition('bottom-right')">右下</wr-button>
      <wr-button @click="setPosition('bottom-left')">左下</wr-button>
    </template>
    <script>
    export default {
      data(){
        return {
         
        }
      },
      methods:{
        test(){
          this.$notify({
            text:'传入的提示信息',
            type:'error'
          })
        },
        setPosition(position){
          this.$notify({
            text:'传入的提示信息',
            position
          })
        }
      }
    }
    </script>
  ```
:::