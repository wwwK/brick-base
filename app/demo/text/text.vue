<template>
  <div class="text-container">{{ text }}</div>
</template>

<script>
export default {
  name: 'w-text',
  props: {
    text: {
      type: [String, Number],
      default: ''
    }
  },
}
</script>

<style lang="less" scoped>
.text-container {
  padding: 10px;
  font-size: 32px;
  text-align: center;
}
</style>