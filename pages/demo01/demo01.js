// pages/demo01/demo01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wbuserList: [],
  },

  getOrderList:function(page,limit=10){
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'http://my.d2anan.cn/api/bihu/getWebList?page='+page+'&limit='+limit,
      data: {
        page:page,
        limit:limit,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        
        wx.hideLoading();
        this.setData({
          wbuserList : this.data.wbuserList.concat(res.data.data.list),
        });
      
        console.log(this.wbuserList)
      }
    })

  },

  queryRequest:function(data){    
    wx.request({
        url:"https://example.com/api/",
        data:data,
        header:{
          // "Content-Type":"application/json"
        },
        success:function(res){
            console.log(res.data)
        },
        fail:function(err){
            console.log(err)
        }

    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.getOrderList(1,10);
    
    //this.wbuserList = res.list;
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