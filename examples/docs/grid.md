## Grid 组件



### 上下布局
:::demo
```html
  <template>
    <div style="height:200px">
      <wr-grid type="header-main" header-height="40">
        <template #header>
          <div class="grid-demo color-cc">header</div>
        </template>
        <template #main>
          <div class="grid-demo color-aa">main</div>
        </template>
      </wr-grid>
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
      <wr-grid type="header-main-footer" header-height="40" footer-height="40">
        <template #header>
          <div class="grid-demo color-cc">header</div>
        </template>
        <template #main>
          <div class="grid-demo color-aa">main</div>
        </template>
        <template #footer>
          <div class="grid-demo color-cc">footer</div>
        </template>
      </wr-grid>
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
      <wr-grid type="aside-main" aside-width="150px">
        <template #aside>
          <div class="grid-demo color-cc">aside</div>
        </template>
        <template #main>
          <div class="grid-demo color-aa">main</div>
        </template>
      </wr-grid>
    </div>

    <div style="height:200px">
      <wr-grid type="main-aside" aside-width="150px">
        <template #aside>
          <div class="grid-demo color-cc">aside</div>
        </template>
        <template #main>
          <div class="grid-demo color-aa">main</div>
        </template>
      </wr-grid>
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
      <wr-grid type="aside-main">
        <template #aside>
          <div class="grid-demo color-bb">aside</div>
        </template>
        <template #main>
          <wr-grid type="main-aside">
            <template #aside>
              <div class="grid-demo color-bb">aside</div>
            </template>
            <template #main>
              <div class="grid-demo color-aa">main</div>
            </template>
          </wr-grid>
        </template>
      </wr-grid>
    </div>
    <div style="height:200px;margin-bottom:20px">
      <wr-grid type="header-main">
        <template #header>
          <div class="grid-demo color-cc">header</div>
        </template>
        <template #main>
          <wr-grid type="aside-main">
            <template #aside>
              <div class="grid-demo color-bb">aside</div>
            </template>
            <template #main>
              <div class="grid-demo color-aa">main</div>
            </template>
          </wr-grid>
        </template>
      </wr-grid>
    </div>

    <div style="height:200px;margin-bottom:20px">
      <wr-grid type="aside-main">
        <template #aside>
          <div class="grid-demo color-bb">aside</div>
        </template>
        <template #main>
          <wr-grid type="header-main">
            <template #header>
              <div class="grid-demo color-cc">header</div>
            </template>
            <template #main>
              <div class="grid-demo color-aa">main</div>
            </template>
          </wr-grid>
        </template>
      </wr-grid>
    </div>

    <div style="height:200px;margin-bottom:20px">
      <wr-grid type="header-main-footer">
        <template #header>
          <div class="grid-demo color-cc">header</div>
        </template>
        <template #main>
          <wr-grid type="aside-main">
            <template #aside>
              <div class="grid-demo color-bb">aside</div>
            </template>
            <template #main>
              <div class="grid-demo color-aa">main</div>
            </template>
          </wr-grid>
        </template>
        <template #footer>
          <div class="grid-demo color-cc">footer</div>
        </template>
      </wr-grid>
    </div>

    <div style="height:200px;">
      <wr-grid type="aside-main">
        <template #aside>
          <div class="grid-demo color-bb">aside</div>
        </template>
        <template #main>
          <wr-grid type="header-main-footer">
            <template #header>
              <div class="grid-demo color-cc">header</div>
            </template>
            <template #main>
              <div class="grid-demo color-aa">main</div>
            </template>
            <template #footer>
              <div class="grid-demo color-cc">footer</div>
            </template>
          </wr-grid>
        </template>
      </wr-grid>
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