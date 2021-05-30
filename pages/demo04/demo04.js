// pages/demo04/demo04.js

import request from '../../utils/request'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    web_name: '',
    web_uid: ''
  },

  //表单项内容发生改变
  handleInput(event){
    let type = event.currentTarget.id;
    this.setData({
      [type]: event.detail.value
    })
  },

  async addwbuser(){
    //得到数据
    let {web_name,web_uid} = this.data;
    console.log(web_name,web_uid);
    //验证
    
    if(!web_name){
      wx.showToast({
        title: '微博名称不能为空',
        icon: 'none'
      })
      return;
    }
  
    if(!web_uid){
      wx.showToast({
        title: 'uid不能为空',
        icon: 'none'
      })
      return;
    }

    //后端验证
    let result = await request('http://my.d2anan.cn/api/bihu/addwbuser',{web_name,web_uid},'POST');
    if(result.code === 200){
      wx.showToast({
        title: '提交成功',
      })
      //存储个人信息
      //wx.setStorageSync('userInfo', JSON.stringify(result.profile))
      //返回
      wx.reLaunch({
        url: '/pages/demo01/demo01'
      })
    }else{
      wx.showToast({
        title: result.msg,
        icon: 'none'
      })
    }
    
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})