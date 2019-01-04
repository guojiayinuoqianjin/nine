var url = require('../../utils/request.js');
var network = require('../../utils/util.js');
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
    data:"",
    jobId:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      jobId: options.id
    });
    this.getData(options.id);
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

  //获取数据
  getData(id){
    var page = this;
    var getDataUrl = url.data + "/mobile/job/jobDetail";
    var param = {
      id:id
    };
    network.requestData('GET', param, getDataUrl, function (obj) {
      console.log(obj);
      page.setData({
        data: obj.object,
      });
    });
  },

  add(e){
    var id = e.currentTarget.dataset.id;
    var getDataUrl = url.data + "/mobile/ea/addEa";
    var param = {
      jobId: id
    };
    network.requestData('POST', param, getDataUrl, function (obj) {
      console.log(obj);
      // page.setData({
      //   data: obj.object,
      // });
    });

  },

  //收藏
  store(e){
    var page=this;
    console.log(e);
    var id=e.currentTarget.dataset.id;
    var getDataUrl = url.data + "/mobile/user/addStore"; 
    var param = {
      jobId: id
    };
    network.requestData('POST', param, getDataUrl, function (obj) {
      console.log(obj);
      if(obj.result==1){
        wx.showToast({
          title: obj.msg,
          mask: true,
          icon: 'success'
        })
        page.getData(page.data.jobId);
      }else{
        wx.showToast({
          title: obj.msg,
          mask: true,
          icon: 'success'
        })
      }
    });
  },
  //取消收藏

  on_store(e){
    var page = this;
    console.log(e);
    var id = e.currentTarget.dataset.id;
    var getDataUrl = url.data + "/mobile/user/canStore";
    var param = {
      jobId: id
    };
    network.requestData('POST', param, getDataUrl, function (obj) {
      console.log(obj);
      if (obj.result == 1) {
        wx.showToast({
          title: obj.msg,
          mask: true,
          icon: 'success'
        })
        page.getData(page.data.jobId);
      } else {
        wx.showToast({
          title: obj.msg,
          mask: true,
          icon: 'success'
        })
      }
    });
  }





})