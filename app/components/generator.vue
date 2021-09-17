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
        ></picker>
      </draggable>
    </section>
    <section class="center">
      <a-divider>可视区</a-divider>
      <div class="tools-bar">
        <a-select :value='activeLayer' style="width: 120px" size="small">
          <a-select-option :value='0'>主图层</a-select-option>
        </a-select>
      </div>
      <div class="phone-wrapper">
      <draggable
        v-show="activeLayer === 0"
        class="drag-area"
        :list="list"
        group="components"
      >
       <div 
        v-for="(item, index) in list"
        :key="item + index"
       >
        <module
          ref="module"
          :index='index'
          :selected="index===activeIndex"
          :config="item"
          @active="handleModuleActive"
          @delete="handleModuleDelete"
        />
       </div>
      </draggable>
      </div>
    </section>
    <section class="right">
      <a-divider>编辑区</a-divider>
    </section>
  </div>
</template>

<script>
import picker from './picker.vue';
import module from './module.vue';
import draggable from 'vuedraggable';
export default {
  components: {
    picker,
    module,
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
      activeLater: 0,
      activeLayer: 0,
      activeModuleIndex: 0,
    }
  },
  methods: {
    handleModuleActive(index) {
      this.activeModuleIndex = index;
    },
    handleModuleDelete(index) {
      this.list.splice(index, 1);
    },
    handleDraggableClone(origin, index) {
      console.log(origin, index);
      // const { constructor, packageName } = this.modules[origin];
      // const component = new constructor();
      // component.setPackageName(packageName);
      // const { name } = component;
      return origin;
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
    padding: 5px 10px;
    margin: 10px;
    background: #ffffff;
    border-radius: 5px;
    .tools-bar {
      padding: 5px 15px;
      border-radius: 5px;
      margin-top: -15px;
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
    position: relative;
    width: 500px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .phone-wrapper {
      position: relative;
      flex: 1;
      overflow: hidden;
      border-radius: 5px;
      .drag-area {
        width: 750px;
        height: 1334px;
        border-radius: 5px;
        overflow-y: scroll;
        background-color: #efefef;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(.5);
        z-index: 2;
      }
    }
  }
  .right {
    flex: 1;
  }
 
}
</style>