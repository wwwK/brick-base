<script>
export default {
  props: {
    component: {
      type: Object,
      default: () => {}
    },
    componentProps: {}
  },
  render(h) {
    const { component, componentProps } = this;
    return ( 
      <div class="ab-wrapper">
        {
          h(component, {props: componentProps})
        }
      </div>
    );
  }
}
</script>

<style lang="less" scoped>
.ab-wrapper {
  min-height: 40px;
}
</style>