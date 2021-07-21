console.log(process.env.NODE_ENV);
const path = require('path')

function resolve(dirname) {
  return path.resolve(dirname)
}

module.exports = {
  lintOnSave:false,
  publicPath: "./",//开发环境后 build
  devServer: {
    // 端口号
    port: 9898,
    // 配置不同的后台API地址
    //host："主机名"
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_URL,//根据环境获取当前服务器地址
        ws: false,
        changeOrigin: true,
        pathRewrite: {//路径重写
          '^/api': ''
        }
      },
      '/users':{
        target: 'http://chst.vip'
      }
    }
  },
  //配置别名 lintOnSave:false
  chainWebpack: (config) => {
    config.resolve.alias
      .set('$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'))
      .set('base', resolve('src/base'))
      .set('static', resolve('src/static'))
  }
}

