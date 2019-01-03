var url = require('../../utils/request.js');
var network = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['男', '女'],
    array_index: 0,
    date:"",//默认时间
    array2:['在校生','已毕业'],
    array2_index: 0,
    array3: ['有经验', '无经验'],
    array3_index: 0,
    data:"",

    real_name:"",
    sex:"",
    birthDate:"",
    id_number:"",
    phone:"",
    edu_type:"",
    exp_have:"",
    height:"",
    weight:"",
    zfb_number:"",
    zfb_account_name:"",
    wx_number:"",
    workExperience:""









  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var page=this;
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 性别
  bindPickerChange(e){
      this.setData({
        array_index: e.detail.value
      });
  },
  //日期
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  //教育情况
  bindPickerChange2(e){
    this.setData({
      array2_index: e.detail.value
    });
  },
  //有无经验
  bindPickerChange3(e) {
    this.setData({
      array3_index: e.detail.value
    });
  },

  //姓名
  real_name(e){
    this.setData({
      real_name:e.detail.value
    });
  },
  //性别
  bindPickerChange(e){
    this.setData({
      sex: e.detail.value=="1"?"男":"女"
    });
  },
  //出生年月
  bindDateChange(e){
    this.setData({
      birthDate: e.detail.value
    });
  },
  //身份证号
  idCard(e){
    this.setData({
      id_number: e.detail.value
    });
  },
  //我的电话
  phone(e){
    this.setData({
      phone: e.detail.value
    });
  },
  //教育情况
  bindPickerChange2(e){
    this.setData({
      edu_type: e.detail.value
    });
  },
  //有无经验
  bindPickerChange3(e){
    this.setData({
      exp_have: e.detail.value
    });
  },
  //身高
  height(e){
    this.setData({
      height: e.detail.value
    });
  },
  //体重
  weight(e){
    this.setData({
      weight: e.detail.value
    });
  },
  //支付宝号
  zfb_number(e){
    this.setData({
      zfb_number: e.detail.value
    });
  },
  //支付宝账户名
  zfb_account_name(e){
    this.setData({
      zfb_account_name: e.detail.value
    });
  },
  //微信号
  wx_number(e){
    this.setData({
      wx_number: e.detail.value
    });
  },
  //工作经验 
  workExperience(e){
    this.setData({
      workExperience: e.detail.value
    });
  },





  //获取数据

  getData(type, lng, lat, jobType) {
    var page = this;
    var getDataUrl = url.data + "/mobile/resume/getResume";
      var param = {
        
      }
    network.requestData('GET', param, getDataUrl, function (obj) {
      console.log(obj);
      page.setData({
        data: obj.object,
        date: obj.object.birthDate,
        array2_index: obj.object.edu_type,
        array3_index: obj.object.exp_have,

        real_name: obj.object.real_name,
        sex: obj.object.sex,
        birthDate: obj.object.birthDate,
        id_number: obj.object.id_number,
        phone: obj.object.phone,
        edu_type: obj.object.edu_type,
        exp_have: obj.object.exp_have,
        height: obj.object.height,
        weight: obj.object.weight,
        zfb_number: obj.object.zfb_number,
        zfb_account_name: obj.object.zfb_account_name,
        wx_number: obj.object.wx_number,
        workExperience: obj.object.workExperience,
      });
    });
  },

  //修改简历接口
  submit(e){
    var page = this;
    var getDataUrl = url.data + "/mobile/resume/updateResume";
    var id = e.currentTarget.dataset.id;
    var param={
      real_name: page.data.real_name,
      sex: page.data.sex,
      birthDate: page.data.birthDate,
      id_number: page.data.id_number,
      phone: page.data.phone,
      edu_type: page.data.edu_type,
      exp_have: page.data.exp_have,
      height: page.data.height,
      weight: page.data.weight,
      zfb_number: page.data.zfb_number,
      zfb_account_name: page.data.zfb_account_name,
      wx_number: page.data.wx_number,
      workExperience: page.data.workExperience,
      id:id
    }
    network.requestData('POST', param, getDataUrl, function (obj) {
      if (obj.result==1){
        wx.showModal({
          title: '温馨提示',
          content: obj.msg,
          success(res) {
            if (res.confirm) {
              wx.switchTab({
                url: '/pages/my/my',
              });
            } else if (res.cancel) {}
          }
        })
      } else {
        wx.showModal({
          title: '温馨提示',
          content: obj.msg,
          success(res) {
            if (res.confirm) { } else if (res.cancel) { }
          }
        })
      }
      
    });
    
  }



})