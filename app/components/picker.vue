<script>
export default {
  name: 'picker',
  props: {
    name: {
      type: String,
      default: 'defaultName'
    }
  },
  render(h) {
    const { name } = this;
    return (
      <div class="picker">
        <a-button type='primary' block>
          { name }
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