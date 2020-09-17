module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://bj.meituan.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}