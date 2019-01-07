var url = require('../../utils/request.js');
var network = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber:"",
    password:""
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
    
  },
  goForgetPwd(){
    wx.navigateTo({
      url: '../../pages/forgetPwd/forgetPwd',
    })
  },
  goReg(){
    wx.navigateTo({
      url: '../../pages/reg/reg',
    })
  },

  phoneNumber(e){
    var page = this;
    page.setData({
      phoneNumber: e.detail.value
    })
  },

  password(e){
    var page=this;
    page.setData({
      password:e.detail.value
    });
  },
  //登录
  submit(){
    var page = this;
    var getDataUrl = url.data + "/mobile/login";
    var param = {
      phoneNumber: page.data.phoneNumber,
      password: page.data.password
    };
    wx.request({
      url: getDataUrl,
      data: param,
      method: "GET",
      success: function (res) {
        console.log(res);
        if(res.result==0){
          wx.showModal({
            title: '温馨提示',
            content: res.msg,
            success(res) {
              if (res.confirm) { } else if (res.cancel) { }
            }
          })
        }else{
          wx.setStorage({ key: "JSESSIONID", data: res.cookies[0].value });
          wx.setStorage({ key: "uid", data: res.cookies[1].value });
          wx.setStorage({ key: "imgUrl", data: res.data.object.imgUrl });
          wx.setStorage({ key: "nickname", data: res.data.object.nickname });
          wx.setStorage({ key: "phone", data: res.data.object.phone });
          wx.setStorage({ key: "password", data: res.data.object.password });
          wx.switchTab({
            url: '/pages/index/index',
          });
        }
        
      }
    })
  }
})