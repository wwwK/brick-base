<template>
  <div class="root">
    <generator :modules="modules"/>
  </div>
</template>
<script>
import generator from './components/generator.vue';
import modules from '../src/modules';
export default {
  components: {
    generator
  },
  data() {
    return {
      modules,
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
