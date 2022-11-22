## Slider


### 基本使用

:::demo
```html
  <template>
      <wr-slider ></wr-slider>
  </template>
```
:::
### step设置步进
:::demo
```html
  <template>
    <wr-slider :total="120" :step="20"></wr-slider>
    <wr-slider :step='20'></wr-slider>
  </template>

```
:::

### 格式化tooltip
:::demo
```html
  <template>
    <wr-slider :format-tooltip='handleFormatTooltip'></wr-slider>
  </template>
   <script>
    export default {
      methods:{
        handleFormatTooltip(value){
          let hour = parseInt(value/3600)
          let minutes =parseInt((value -hour*3600)/60)
          let seconds = value%60
          return `${hour}:${minutes}:${seconds}`
        }
      }
    }

  </script>
```
:::

### 双向绑定值
:::demo
```html
  <template>
    <wr-slider v-model='sliderValue'></wr-slider>
    <wr-button @click="sliderValue+=1">+1</wr-button>
  </template>
    <script>
    export default {
      data(){
        return {
          sliderValue:20
        }
      }
    }
  </script>
```
:::

### 竖直方向
:::demo
```html
  <template>
    <wr-slider vertical></wr-slider>
  </template>
    <script>
    export default {
      data(){
        return {
          sliderValue:20
        }
      }
    }
  </script>
```
:::

### 属性

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| total     | 最大值 |  Number  |   ——  |   100   |   
| step     | 步长 |  Number  |   ——  |   1   |   
| height     | 高度 |  Number  |   ——  |   8  |   
| format-tooltip     | 重写提示 |  Function(value)  |   ——  |     |   


### 事件
| 事件名称   | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change     | 点击进度条后（松开鼠标后）触发 |  改变后的值  |