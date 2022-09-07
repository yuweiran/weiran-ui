## Container
Grid容器布局


### 上下布局
:::demo
```html
  <template>
    <div style="height:200px">
      <wr-container type="header-main" header-height="40">
        <div slot='header' class="grid-demo color-cc">header</div>
        <div slot='main' class="grid-demo color-aa">main</div>
      </wr-container>
    </div>
  </template>
  <style>
    .grid-demo{
      height:100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .color-aa{
      background-color:#aaaaaa
    }
    .color-cc{
      background-color:#cccccc
    }
  </style>
:::

### 上中下布局
:::demo
```html
  <template>
    <div style="height:200px">
      <wr-container type="header-main-footer" header-height="40" footer-height="40">
        <div slot='header' class="grid-demo color-cc">header</div>
        <div slot='main' class="grid-demo color-aa">main</div>
        <div slot='footer' class="grid-demo color-cc">footer</div>
      </wr-container>
    </div>
  </template>
  <style>
    .grid-demo{
      height:100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .color-aa{
      background-color:#aaaaaa
    }
    .color-cc{
      background-color:#cccccc
    }
  </style>
:::

### 左右布局

:::demo
```html
  <template>
    <div style="height:200px;margin-bottom:20px">
      <wr-container type="aside-main" aside-width="150px">
        <div slot='aside' class="grid-demo color-cc">aside</div>
        <div slot='main' class="grid-demo color-aa">main</div>
      </wr-container>
    </div>

    <div style="height:200px">
      <wr-container type="main-aside" aside-width="150px">
        <div slot='aside' class="grid-demo color-cc">aside</div>
        <div slot='main' class="grid-demo color-aa">main</div>
      </wr-container>
    </div>
  </template>
  <style>
    .grid-demo{
      height:100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .color-aa{
      background-color:#aaaaaa
    }
    .color-cc{
      background-color:#cccccc
    }
  </style>
:::

### 嵌套效果
:::demo
```html
  <template>
    <div style="height:200px;margin-bottom:20px">
      <wr-container type="aside-main">
        <div slot='aside' class="grid-demo color-cc">aside</div>
        <wr-container slot="main" type="main-aside">
          <div slot='aside' class="grid-demo color-cc">aside</div>
          <div slot='main' class="grid-demo color-aa">main</div>
        </wr-container>
      </wr-container>
    </div>
    <div style="height:200px;margin-bottom:20px">
      <wr-container type="header-main">
        <div slot='header' class="grid-demo color-cc">header</div>
        <wr-container slot='main' type="aside-main">
          <div slot='aside' class="grid-demo color-bb">aside</div>
          <div slot='main' class="grid-demo color-aa">main</div>
        </wr-container>
      </wr-container>
    </div>

    <div style="height:200px;margin-bottom:20px">
      <wr-container type="aside-main">
        <div slot='aside' class="grid-demo color-bb">aside</div>
        <wr-container slot="main" type="header-main">
          <div slot='header' class="grid-demo color-cc">header</div>
          <div slot='main' class="grid-demo color-aa">main</div>
        </wr-container>
      </wr-container>
    </div>

    <div style="height:200px;margin-bottom:20px">
      <wr-container type="header-main-footer">
        <div slot='header' class="grid-demo color-cc">header</div>
        <wr-container slot='main' type="aside-main">
          <div slot='aside' class="grid-demo color-bb">aside</div>
          <div slot='main' class="grid-demo color-aa">main</div>
        </wr-container>
        <div slot='footer' class="grid-demo color-cc">footer</div>
      </wr-container>
    </div>

    <div style="height:200px;">
      <wr-container type="aside-main">
        <div slot='aside' class="grid-demo color-bb">aside</div>
        <wr-container slot='main' type="header-main-footer">
            <div slot='header' class="grid-demo color-cc">header</div>
            <div slot='main' class="grid-demo color-aa">main</div>
            <div slot='footer' class="grid-demo color-cc">footer</div>
          </wr-container>
      </wr-container>
    </div>
  </template>
  <style>
    .grid-demo{
      height:100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .color-aa{
      background-color:#aaaaaa
    }
    .color-bb{
      background-color:#bbbbbb
    }
    .color-cc{
      background-color:#cccccc
    }
  </style>
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   header-main  /  header-main-footer  /  aisde-main  /  main-aside |     —    |
| header-height     | header高度   | string  /  number    | — |  60  |
| footer-height     | footer高度   | string  /  number    | — |  60  |
| aside-width     | aside宽度   | string  /  number    | — |  200  |