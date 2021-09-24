<template>
  <div class="mask"></div>
</template>

<script>
export default {
  name: 'w-mask'
}
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
}
</style>