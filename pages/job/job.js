var url = require('../../utils/request.js');
var network = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['由近到远', '热门程度'],
    array2: ['全部','服务员', '传菜员', '洗碗工','帮厨'],

    index: 0,
    date:0,
    data:"",
    page:1,
    dataList:"",

    type:"",
    lng: wx.getStorageSync('lng'),
    lat: wx.getStorageSync('lat'),
    jobType:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var page=this;
      page.getData(page.data.type, page.data.lng, page.data.lat, page.data.jobType);
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
    var page = this;
    page.getPageData(page.data.type, page.data.lng, page.data.lat, page.data.jobType);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },


  bindPickerChange: function (e) {//由近到远，0表示由近到远排序，1表示按热门程度倒序
    var page=this;
    var type=e.detail.value;
    page.setData({
      type: e.detail.value,
      index: e.detail.value
    })

    page.getData(type, page.data.lng, page.data.lat, page.data.jobType);

        
  },
  bindPickerChange2: function (e) {//职位类型  0表示服务员，1表示传菜员，2表示洗碗工，3表示帮厨，默认-1全部
    var page=this;
    var jobType=e.detail.value;
    if (jobType==0){
      jobType=-1;
    } else if (jobType==1){
      jobType=0;
    } else if (jobType == 2) {jobType=1}
    else if (jobType == 3) { jobType = 2}
    else if (jobType == 4) { jobType = 3}
    console.log(jobType) //0表示全部，1表示服务员，2表示传菜员，3表示洗碗工，4表示帮厨
    page.setData({
      date: e.detail.value,
      jobType: jobType
    })
    page.getData(page.data.type, page.data.lng, page.data.lat,jobType);
  },

  //全部兼职数据
  getData(type, lng,lat,jobType){
    var page = this;
    var getDataUrl = url.data + "/mobile/job/findAllJob";
    if(type==0){
      var param = {
        page: 1,
        type: type,
        lng: lng,
        lat: lat,
        jobType: jobType
      };
    }else{
      var param = {
        page: 1,
        type: type,
        jobType: jobType
      };
    }
    network.requestData('GET', param, getDataUrl, function (obj) {
      console.log(obj);
      page.setData({
        data: obj.object,
      });
    });
  },

  getPageData(type, lng, lat, jobType){
    var page = this;
    var getDataUrl = url.data + "/mobile/job/findAllJob";
    if (type == 0) {
      var param = {
        page: page.data.page + 1,
        type: type,
        lng: lng,
        lat: lat,
        jobType: jobType
      };
    } else {
      var param = {
        page: page.data.page + 1,
        type: type,
        jobType: jobType
      };
    }
    network.requestData('GET', param, getDataUrl, function (obj) {
      console.log(obj);
      page.setData({
        data: page.data.data.concat(obj.object),
        page: page.data.page + 1
      });
    });
  },

  //跳转详情
  goDetail(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  }

})