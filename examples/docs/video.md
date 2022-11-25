## Video

### 基本使用
:::demo
  ```html
    <template>
      <wr-video  style="width:400px" :sources="sources"></wr-video>
    </template>
    <script>
    export default {
      data(){
        return {
          sources: ['http://yuweiran.cn:9074/music.mp4']
        }
      }
    }
    </script>
  ```
:::
### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| sources   | 视频文件地址  | Array    |   ——   | []|      
