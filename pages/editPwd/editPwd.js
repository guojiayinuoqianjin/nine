var url = require('../../utils/request.js');
var network = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldPwd:"",
    newPwd:""
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

  newPwd(e){
    this.setData({
      newPwd: e.detail.value
    });
  },
  oldPwd(e) {
    this.setData({
      oldPwd: e.detail.value
    });
  },

  submit(){
    var page=this;
    var getDataUrl = url.data + "/mobile/user/editPwd";
    var param = {
      newPwd: page.data.newPwd,
      oldPwd: page.data.oldPwd
    };
    network.requestData('POST', param, getDataUrl, function (obj) {
      console.log(obj);
      if(obj.result==0){
        wx.showModal({
          title: '温馨提示',
          content: obj.msg,
          success(res) {
            if (res.confirm) { } else if (res.cancel) { }
          }
        })
      }else{
        wx.showModal({
          title: '温馨提示',
          content: obj.msg+",下次登录，请使用新密码哦~",
          success(res) {
            if (res.confirm) {
              wx.switchTab({
                url: '/pages/my/my',
              });
            } else if (res.cancel) { }
          }
        })
      }
      // page.setData({
      //   data: obj.object,
      // });
    });
  }
})