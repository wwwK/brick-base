<template>
  <div class="generator">
    <section class="left">
      <a-divider>组件库</a-divider>
      <draggable
        :list="modules"
        :group="{ name: 'components', pull: 'clone', put: false }"
        :clone="handleDraggableClone"
        @end="handleDraggablePickerEnd"
      >
        <picker
          v-for="(m, i) in modules"
          :key="`${m}-${i}`"
          :module="m"
        ></picker>
      </draggable>
    </section>
    <section class="center">
      <a-divider>可视区</a-divider>
      <tool-bar-layout>
        <a-select :value='activeLayer' style="width: 120px" size="small">
          <a-select-option :value='0'>主图层</a-select-option>
        </a-select>
        <a-button size='small' type="primary" @click="handleBuildClick">build</a-button>
      </tool-bar-layout>
      <div class="phone-wrapper">
        <draggable
          v-show="activeLayer === 0"
          class="drag-area"
          :list="list"
          group="components"
          @end="handleDraggableModuleEnd"
        >
          <div 
            v-for="(item, index) in list"
            :key="item + index"
          >
            <module
              ref="module"
              :index='index'
              :selected="index===activeModuleIndex"
              :component="item.ui"
              :componentProps="item.state"
              @active="handleModuleActive"
              @delete="handleModuleDelete"
            />
          </div>
        </draggable>
      </div>
    </section>
    <section class="right">
      <a-divider>编辑区</a-divider>
      <editor 
        v-if="list[activeModuleIndex]"
        :editor="list[activeModuleIndex].editor">
      </editor>
    </section>
  </div>
</template>

<script>
import picker from './picker.vue';
import module from './module.vue';
import editor from './editor.vue';
import toolBarLayout from './toolBarLayout.vue';
import draggable from 'vuedraggable';
import api from '../../utils/api';
export default {
  components: {
    picker,
    module,
    editor,
    toolBarLayout,
    draggable
  },
  props: {
    modules: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      list: [],
      layers: [],
      activeLayer: 0,
      activeModuleIndex: -1,
    }
  },
  mounted() {
    console.log(this.modules);
  },
  methods: {
    async handleBuildClick() {
      try {
        const modules = this.list.map(module => {
          return {
            componentName: module.ui.name,
            componentProps: module.state
          }
        })
        const params = {
          modules,
        };
        const res = await api.post('http://127.0.0.1:7001/page', params);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    handleModuleActive(index) {
      this.activeModuleIndex = index;
    },
    handleModuleDelete(index) {
      this.list.splice(index, 1);
      const { activeModuleIndex } = this;
      if(activeModuleIndex === index) {
        this.activeModuleIndex = 0;
      } else if(index < activeModuleIndex) {
        this.activeModuleIndex -= 1;
      }
    },
    handleDraggableClone(origin) {
      const { ui } = origin;
      return {
        ui,
        ...new origin()
      };
    },
    handleDraggablePickerEnd(e) {
      const { newIndex } = e;
      this.activeModuleIndex = newIndex;
    },
    handleDraggableModuleEnd(e) {
      const { newIndex, oldIndex } = e;
      if(newIndex === oldIndex) return;
      const { activeModuleIndex } = this;
      if(activeModuleIndex === oldIndex) {
        this.activeModuleIndex = newIndex;
      } else if(oldIndex < activeModuleIndex && newIndex >= activeModuleIndex) {
        this.activeModuleIndex -= 1;
      } else if(oldIndex > activeModuleIndex && newIndex <= activeModuleIndex) {
        this.activeModuleIndex += 1;
      }
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
  
  }
  .left {
    min-width: 256px;
    width: 256px;
  }
  .center {
    position: relative;
    min-width: 500px;
    width: 500px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: #eff3f5;
    .phone-wrapper {
      position: relative;
      flex: 1;
      overflow: hidden;
      border-radius: 5px;
      .drag-area {
        width: 750px;
        height: 1334px;
        border-radius: 5px;
        overflow-y: overlay;
        overflow-x: hidden;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(.5);
      }
    }
  }
  .right {
    flex: 1;
    overflow: hidden;
  }
}
</style>