var url = require('../../utils/request.js');
var network = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data1:"",
    data2:"",
    data3:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData1();

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

  getData1() {
    var page = this;
    var getDataUrl = url.dataPhp + "/index.php/Home/yq/getTotalTiXian";
    var param = {
      uid: wx.getStorageSync('uid'),
      password: wx.getStorageSync('password')
    };
    wx.request({
      url: getDataUrl,
      data: param,
      method: "POST",
      header:{
        'content-type': 'application/json; charset=utf-8',
        "deviceType": 'xcx',
        'Cookie': 'uid=' + wx.getStorageSync('uid'),
      },
      success: function (res) {
        console.log(res);
        
      }
    })
  },

})