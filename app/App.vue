<template>
  <div class="root">
    <generator :modules="testModules"/>
  </div>
</template>
<script>
import generator from './components/generator.vue';
export default {
  components: {
    generator
  },
  data() {
    return {
      testModules: {
        't1': {
          constructor: function() {
           this.showName = 'test1'
          },
        },
        't2': {
          constructor: function() {
           this.showName = 'test2'
          },
        },
        't3': {
          constructor: function() {
           this.showName = 'test3'
          },
        },
      }
    }
  }
}
</script>

<style lang="less" scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>>
