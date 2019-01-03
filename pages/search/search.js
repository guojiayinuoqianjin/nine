var url = require('../../utils/request.js');
var network = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    page: 1,
    data: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page=this;
    console.log(options);
    page.setData({
      name:options.name
    });
    page.getData();
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
    var page=this;
    page.getPageData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  //获取职位数据
  getData: function () {
    var page = this;
    var getDataUrl = url.data + "/mobile/job/searchJob";
    var param = {
      page: 1,
    };
    network.requestData('GET', param, getDataUrl, function (obj) {
      console.log(obj);
      page.setData({
        data: obj.object,
      });
    });
  },

  getPageData() {
    var page = this;
    var param = {
      page: page.data.page + 1,
    };
    var getDataUrl = url.data + "/mobile/job/searchJob";
    network.requestData('GET', param, getDataUrl, function (obj) {
      console.log(obj);
      page.setData({
        data: page.data.data.concat(obj.object),
        page: page.data.page + 1
      });
    });
  },

  //跳转详情
  goDetail(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  }


})