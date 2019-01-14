var url = require('../../utils/request.js');
var network = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yzm: true,
    time: 60,

    phoneNumber:"",
    code:"",
    password:"",
    again_password:"",
    yq_code:""
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
  },

  phoneNumber(e){
      this.setData({
        phoneNumber:e.detail.value,
      })
  },
  code(e){
    this.setData({
      code: e.detail.value,
    })
  } ,
  password(e){
    this.setData({
      password: e.detail.value,
    })
  },
  again_password(e){
    this.setData({
      again_password: e.detail.value,
    })
  },
  yq_code(e){
    this.setData({
      yq_code: e.detail.value,
    })
  },



  //获取验证码

  countDownMsg(){
    var page=this;
    if(page.data.phoneNumber!=""){
      var getDataUrl = url.data + "/mobile/code";
      var param = {
        phoneNumber: page.data.phoneNumber
      };
      network.requestData('POST', param, getDataUrl, function (obj) {
        if(obj.result==0){
          wx.showModal({
            title: '温馨提示',
            content: obj.msg,
            success(res) {
              if (res.confirm) { } else if (res.cancel) { }
            }
          })
        }else{
          page.countDown();
          wx.showToast({
            title: obj.msg,
            mask: true,
            icon: 'success'
          })
        }
      });
    }else{
      wx.showModal({
        title: '温馨提示',
        content:"电话不能为空",
        success(res) {
          if (res.confirm) { } else if (res.cancel) { }
        }
      })
    }
  },


  //注册
  submit(){
    var page = this;
    if (page.data.phoneNumber == "") {
      wx.showModal({
        title: '温馨提示',
        content: "电话不能为空",
        success(res) {
          if (res.confirm) { } else if (res.cancel) { }
        }
      })
      return false;
    }
    if(page.data.again_password!=page.data.password){
      wx.showModal({
        title: '温馨提示',
        content: "两次密码输入不一致",
        success(res) {
          if (res.confirm) { } else if (res.cancel) { }
        }
      })
      return false;
    }
    var getDataUrl = url.data + "/mobile/reg";
    var param = {
      phoneNumber: page.data.phoneNumber,
      password:page.data.password,
      code: page.data.code,
      yq_code: page.data.yq_code,
    };
    network.requestData('POST', param, getDataUrl, function (obj) {
      if (obj.result == 0) {
        wx.showModal({
          title: '温馨提示',
          content: obj.msg,
          success(res) {
            if (res.confirm) { } else if (res.cancel) { }
          }
        })
      } else {
        wx.showToast({
          title: obj.msg,
          mask: true,
          icon: 'success',
          success:function(){
            wx.navigateTo({
              url: '/pages/login/login',
            })
          }
        })
      }
    });


  }
})