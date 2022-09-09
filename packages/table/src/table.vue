<script>
import { h } from 'vue'
import Func from '../../../src/utils/func'
import Radio from '../../radio/src/radio.vue'
import Checkbox from '../../checkbox/src/checkbox.vue'
export default {
  name: 'wrTable',
  data() {
    return {
      radioRow: {},
      checkboxRows: [],
    }
  },
  props: {
    columns: Array, //[{field:'',title:''}]
    data: Array,
    align: {
      type: String,
      default() {
        return 'left'
      },
    },
  },
  components: {
    Radio,
    Checkbox,
  },
  methods: {
    getSlotsRefects() {
      let reflect = new Map()
      this.columns.forEach((item) => {
        if (item.slots) {
          reflect[item.field] = item.slots
        }
      })
      return reflect
    },
    changeCheckState(value) {
      console.log(value)
    },
    getTypeJSXTitle(type) {
      let reflect = {
        radio: '',
        seq: '序号',
      }
      return reflect[type]
    },
    getTypeJSXReflect(type, row, index) {
      let _this = this
      let reflect = {
        radio: [<Radio vModel={_this.radioRow} label={row}></Radio>],
        seq: [<span>{index + 1}</span>],
        checkbox: [
          <Checkbox
            vModel={row.isChecked}
            vOn:change={(value) => {
              row.isChecked = value
            }}
          ></Checkbox>,
        ],
      }
      return reflect[type]
    },
    getSelectedRadioRow() {
      let target = Func.deepClone(this.radioRow)
      delete target.isChecked
      return target
    },
    //返回选中的行
    getSelectedCheckboxRows() {
      let target = []
      let data = Func.deepClone(this.data)
      data.forEach((item) => {
        if (item.isChecked === true) {
          delete item.isChecked
          target.push(item)
        }
      })
      return target
    },
  },
  render() {
    let reflect = this.getSlotsRefects()
    let headerConfig = this.columns
    let data = this.data
    let align = this.align
    let getTypeJsx = this.getTypeJSXReflect
    let getTypeJSXTitle = this.getTypeJSXTitle
    return h(
      'table',
      {
        class: 'wr-table',
        style: {
          'text-align': align,
        },
      },
      [
        h('thead', {}, [
          h('tr', {}, [
            ...headerConfig.map((item) => {
              return h(
                'th',
                {
                  class: 'wr-table-th',
                  style: {
                    width: item.width || 'auto',
                  },
                },
                [
                  ['radio', 'seq', 'checkbox'].indexOf(item.type) !== -1
                    ? getTypeJSXTitle(item.type)
                    : item.title,
                ]
              )
            }),
          ]),
        ]),
        h('tbody', {}, [
          ...data.map((row, rowIndex) => {
            return h('tr', {}, [
              ...headerConfig.map((column, columnIndex) => {
                return h(
                  'td',
                  {
                    class: 'wr-table-td',
                  },
                  column.type
                    ? getTypeJsx(column.type, row, rowIndex)
                    : reflect[column.field]?.default
                    ? reflect[column.field]?.default.call(this, {
                        row,
                        rowIndex,
                        column,
                        columnIndex,
                      })
                    : row[column.field]
                )
              }),
            ])
          }),
        ]),
      ]
    )
  },
}
</script>
