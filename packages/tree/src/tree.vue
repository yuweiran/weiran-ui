<script>
import treeNode from './tree-node.vue'
export default {
  name: 'wrTree',
  components: {
    treeNode,
  },
  data() {
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
  },
  render() {
    let initProperty = {
      isExpanded: false,
    }

    return (
      <div>
        {this.data.map((root) => {
          Object.assign(root, initProperty)
          return <tree-node data={root}></tree-node>
        })}
      </div>
    )
  },
}
</script>

<style lang="scss" scoped></style>
