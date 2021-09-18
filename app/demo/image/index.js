import Image from './image.vue';

const module = {
  name: '图片',
  ui: Image,
  state: {
    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f8f05e3bea98a80120a895744d18.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634526922&t=358bbcb33cb2d4bdc6804d1305ad8d12',
  },
  editor: [
    {
      title: '图片地址',
      render: (h) => <a-input placeholder="请输入图片地址" defaultValue={module.state.src} onChange={e => module.state.src = e.target.value }></a-input>
    }
  ]
};

export default module;