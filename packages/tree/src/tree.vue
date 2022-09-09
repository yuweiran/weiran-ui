<script>
import treeNode from './tree-node.vue'
export default {
  name: 'wrTree',
  components: {
    treeNode,
  },
  data() {
    return {}
  },
  render() {
    let initProperty = {
      isExpanded: false,
    }
    let props = this.defaultProps
    return (
      <div class="wr-tree-node-group">
        {this.data.map((root) => {
          Object.assign(root, initProperty)
          return <tree-node defaultProps={props} data={root}></tree-node>
        })}
      </div>
    )
  },
  props: {
    data: Array,
    props: {
      type: Object,
      default() {
        return {
          id: 'id',
          label: 'label',
          children: 'children',
          icon: 'wr-icon-fill-right',
        }
      },
    },
  },
  computed: {
    defaultProps() {
      let props = this.props
      let init = {
        id: 'id',
        label: 'label',
        children: 'children',
      }
      Object.assign(init, props)
      return init
    },
  },
}
</script>
