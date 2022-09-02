## 测试
:::demo
  ```html
    <template>
      <wr-test  :options="videoOptions"></wr-test>
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
