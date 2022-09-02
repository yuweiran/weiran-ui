const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  //修改入口文件
  pages:{
    index: path.join(__dirname, './examples/main.js'),
  },
  chainWebpack: config =>{
    config.module
    .rule('md')
    .test(/\.md$/)
    .use('vue-loader')
    .loader('vue-loader')
    .tap(() => ({
      compilerOptions: {
        preserveWhitespace: false,
      },
    }))
    .end()
    .use('md-loader')
    .loader(path.resolve(__dirname, './build/md-loader/index.js'))
    .end()
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('examples')
      }
    },
  }
}
