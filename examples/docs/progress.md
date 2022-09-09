## Progress
### 基本使用
:::demo
```html
  <template>
    <wr-progress :percent='percent'></wr-progress>
    <wr-progress percent='50'></wr-progress>
    <wr-progress :hidden-percent='true' percent='1' total='3'></wr-progress>
    <wr-button @click='percent+=20'>percent+20</wr-button>
  </template>
  <script>
  export default {
    data(){
      return {
        percent:0
      }
    }
  }
  </script>
```
:::

### 条纹

:::demo
```html
  <template>
    <wr-progress percent='50' stripe-type='line'></wr-progress>
    <wr-progress  percent='70' stripe-type='zebra'></wr-progress>
  </template>
  <script>
  export default {
    data(){
      return{}
    }
  }
  </script>
```
:::

### 状态
:::demo
```html
  <template>
    <wr-progress percent='50' status="exception"></wr-progress>
    <wr-progress  percent='70' status="warning"></wr-progress>
    <wr-progress  percent='100' status="success"></wr-progress>
  </template>
  <script>
  export default {
    data(){
      return{}
    }
  }
  </script>
```
:::

### 自定义
:::demo
```html
  <template>
    <wr-progress percent='50' custom-color="#ffee00"></wr-progress>
    <wr-progress :percent='percent' :custom-color="colorOption"></wr-progress>
    <wr-progress :percent='percent' :total='140' :custom-color="colorOption"></wr-progress>
    <wr-button @click='percent+=10'>percent+10</wr-button>
  </template>
  <script>
  export default {
    data(){
      return{
        percent:0,
        colorOption:[
          {color: '#f56c6c', percent: 20},
          {color: '#e6a23c', percent: 40},
          {color: '#5cb87a', percent: 60},
          {color: '#1989fa', percent: 80},
          {color: '#6f7ad3', percent: 100}
        ]
      }
    }
  }
  </script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| percent     |  进度值 | string/number  |     >=0    |    0     |
| stripe-type     | 条纹类型   | string    |    line / zebra  |     —    |
| hidden-percent     | 是否隐藏进度百分比值   |bolean | — | false   |
| total     | 总值   | string/number      | — | false   |
| custom-color     | 自定义颜色   | array/string  | [{color:'',percent:''}]/颜色值 |  —  |
