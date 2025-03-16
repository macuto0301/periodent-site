const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(avif|ico|png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .type('asset/resource')
      .set('generator', {
        filename: 'img/[name].[hash:8][ext]'
      })
  }
})