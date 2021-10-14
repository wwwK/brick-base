import { ab } from '../components';
import group from './ab/group.vue';
import modules from './index';

class AbModule {

  static ui = ab;
  static name = 'abContainer';

  state = {
    k: '',
    componentMap: {},
    abConf: {}
  }

  tempList = [];

  editor = [
    {
      title: 'ab变量',
      render: h => {
        return (
          <a-input 
            placeholder="请输入变量" 
            defaultValue={this.state.k} 
            onChange={e => this.state.k = e.target.value }
          ></a-input>
        )
      }
    },
    {
      title: '组值',
      render: h => {
        const m = modules.filter(el => el.ui.name !== 'ab');
        return (
          <div>
            {
              h(group, { props: { context: this, modules: m }})
            }
          </div>
        );
      }
    }
  ]
}

export default AbModule;