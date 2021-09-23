const path = require('path');

const { NODE_ENV } = process.env;

const getEntry = () => {
  if(NODE_ENV==='development') return path.resolve(__dirname, './app/index.js');
  return path.resolve(__dirname, './src/index.js')
};

const getPostCssPlugins = () => {
  if(NODE_ENV !== 'development') {
    return [
      require('postcss-px-to-viewport')({
        unitToConvert: 'px',  
        viewportWidth: 750, 
        unitPrecision: 5, 
        propList: ['*'], 
        viewportUnit: 'vw', 
        fontViewportUnit: 'vw', 
        selectorBlackList: [], 
        minPixelValue: 1, 
        mediaQuery: false, 
        replace: true, 
        exclude: /node_modules/, 
        include: undefined,  
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 568
      })
    ]
  }
  return [];
};

module.exports = {
  publicPath: '/',
  devServer: {
    open: true,
  },
  configureWebpack: {
    entry: getEntry(),
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: getPostCssPlugins()
      }
    }
  }
};