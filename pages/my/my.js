Page({

  /**
   * 页面的初始数据
   */
  data: {
    login:"",
    phone:wx.getStorageSync("phone"),
    setPhone: wx.getStorageSync("nickname"),
    imgUrl: wx.getStorageSync("avatarUrl")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page=this;
    page.isLogin();
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
    var page = this;
    page.isLogin();
    page.setData({
      phone: wx.getStorageSync("phone"),
      setPhone: wx.getStorageSync("nickname"),
      imgUrl: wx.getStorageSync("avatarUrl")
    });
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


  wxLogin(res){
    console.log(res);
    wx.setStorage({ key: "avatarUrl", data: res.detail.userInfo.avatarUrl })//本地存储微信头像
    wx.navigateTo({
      url: '../../pages/login/login',
    })
  },


  //验证是否登录

  isLogin(){
    var page=this;
    var login = wx.getStorageSync("uid");
      console.log(login);
    if (login == undefined || login==""){
          page.setData({
            login:true
          });
      }else{
        page.setData({
          login: false
        });
      }
  },


  //我的简历
  goMyjob(){
    wx.navigateTo({
      url: '/pages/resume/resume',
    })
  },
  //意见反馈
  goFeedBack(){
    wx.navigateTo({
      url: '/pages/feedBack/feedBack',
    })
  },
  //设置
  goSet(){
    wx.navigateTo({
      url: '/pages/set/set',
    })
  },
  goInvitation(){
    // wx.navigateTo({
    //   url: '/pages/invitation/invitation',
    // })
    wx.showModal({
      title: '温馨提示',
      content: "活动暂未开放",
      success(res) {
        if (res.confirm) { } else if (res.cancel) { }
      }
    })
  },
  goEmejob(){
    wx.showModal({
      title: '温馨提示',
      content: "活动暂未开放",
      success(res) {
        if (res.confirm) { } else if (res.cancel) { }
      }
    })
  }
})