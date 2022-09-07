## table

### 基本用法

:::demo
```html
<template>
  <wr-table :columns='columns' :data="tableData"></wr-table>
</template>
<script>
  export default {
    data(){
      return {
        columns: [
          { field: 't1', 
          title: 'title1',
          slots:{
            default: ({row}) => {
              return [
                <wr-button type='danger' icon="wr-icon-delete">删除</wr-button>
              ]
            },
          }
          },
          { 
            field: 't2',
            title: 'title2',        
            slots:{
              default: ({row}) => {
                return [
                  <span>当前单元格值为{row.t2}</span>
                ]
              },
            } 
          },
          { field: 't3', title: 'title3' },
        ],
        tableData: [
          { t1: 90, t2: 67, t3: 79 },
          { t1: 97, t2: 98, t3: 52 },
          { t1: 33, t2: 37, t3: 80 },
        ],
      }
    }
  }
</script>
```
:::
