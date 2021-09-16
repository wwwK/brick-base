<template>
  <div class="picker">
    <a-button type='primary' block>
      {{ new options().showName }}
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'picker',
  props: {
    options: {
      type: Function,
      default: () => {}
    }
  },
  mounted() {
    console.log(new this.options());
  }
}
</script>

<style lang="less">
.picker {
  width: 100%;
  margin-bottom: 5px;
}
</style>