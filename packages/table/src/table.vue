<script>
import { h } from 'vue'

export default {
  name: 'wrTable',
  data() {
    return {}
  },
  props: {
    columns: Array, //[{field:'',title:''}]
    data: Array,
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
    a(params) {
      console.log(params)
    },
  },
  render() {
    let reflect = this.getSlotsRefects()
    let headerConfig = this.columns
    let data = this.data
    return h(
      'table',
      {
        class: 'wr-table',
      },
      [
        h('thead', {}, [
          h('tr', {}, [
            ...headerConfig.map((item) => {
              return h('th', { class: 'wr-table-th' }, item.title)
            }),
          ]),
        ]),
        h('tbody', {}, [
          ...data.map((row, rowIndex) => {
            return h('tr', {}, [
              ...headerConfig.map((column, columnIndex) => {
                return h(
                  'td',
                  { class: 'wr-table-td' },
                  reflect[column.field]?.default
                    ? reflect[column.field]?.default.call(this, {
                        row,
                        rowIndex,
                        column: column,
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

<style lang="scss" scoped>
.wr-table {
  width: 100%;
  margin-top: 20px;
  border: 1px solid #ebeef5;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  background: #fff;

  & td,
  & th {
    padding: 10px;
    border: 1px solid #ebeef5;
    font-size: 14px;
  }
}
</style>
