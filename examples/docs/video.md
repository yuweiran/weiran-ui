## Video

### 基本使用
:::demo
  ```html
    <template>
      <wr-video  :options="videoOptions"></wr-video>
    </template>
    <script>
    export default {
      data(){
        return {
          videoOptions:{
            autoplay: true,
            controls: true,
            sources: [
              {
                src:'http://yuweiran.cn:9074/music.mp4',
                type: 'video/mp4'
              }
            ]
          }
        }
      }
    }
    </script>
  ```
:::
配置项见
[videojs](https://videojs.com/guides/options/)

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| props   | 配置信息  | object    |   ——   | {}|      
