## Button 按钮

### 基础用法

:::demo 

```html
  <template>
    <wr-button @click='test'>默认按钮</wr-button>
    <wr-button disabled @click='test'>禁用按钮</wr-button>
    <wr-button dashed>虚线按钮</wr-button>
    <wr-button type="success">成功按钮</wr-button>
    <wr-button type="warning">警告按钮</wr-button>
    <wr-button type="danger">危险按钮</wr-button>
    <wr-button type="primary">主要按钮</wr-button>
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
```
:::

### 圆形按钮
:::demo 
```html
  <template>
    <wr-button  circle icon='wr-icon-more'></wr-button>
    <wr-button type="danger" circle icon='wr-icon-delete'></wr-button>
    <wr-button type="success" circle icon='wr-icon-check'></wr-button>
    <wr-button type="warning" circle icon='wr-icon-remove'></wr-button>
  </template>
```
:::

### 朴素按钮
:::demo 

```html
  <template>
    <wr-button plain>朴素按钮</wr-button>
    <wr-button plain type="success">成功按钮</wr-button>
    <wr-button plain type="warning">警告按钮</wr-button>
    <wr-button plain type="danger">危险按钮</wr-button>
    <wr-button plain type="primary">主要按钮</wr-button>
  </template>
```
:::

### 按钮尺寸
:::demo 

```html
  <template>
    <wr-button size="medium">medium按钮</wr-button>
    <wr-button size="small">small(默认)按钮</wr-button>
    <wr-button size="mini">mini按钮</wr-button>
  </template>
```
:::

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger  |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
