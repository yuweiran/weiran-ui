## Table

### 基本用法

:::demo
```html
<template>
  <wr-table ref='wrTable' :columns='columns' :data="tableData"></wr-table>
  <h4>居中</h4>
  <wr-button @click="align='left'">左对齐</wr-button>
  <wr-button @click="align='center'">居中对齐</wr-button>
  <wr-button @click="align='right'">右对齐</wr-button>
  <wr-table ref='wrTable' :align='align' :columns='columns' :data="tableData"></wr-table>
</template>
<script>
  export default {
    data(){
      return {
        columns: [
          {type:'seq',width:'50px'},
          { field: 't1', title: 'title1' },
          { field: 't2', title: 'title2' },
          { field: 't3', title: 'title3' },
        ],
        tableData: [
          { t1: 90, t2: 67, t3: 79 },
          { t1: 97, t2: 98, t3: 52 },
          { t1: 33, t2: 37, t3: 80 },
        ],
        align:'left'
      }
    },
    methods:{
      logSelectedRow(){
        const row = this.$refs.wrTable.getSelectedRadioRow()
        console.log(row)
      }
    }
  }
</script>
```
:::



### 自定义插槽

:::demo
```html
<template>
  <wr-table ref='wrTable' :columns='columns' :data="tableData"></wr-table>
</template>
<script>
  export default {
    data(){
      return {
        columns: [
          { type:'seq',width:'60px'},
          { 
            field: 't1', 
            width:'120px',
            title: 'title1',
           
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
          { field: 't3', 
            title: 'title3',
            slots:{
              default: ({row}) => {
                return [
                  <span>{row.t3>60?'合格':'不合格'}</span>
                ]
              },
            }  
          },
          { 
            title: '操作',
            slots:{
              default: ({row}) => {
                return [
                  <wr-button vOn:click={()=>this.handleDeleteRow(row)} type='danger' icon="wr-icon-delete">删除</wr-button>
                ]
              },
            }
          }
        ],
        tableData: [
          { t1: 90, t2: 67, t3: 79 },
          { t1: 97, t2: 98, t3: 52 },
          { t1: 33, t2: 37, t3: 80 },
        ],
      }
    },
    methods:{
      logSelectedRow(){
        const row = this.$refs.wrTable.getSelectedRadioRow()
        console.log(row)
      },
      handleDeleteRow(row){
        console.log('确定删除该行？',row)
      }
    }
  }
</script>
```
:::



### 方法调用

:::demo
```html
<template>
  <wr-table ref='wrTable' :columns='columns' align="center" :data="tableData"></wr-table>
  <div style="margin-top:10px"></div>
  <wr-button @click="logRadioSelectedRow" size="mini">打印单选框选中行数据</wr-button>
  <wr-button @click="logCheckboxSelectedRows" size="mini">打印复选框选中行数据</wr-button>
</template>
<script>
  export default {
    data(){
      return {
        columns: [
          { type:'seq',width:'60px'},
          { type:'radio',width:'60px'},
          { type:'checkbox',width:'60px'},
          { 
            field: 't1', 
            width:'120px',
            title: 'title1',
          },
          { 
            field: 't2',
            title: 'title2', 
          },
          { field: 't3', title: 'title3' },

        ],
        tableData: [
          { t1: 90, t2: 67, t3: 79 },
          { t1: 97, t2: 98, t3: 52 },
          { t1: 33, t2: 37, t3: 80 },
        ],
      }
    },
    methods:{
      logRadioSelectedRow(){
        const row = this.$refs.wrTable.getSelectedRadioRow()
        console.log(row)
      },
      logCheckboxSelectedRows(){
        const rows = this.$refs.wrTable.getSelectedCheckboxRows()
        console.log(rows)
      }
    }
  }
</script>
```
:::
### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| algin     | 设置文字对齐  | string    |   left/center/right   |    left  |   
| columns     | 表格列数据  | array    |   —   |    —   |   
| data    | 表格数据   | array    | — |  —  |

### 方法
| 方法名称     | 说明    | 
|---------- |-------- |
| getSelectedRadioRow     | 获取当前单选框选中的数据  |   
| getSelectedCheckboxRows     | 获取当前复选框选中的数据  |   