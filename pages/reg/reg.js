Page({

  /**
   * 页面的初始数据
   */
  data: {
    yzm: true,
    time: 60,
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
  //倒计时
  countDown: function () {
    var page = this;
    var click = '';
    var time = page.data.time;
    page.setData({
      yzm: false,
    });
    var nums = setInterval(function () {
      time--;
      page.setData({
        time: time
      });
      if (time == 0) {
        page.setData({
          yzm: true,
          time: 60
        });
        clearInterval(nums);
      }
    }, 1000);
  },



  goImformation(){
    wx.navigateTo({
      url: '../../pages/imformation/imformation',
    })
  }  
})