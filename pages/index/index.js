var url = require('../../utils/request.js');
var network = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:"",
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    hidden: true,
    scrollTop: 0,       //控制顶部搜索框的背景
    name:"",//搜索框关键字
    login: wx.getStorageSync("uid"),
    page:1

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.getData();
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res);
        wx.setStorage({key: 'lat',data: res.latitude})
        wx.setStorage({key: 'lng',data: res.longitude})
      }
    })
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
    // page.getPageData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '9点兼职',
      desc: '9点兼职，大家都选择的兼职平台',
      path: '/pages/index/index'
    }
  },
  
 
   onPageScroll: function(e) {
     this.setData({
       scrollTop: e.scrollTop
     })
  },


  //获取职位数据
  getData:function(){
    var page = this;
    var getDataUrl = url.data + "/mobile/job/indexJob";
    var param = {
      page:1
    };
    network.requestData('GET', param, getDataUrl, function (obj) {
      console.log(obj);
      page.setData({ 
        data: obj.object,
        imgUrls:obj.object.imgList
        });
    });
  },

  // getPageData(){
  //   var page = this;
  //   var getDataUrl = url.data + "/mobile/job/indexJob";
  //   var param = {
  //     page: page.data.page+1
  //   };
  //   network.requestData('GET', param, getDataUrl, function (obj) {
  //     console.log(obj);
  //     page.setData({
  //       data: page.data.data.jobList.concat(obj.object.jobList),
  //       imgUrls: obj.object.imgList
  //     });
  //   });
  // },














  goMyjob:function(){
   
    var page=this;
    console.log(page.data.login);
    if (page.data.login == undefined || page.data.login==""){
      wx.showModal({
        title: '温馨提示',
        content:"您还未登录，请前去登录",
      })
    }else{
      wx.navigateTo({
        url: '/pages/myjob/myjob',
      })
    }
  },
  goEmejob:function(){
    wx.navigateTo({
      url: '/pages/emejob/emejob',
    })
  },
  goDetail:function(e){
    var id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  },
  goMyCollection:function(){
    var page = this;
    if (page.data.login == undefined || page.data.login == "") {
      wx.showModal({
        title: '温馨提示',
        content: "您还未登录，请前去登录",
      })
    } else {
      wx.navigateTo({
        url: '/pages/collection/collection',
      })
    }
  },


  name(e){
    var page=this;
    page.setData({
      name: e.detail.value
    });
  },

  //搜索
  search(){
    var page=this;
    wx.navigateTo({
      url: '/pages/search/search?name=' + page.data.name,
    })
  }




})