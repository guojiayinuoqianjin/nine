Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../public/img1.jpg',
      '../../public/img2.jpg',
      '../../public/img3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    hidden: true,
    scrollTop: 0,       //控制顶部搜索框的背景

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    
    
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
    return {
      title: '阿波电影',
      desc: '最新最火电影一览无余',
      path: '/pages/index/index'
    }
  },
  
 
   onPageScroll: function(e) {
     this.setData({
       scrollTop: e.scrollTop
     })
  }






})