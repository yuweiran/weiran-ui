## Button 按钮

### 基础用法

:::demo 使用`type`、`plain`、和`circle`属性来定义 Button 的样式。

```html
  <template>
    <wr-button @click='test'>默认按钮</wr-button>
    <wr-button disabled @click='test'>禁用按钮</wr-button>
    <wr-button dashed>虚线按钮</wr-button>
    <wr-button type="success">成功按钮</wr-button>
    <wr-button type="warning">警告按钮</wr-button>
    <wr-button type="danger">危险按钮</wr-button>
    <wr-button type="primary">主要按钮</wr-button>
    <wr-button type="danger" circle icon='icon-delete'></wr-button>
    <wr-button type="success" circle icon='icon-dui'></wr-button>
    <wr-button type="warning" circle icon='icon-cuo'></wr-button>
    <wr-button type="danger"  icon='icon-cuo'>移除</wr-button>
    <wr-button size="medium">中型按钮</wr-button>
    <wr-button size="mini">小型按钮</wr-button>
    <wr-button plain>朴素按钮</wr-button>
    <wr-button plain type='danger'>危险按钮</wr-button>
  </template>
  <script>
  export default {
    data() {
      return {
        text:'aaa'
      }
    },
    methods: {
      test(){
        console.log(this.text)
      }
    },
  }
  </script>
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger  |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
