## drag

### 测试用例

:::demo

```html
<template>
  <wr-drag class='wr-drag-demo' ref='demoDrag' :data="testData"  :config="dragConfig">
    <wr-drag-item v-for="(item,index) in  testData" :key='index'  >{{item.text}}</wr-drag-item>
  </wr-drag>
  <wr-button @click='getCurrentData'>打印当前数据</wr-button>
</template>
<script>
  export default {
    data(){
      return {
        dragConfig:{
          animation:150,
          ghostClass:'wr-drag-demo-selected',
        },
        testData:[
          {id:1,text:'测试1'},
          {id:2,text:'测试2'},
          {id:3,text:'测试3'},
          {id:4,text:'测试4'},
        ],
      }
    },
    methods: {
      getCurrentData(){
        const reflectData = this.$refs.demoDrag.getData()
        const target =reflectData.map(item=>{
          return item.text
        })
        console.log(target)
      },
    },
    created(){
      this.dragConfig.onEnd =this.onEnd
      this.reflectData = JSON.parse(JSON.stringify(this.testData))
    }
  }
</script>
<style>
  .wr-drag-demo{
    border: 1px solid #8a8a8a7d;
    padding:0 4px;
  }
  .wr-drag-demo div{
    height: 40px;
    display:flex;
    align-items:center;
    padding:0 20px;
    margin:4px 0;
    border: 1px solid #8a8a8a7d;
  }
  .wr-drag-demo-selected{
  color: #ffffff;
  background-color: rgba(100, 149, 237,0.6);
}
</style>
```
:::

### 简单拖拽
:::demo

```html
<template>
  <wr-drag class='wr-drag-demo'  :config="dragConfig">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </wr-drag>
</template>
<script>
  export default {
    data(){
      return {
        dragConfig:{
          animation:150,
          ghostClass:'wr-drag-demo-selected',
          onChoose:()=>{
            console.log('onChoose')
          }
        }
      }
    },
    methods: {
      onEnd(){
        console.log('onEnd')
      },
      onUnchoose(){
        console.log('onUnchoose')
      },
      onStart(){
        console.log('onStart')
      },
      onAdd(){
        console.log('onAdd')
      },
      onUpdate(){
        console.log('onUpdate')
      },
      onSort(){
        console.log('onSort')
      },
      onFilter(){
        console.log('onFilter')
      },
      onRemove(){
        console.log('onRemove')
      },
      onClone(){
        console.log('onClone')
      },
      onChange(){
        console.log('onChange')
      },
      setData(a,b){
        console.log(a)
        console.dir(b)
      }
    },
    created(){
      this.dragConfig.onEnd =this.onEnd
      this.dragConfig.onUnchoose =this.onUnchoose
      this.dragConfig.onStart =this.onStart
      this.dragConfig.onAdd =this.onAdd
      this.dragConfig.onUpdate =this.onUpdate
      this.dragConfig.onSort =this.onSort
      this.dragConfig.onFilter =this.onFilter
      this.dragConfig.onRemove =this.onRemove
      this.dragConfig.onClone =this.onClone
      this.dragConfig.onChange =this.onChange
      this.dragConfig.setData=this.setData
    }
  }
</script>
<style>
  .wr-drag-demo{
    border: 1px solid #8a8a8a7d;
    padding:0 4px;
  }
  .wr-drag-demo div{
    height: 40px;
    display:flex;
    align-items:center;
    padding:0 20px;
    margin:4px 0;
    border: 1px solid #8a8a8a7d;
  }
  .wr-drag-demo-selected{
  color: #ffffff;
  background-color: rgba(100, 149, 237,0.6);
}
</style>
```

:::

### 跨组拖拽
:::demo
```html
<template>
  <div style='display:flex'>
    <div style='flex:1'>
      <wr-drag class='wr-drag-demo' :config="dragConfig1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </wr-drag>
    </div>
    <div style='flex:1'>
      <wr-drag class='wr-drag-demo' :config="dragConfig2">
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
      </wr-drag>
    </div>
  </div>
</template>
<script>
    export default {
    data(){
      return {
        dragConfig1:{
          animation:150,
          group: 'shared'
        },
        dragConfig2:{
          animation:150,
          group: 'shared', 
        }
      }
    }
  }
</script>
```
:::

