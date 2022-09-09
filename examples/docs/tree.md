## Tree

### 基本用法

:::demo
```html
<template>
  <wr-tree :data='data' :props='defaultProps' ></wr-tree>
</template>
<script>
  export default {
    data(){
      return {
        data: [
          {
            id: 'root_1',
            text: 'root-1',
            children: [
              {
                id: 'child-1',
                text: 'child-1',
                children: [{ id: 'child-2', text: 'child-2' }],
              },
            ],
          },
          {
            id: 'root_2',
            text: 'root-2',
            children: [
              {
                id: 'child-3',
                text: 'child-3',
                children: [{ id: 'child-5', text: 'child-5' }],
              },
            ],
          },
        ],
        defaultProps:{
          label:'text'
        }
      }
    }
  }
</script>
```
:::
