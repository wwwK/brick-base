<template>
  <div class="layer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'layer',
}
</script>

<style lang='less'>
.layer {
  // width: 750px;
  // height: 1334px;
  // border-radius: 5px;
  // overflow-y: overlay;
  // overflow-x: hidden;
  // background-color: #fff;
  // position: absolute;
  // left: 50%;
  // top: 50%;
  // transform: translate(-50%,-50%) scale(.5);
}

</style>