### 克隆
:::demo
```html
<template>
  <div style='display:flex'>
    <div style='flex:1'>
      <wr-drag class='wr-drag-demo' :config="dragConfig1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </wr-drag>
    </div>
    <div style='flex:1'>
      <wr-drag class='wr-drag-demo' :config="dragConfig2">
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
      </wr-drag>
    </div>
  </div>
</template>
<script>
    export default {
    data(){
      return {
        dragConfig1:{
          animation:150,
          group: {
            name:'cloneGroup',
            pull:'clone'
          }
        },
        dragConfig2:{
          animation:150,
          group:{
            name:'cloneGroup',
            pull:'clone'
          }, 
        }
      }
    }
  }
</script>
<style>
  .wr-drag-demo{
    border: 1px solid #8a8a8a7d;
    padding:0 4px;
  }
  .wr-drag-demo div{
    height: 40px;
    display:flex;
    align-items:center;
    padding:0 20px;
    margin:4px 0;
    border: 1px solid #8a8a8a7d;
  }
</style>
```
:::

### 禁止排序
:::demo
```html
<template>
  <div style='display:flex'>
    <div style='flex:1'>
      <wr-drag class='wr-drag-demo' :config="dragConfig1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </wr-drag>
    </div>
    <div style='flex:1'>
      <wr-drag class='wr-drag-demo' :config="dragConfig2">
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
      </wr-drag>
    </div>
  </div>
</template>
<script>
    export default {
    data(){
      return {
        dragConfig1:{
          animation:150,
          group: {
            name:'sortGroup',
            pull:'clone',
            put: false // 不允许拖拽进这个列表
          },
          sort:false //禁止排序
        },
        dragConfig2:{
          animation:150,
          group:{
            name:'sortGroup',
            pull:'clone'
          }, 
        }
      }
    }
  }
</script>
```
:::

### handle
:::demo

```html
<template>
  <wr-drag class='wr-drag-demo' :config="dragConfig">
    <div><span class='drag-handle'></span>1</div>
    <div><span class='drag-handle'></span>2</div>
    <div><span class='drag-handle'></span>3</div>
    <div><span class='drag-handle'></span>4</div>
  </wr-drag>
</template>
<script>
  export default {
    data(){
      return {
        dragConfig:{
          animation:150,
          handle:'.drag-handle'
        }
      }
    },
  }
</script>
<style lang="scss" scoped>
  .wr-drag-demo{
    border: 1px solid #8a8a8a7d;
    padding:0 4px;
    div{
      height: 40px;
      display: flex;
      align-items: center;
      padding:0 20px;
      border: 1px solid #8a8a8a7d;
      margin: 4px 0;
    }
    .drag-handle{
      display: inline-block;
      width: 24px;
      height: 20px;
      position: relative;
      background-color: rgba(0, 0, 0, 0.7);
      margin-right: 10px;
      cursor:grab;
      &::before,&::after{
        position: absolute;
        content: '';
        height: 4px;
        width: 100%;
        background-color: white;
      }
      &::before{
        top: 4px;
      }
      &::after{
        top: 12px;
      }
    }
  }
</style>
```

:::

### filter
:::demo

```html
<template>
  <wr-drag class='wr-drag-demo' :config="dragConfig">
    <div>1</div>
    <div>2</div>
    <div class="drag-filter">3</div>
    <div>4</div>
  </wr-drag>
</template>
<script>
  export default {
    data(){
      return {
        dragConfig:{
          animation:150,
          filter:'.drag-filter'
        }
      }
    },
  }
</script>
<style lang="scss" scoped>
  .wr-drag-demo{
    border: 1px solid #8a8a8a7d;
    padding:0 4px;
    div{
      height: 40px;
      display: flex;
      align-items: center;
      padding:0 20px;
      border: 1px solid #8a8a8a7d;
      margin: 4px 0;
    }
    .drag-filter{
      color:red;
      border-color: red;
    }
  }
</style>
```

:::

