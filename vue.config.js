//配置文件 缺少static文件夹  找不到public
// 真是开发不需要这样配置
module.exports={
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:8080',
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          '^/api':'' 
        }
      }
    }
  }
}
