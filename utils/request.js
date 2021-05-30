//发送ajax请求

export default (url,data={},method='GET') => {//es6同名属性可以不写
  //request请求是异步非阻塞的，所以要用promise
  return new Promise((resolve,reject)=>{
    //1.new Promise初始化promise实例的状态为ending
    wx.request({
      url,
      data,
      method,
      header:{
        'content-type': 'application/x-www-form-urlencoded',
      },
      success:(res)=>{
        console.log('请求成功：',res)
        resolve(res.data);//修改promise的状态为成功状态resolved
      },
      fail:(err)=>{
        console.log('请求失败：',err)
        reject(err);//修改promise的状态为成功状态rejected
      }
    })

  })
  
}