### 配置项config
```js
let config = {
   group: "name",  // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
    sort: true,  // boolean 定义是否列表单元是否可以在列表容器内进行拖拽排序
    delay: 0, // number 定义鼠标选中列表单元可以开始拖动的延迟时间；
    touchStartThreshold: 0, // px, how many pixels the point should move before cancelling a delayed drag event
    disabled: false, // boolean 定义是否此sortable对象是否可用，为true时sortable对象不能拖放排序等功能，为false时为可以进行排序，相当于一个开关；
    store: null,  // @see Store
    animation: 150,  // ms, number 单位：ms，定义排序动画的时间
    easing: "cubic-bezier(1, 0, 0, 1)", // Easing for animation. Defaults to null. See https://easings.net/ for examples.
    handle: ".my-handle",  // 格式为简单css选择器的字符串，使列表单元中符合选择器的元素成为拖动的手柄，只有按住拖动手柄才能使列表单元进行拖动
    filter: ".ignore-elements",  // 过滤器，不需要进行拖动的元素
    preventOnFilter: true, //  在触发过滤器`filter`的时候调用`event.preventDefault()`
    draggable: ".item",  // 允许拖拽的项目类名
    ghostClass: "sortable-ghost",  // drop placeholder的css类名
    chosenClass: "sortable-chosen",  // 被选中项的css 类名
    dragClass: "sortable-drag",  // 正在被拖拽中的css类名
    dataIdAttr: 'data-id',

    swapThreshold: 1, // Threshold of the swap zone
    invertSwap: false, // Will always use inverted swap zone if set to true
    invertedSwapThreshold: 1, // Threshold of the inverted swap zone (will be set to swapThreshold value by default)
    direction: 'horizontal', // 拖拽方向 (默认情况下会自动判断方向)

    forceFallback: false,  // 忽略 HTML5拖拽行为，强制回调进行

    fallbackClass: "sortable-fallback",  // 当使用forceFallback的时候，被复制的dom的css类名
    fallbackOnBody: false,  // 将cloned DOM 元素挂到body元素上。
    fallbackTolerance: 0, // Specify in pixels how far the mouse should move before it's considered as a drag.

    scroll: true, // or HTMLElement
    scrollFn: function(offsetX, offsetY, originalEvent, touchEvt, hoverTargetEl) { ... }, // if you have custom scrollbar scrollFn may be used for autoscrolling
    scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
    scrollSpeed: 10, // px
    bubbleScroll: true, // apply autoscroll to all parent elements, allowing for easier movement

    dragoverBubble: false,
    removeCloneOnHide: true, // Remove the clone element when it is not showing, rather than just hiding it
    emptyInsertThreshold: 5, // px, distance mouse must be from empty sortable to insert drag element into it


    setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
        dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
    },

    // 元素被选中
    onChoose: function (/**Event*/evt) {
        evt.oldIndex;  // element index within parent
    },

    // 元素未被选中的时候（从选中到未选中）
    onUnchoose: function(/**Event*/evt) {
        // same properties as onEnd
    },

    // 开始拖拽的时候
    onStart: function (/**Event*/evt) {
        evt.oldIndex;  // element index within parent
    },

    // 结束拖拽
    onEnd: function (/**Event*/evt) {
        var itemEl = evt.item;  // dragged HTMLElement
        evt.to;    // target list
        evt.from;  // previous list
        evt.oldIndex;  // element's old index within old parent
        evt.newIndex;  // element's new index within new parent
        evt.clone // the clone element
        evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
    },

    // 元素从一个列表拖拽到另一个列表
    onAdd: function (/**Event*/evt) {
        // same properties as onEnd
    },

    // 列表内元素顺序更新的时候触发
    onUpdate: function (/**Event*/evt) {
        // same properties as onEnd
    },

    // 列表的任何更改都会触发
    onSort: function (/**Event*/evt) {
        // same properties as onEnd
    },

    // 元素从列表中移除进入另一个列表
    onRemove: function (/**Event*/evt) {
        // same properties as onEnd
    },

    // 试图拖拽一个filtered的元素
    onFilter: function (/**Event*/evt) {
        var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
    },

    // 拖拽移动的时候
    onMove: function (/**Event*/evt, /**Event*/originalEvent) {
        // Example: https://jsbin.com/nawahef/edit?js,output
        evt.dragged; // dragged HTMLElement
        evt.draggedRect; // DOMRect {left, top, right, bottom}
        evt.related; // HTMLElement on which have guided
        evt.relatedRect; // DOMRect
        evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
        originalEvent.clientY; // mouse position
        // return false; — for cancel
        // return -1; — insert before target
        // return 1; — insert after target
    },

    // clone一个元素的时候触发
    onClone: function (/**Event*/evt) {
        var origEl = evt.item;
        var cloneEl = evt.clone;
    },

    // 拖拽元素改变位置的时候
    onChange: function(/**Event*/evt) {
        evt.newIndex // most likely why this event is used is to get the dragging element's current index
        // same properties as onEnd
    }
}

                        
```


### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data     | 源数据  | array    |   —   |    —   |   
| config    | 配置   | object    | — |  —  |

### 方法
| 方法名称     | 说明    | 
|---------- |-------- |
| getData     | 获取当前顺序的数据  |    