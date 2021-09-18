<script>
export default {
  name: 'module',
  props: {
    component: {
      type: Object,
      default() {
        return {}
      }
    },
    componentProps: {
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
  methods: {
    handleModuleClick() {
      this.$emit('active', this.index);
    },
    handleCloseClick(e) {
      e.stopPropagation();
      this.$emit('delete', this.index);
    }
  },
  render(h) {
    const { component, componentProps } = this;
    const className = {
      module: true,
      selected: this.selected
    };
    return (
      <div 
        class={className}
        onClick={this.handleModuleClick}
      >
        { h(component, { props: componentProps }) }
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
    font-size: 24px;
    color: #f5222d;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
    cursor: pointer;
  }
}
.selected {
  border: 2px dashed #f5222d;
}
</style>