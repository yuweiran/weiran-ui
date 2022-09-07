## Video

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


标签动态效果
关系网
树
弹框
多级菜单，数据处理方法
echart二次封装
提示
拖拽
常规：input（v-model实现），checkbox，radio，下拉列表，日期，进度条
上传显示上传进度的upload

scss文件支持，变量定义和使用
