## Tree

### 基本用法

:::demo
```html
<template>
  <wr-tree :data='data' ></wr-tree>
</template>
<script>
  export default {
    data(){
      return {
              data: [
        {
          id: 'root_1',
          label: 'root-1',
          children: [
            {
              id: 'child-1',
              label: 'child-1',
              children: [{ id: 'child-2', label: 'child-2' }],
            },
          ],
        },
        {
          id: 'root_2',
          label: 'root-2',
          children: [
            {
              id: 'child-3',
              label: 'child-3',
              children: [{ id: 'child-5', label: 'child-5' }],
            },
          ],
        },
      ],
      }
    }
  }
</script>
```
:::
