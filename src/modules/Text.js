import { text } from '../components';

class TextModule {
  static ui = text;
  static name = '文字';
  state = {
    text: '中午吃点啥？'
  };
  editor = [  
    {
      title: '文案',
      render: h => <a-input placeholder="请输入文案" defaultValue={this.state.text} onChange={e => this.state.text = e.target.value  }></a-input>
    }
  ]
}

export default TextModule;