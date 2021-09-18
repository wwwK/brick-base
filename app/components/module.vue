<script>
export default {
  name: 'module',
  props: {
    config: {
      type: Object,
      default() {
        return {}
      }
    },
    index: {
      type: Number,
      default: 0
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    selected(nVal) {
      console.log(nVal);
      this.$forceUpdate();
    }
  },
  data() {
    return {}
  },
  methods: {
    handleModuleClick() {
      console.log('handleModuleClick');
      this.$emit('active', this.index);
    },
    handleCloseClick() {
      this.$emit('delete', this.index);
    }
  },
  render(h) {
    console.log(this.selected);
    const { component } = this.config;
    const props = {};
    const className = {
      module: true,
      selected: this.selected
    };
    return (
      <div 
        class={className}
        onClick={this.handleModuleClick}
      >
        { component ? h(component, { props }) : 1111 }
        <span class="close" onClick={this.handleCloseClick}> x </span>
      </div>
    );
  }
}
</script>

<style lang="less" scoped>
.module {
  position: relative;
  width: 750px;
  cursor: pointer;
  .close {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
    cursor: pointer;
  }
}
.selected {
  border: 1px dashed #f5222d;
}
</style>