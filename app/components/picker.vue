<script>
export default {
  name: 'picker',
  props: {
    module: {
      type: Function,
      default: () => {}
    }
  },
  render(h) {
    const { module } = this;
    return (
      <div class="picker">
        <a-button type='primary' block>
          { new module().name }
        </a-button>
      </div>
    );
  }
}
</script>

<style lang="less">
.picker {
  width: 100%;
  margin-bottom: 5px;
}
</style>