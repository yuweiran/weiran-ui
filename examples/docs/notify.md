## Notify

### 基本使用
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
            text:'提示内容'
          })
        },
        setPosition(position){
          this.$notify({position,text:'提示内容'})
        }
      }
    }
    </script>
  ```
:::

### 设置提示停留时间
:::demo
  ```html
    <template>
      <wr-button @click='test'>停留5s</wr-button>
      <wr-button @click='test2'>停留10s</wr-button>
      <wr-button @click='test3'>不自动关闭</wr-button>
    </template>
    <script>
    export default {
      methods:{
        test(){
          this.$notify({
            text:'传入的提示信息',
            duration:5000
          })
        },
        test2(){
          this.$notify({
            text:'传入的提示信息',
            duration:10000
          })
        },
        test3(){
          this.$notify({
            keepShow:true,
            text:'这是个不能自动关闭的提示框。',
            duration:10000
          })
        }
      }
    }
    </script>
  ```
:::
### 设置出现的动画
:::demo
  ```html
    <template>
      <wr-button v-for="animate in animateNameList"  style="margin:10px" :key="animate" @click='showAppearAnimate(animate)'>{{animate}}</wr-button>
    </template>
    <script>
    export default {
      data(){
        return {
          animateNameList:["bounce","flash","pulse","rubberBand","shakeX","shakeY","headShake","swing","tada","wobble","jello","heartBeat","backInDown","backInLeft","backInRight","backInUp","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeInTopLeft","fadeInTopRight","fadeInBottomLeft","fadeInBottomRight","flip","flipInX","flipInY","lightSpeedInRight","lightSpeedInLeft","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","slideInDown","slideInLeft","slideInRight","slideInUp","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","hinge","jackInTheBox","rollIn"
          ]
        }
      },
      methods:{
        showAppearAnimate(name){
          this.$notify({
            text:'当前出现动画是：'+name,
            appearAnimate:name
          })
        }
      }
    }
    </script>
  ```
:::
### 设置离开的动画
:::demo
  ```html
    <template>
      <wr-button style="margin:10px" v-for="animate in animateNameList" :key="animate" @click='showLeaveAnimate(animate)'>{{animate}}</wr-button>
    </template>
    <script>
    export default {
      data(){
        return {
          animateNameList:["backOutDown","backOutLeft","backOutRight","backOutUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","fadeOutTopLeft","fadeOutTopRight","fadeOutBottomRight","fadeOutBottomLeft","flipOutX","flipOutY","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","rollOut","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp"]
        }
      },
      methods:{
        showLeaveAnimate(name){
          this.$notify({
            text:'当前离开动画是：'+name,
            leaveAnimate:name,
            duration:2000
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
| keepShow    |  是否不自动关闭，保持显示在页面 | boolean    | true/false |  false  |
| appearAnimate     |  出现动画  |   string  |   ——   |   ——   |   
| leaveAnimate     |  离开动画  |   string  |   ——   |   ——   |   
| duration     |  弹框保持显示时间  |   number  |   ——   |   4500   |   
