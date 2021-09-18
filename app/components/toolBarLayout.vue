<script>
export default {
  render(h) {
    const children = this.$slots.default;
    return (
      <div class="tools-bar">
        {
          children.map(child => {
            return (
              (
                <div class="bar-item">
                  { child }
                </div>
              )
            )
          })
        }
      </div>
    );
  }
}
</script>

<style lang="less">
.tools-bar {
  padding: 5px 15px;
  border-radius: 5px;
  margin-top: -15px;
  .ant-select {
    .ant-select-selection {
      border: 0;
      background: #eff3f5;
    }
  }
  background: rgba(23, 81, 153, 0.72);
  box-shadow: 1px 1px 2px rgb(0 0 0 / 20%);
  .bar-item {
    display: inline-block;
    margin-right: 10px;
  }
}
</style>