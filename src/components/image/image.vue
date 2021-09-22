<template>
  <img class="image" :src="src" alt="">
</template>

<script>
export default {
  name: 'w-image',
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.image {
  width: 100%;
}
</style>