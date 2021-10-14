<script>
export default {
  props: {
    context: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    handleAddClick() {
      const { context, list } = this;
      list.push({
        key: '',
        value: null
      });
    },
    renderItem(h, data) {
      return (
        <div>
          <a-input placeholder="请输入组值" defaultValue={data.key} onChange={e => data.key = e.target.value }></a-input>
          <a-select placeholder="请选择组件"></a-select>
        </div>
      );
    },
  },
  render(h) {
    const { list } = this;
    return (
      <div>
        {
          list.map(ele => {
            return (
              <div class="list-view">
                { this.renderItem(h, ele) }
              </div>
            );
          })    
        }
        <a-button size="small" icon="plus" onClick={() => this.handleAddClick()}>添加</a-button>
      </div>
    );
  }
}
</script>

<style lang="less" scoped> 
.list-view {
  margin: 10px;
  padding: 5px;
  border: red 1px dashed;
}
</style>