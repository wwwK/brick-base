<script>
export default {
  props: {
    editor: {
      type: Array,
      default() {
        return {};
      }
    },
  },
  data() {
    return {
      key: +new Date()
    }
  },
  watch: {
    editor() {
      this.key = +new Date();
    }
  },
  render(h) {
    return this.editor.map(item => {
      const { title, render } = item;
      return (
        <div>
          <a-card hoverable bordered={false}>
            <a-divider orientation="left">
              <span style="font-size: 16px; color: #777">{ title }</span>
            </a-divider>
            <div key={this.key}>
              { render(h) }
            </div>
          </a-card>
        </div>
      )
    });
  }
}
</script>

<style lang="less" scoped>
.editor {
  width: 100%;
}
</style>