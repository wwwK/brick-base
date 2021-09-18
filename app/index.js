import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import './styles/index.less';
import eventManage from '../event';

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(eventManage);

new Vue({
  render: h => h(App),
}).$mount('#app')
