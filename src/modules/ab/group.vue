<script>
import editor from '../../../app/components/editor.vue';

const getModuleByName = (name, modules) => modules.find(module => module.ui.name === name);

export default {
  props: {
    context: {
      type: Object,
      default: () => null
    },
    modules: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      list: this.context.tempList || [],
      configModalVisiable: false,
      selectedItem: {},
      moduleOptions: this.modules.map(module => {
        return {
          key: module.name,
          value: module.ui.name
        }
      })
    };
  },
  mounted() {
    console.log(this.list);
  },
  methods: {
    handleAddClick() {
      const { list } = this;
      list.push({
        kValue: '',
        module: null,
        instance: null
      });
    },
    handlePreviewClick(data) {
      const { context, list } = this;
      context.state.abConf = {
        [context.state.k]: data.kValue
      };
      const componentMap = {};
      list.forEach(item => {
        const { kValue } = item;
        componentMap[kValue] = {
          component: item.module.ui,
          props: item.instance.state
        };
      })
      context.state.componentMap = componentMap;
    },
    handleConfigClick(data) {
      this.selectedItem = data;
      this.configModalVisiable = true;
    },
    renderConfigModal(h) {
      const { configModalVisiable, selectedItem } = this;
      let { instance } = selectedItem;
      if(!instance) selectedItem.instance =  new selectedItem.module();
      return (
        <a-modal
          visible={configModalVisiable}
          title={selectedItem.name} 
          onOk={() => this.configModalVisiable = false}
        >
          <editor editor={selectedItem.instance.editor} />
        </a-modal>
      )
    },
    renderItem(h, data) {
      const { moduleOptions } = this;
      const onChange = value => data.module = getModuleByName(value, this.modules);
      return (
        <div class="item">
          <a-input 
            placeholder="请输入组值" 
            defaultValue={data.kValue} 
            onChange={e => data.kValue = e.target.value }>
          </a-input>
          <a-select
            defaultValue={data.module && data.module.ui.name}
            placeholder="请选择组件" 
            style="width: 240px"
            onChange={onChange}
          >
            {
              moduleOptions.map(option => {
                return (
                  <a-select-option 
                    value={option.value} 
                    key={option.value} 
                  >
                    { option.key }
                  </a-select-option>
                );
              })
            }
          </a-select>
          <a-button onClick={() => this.handleConfigClick(data)}>配置</a-button>
          <a-button onClick={() => this.handlePreviewClick(data)}>预览</a-button>
        </div>
      );
    },
  },
  render(h) {
    const { list, renderConfigModal, configModalVisiable } = this;
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
        {
          configModalVisiable ? renderConfigModal(h) : null
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
  border: #e3e3e3 1px dashed;
  .item {

  }
}
</style>