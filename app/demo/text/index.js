import Text from './text.vue';

class TextModule {
  name = '文字';
  ui = Text;
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