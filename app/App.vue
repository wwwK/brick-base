<template>
  <div class="root">
    <generator :modules="testModules"/>
  </div>
</template>
<script>
import generator from './components/generator.vue';
import testModules from './demo';
export default {
  components: {
    generator
  },
  data() {
    return {
      testModules,
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
