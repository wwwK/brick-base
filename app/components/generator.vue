<template>
  <div class="generator">
    <section class="left">
      <a-divider>组件库</a-divider>
      <draggable
        :list="Object.keys(modules)"
        :group="{ name: 'components', pull: 'clone', put: false }"
        :clone="handleDraggableClone"
      >
        <picker
          v-for="(name, i) in Object.keys(modules)"
          :key="`${name}-${i}`"
          :options="modules[name].constructor"
        >
        </picker>
      </draggable>
    </section>
    <section class="center">
      <a-divider>可视区</a-divider>
      <div class="tools-bar">
        <a-select :value='activeLayer' style="width: 120px" size="small">
          <a-select-option :value='0'>
            主图层
          </a-select-option>
        </a-select>
      </div>
    </section>
    <section class="right">
      <a-divider>编辑区</a-divider>
    </section>
  </div>
</template>

<script>
import picker from './picker.vue';
import draggable from 'vuedraggable';
export default {
  components: {
    picker,
    draggable
  },
  props: {
    conf: {
      type: Object,
      default: () => null,
    },
    modules: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      list: [],
      target: null,
      layers: [],
      activeLayer: 0,
    }
  },
  methods: {
    handleDraggableClone(origin) {
      console.log(origin);
    }
  }
}
</script>

<style lang="less">
.generator {
  width: 100%;
  height: 100%;
  background: #eff3f5;
  display: flex;
  flex-direction: row;
  section {
    padding: 10px 20px;
    margin: 10px;
    background: #ffffff;
    border-radius: 5px;
    .tools-bar {
      padding: 5px 15px;
      border-radius: 5px;
      .ant-select {
        .ant-select-selection {
          border: 0;
          background: #eff3f5;
        }
      }
      background: rgba(23, 81, 153, 0.72);
      box-shadow: 1px 1px 2px rgb(0 0 0 / 20%);
    }
  }
  .left {
    width: 256px;
  }
  .center {
    width: 500px;
  }
  .right {
    flex: 1;
  }
}
</style>