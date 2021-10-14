import { ab } from '../components';
import group from './ab/group.vue';

class AbModule {

  static ui = ab;
  static name = 'ab container';

  state = {
    flag: '',
    component: {
      render(h) {}
    },
    componentProps: {}
  }

  editor = [
    {
      title: 'ab变量',
      render: h => {
        return (
          <a-input placeholder="请输入变量" defaultValue={this.state.flag} onChange={e => this.state.flag = e.target.value }></a-input>
        )
      }
    },
    {
      title: '组值',
      render: h => {
        return (
          <div>
            {
              h(group, { props: { context: this }})
            }
          </div>
        );
      }
    }
  ]
}

export default AbModule;