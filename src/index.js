import Vue from 'vue';
import '../styles/index.less';
import eventManage from '../event';

import modules from './modules';
import mock from './mock';

const getComponentByName = name => modules.find(module => module.ui.name === name).ui;

const render = (h) => {
  return(
    <div class="app-root">
      {
        mock.map(d => h(getComponentByName(d.componentName), { props: { ...d.componentProps } }))
      }
    </div>
  );
};

Vue.config.productionTip = false;

Vue.use(eventManage);

new Vue({
  render,
}).$mount('#app')
