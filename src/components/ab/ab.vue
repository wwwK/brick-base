<script>
export default {
  name: 'ab',
  props: {
    k: {
      type: String,
      default: ''
    },
    abConf: {
      type: Object,
      default: () => {
        return {
          test: 1
        }
      }
    },
    componentMap: {
      type: Object,
      default: () => {}
    }
  },
  render(h) {
    const { k, abConf, componentMap } = this;
    const v = abConf[k];
    return  ( 
      <div class="ab-wrapper">
        {
          v ? h(componentMap[v].component, { props: componentMap[v].props } ) : null
        }
      </div>
    )
  }
}
</script>

<style lang="less" scoped>
.ab-wrapper {
  min-height: 40px;
}
</style>