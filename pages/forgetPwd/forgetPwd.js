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
    password:"",
    code:""
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

  //获取验证码

  countDownMsg() {
    var page = this;
    if (page.data.phoneNumber != "") {
      var getDataUrl = url.data + "/mobile/codeForget";
      var param = {
        phoneNumber: page.data.phoneNumber
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
          page.countDown();
          wx.showToast({
            title: obj.msg,
            mask: true,
            icon: 'success'
          })
        }
      });
    } else {
      wx.showModal({
        title: '温馨提示',
        content: "电话不能为空",
        success(res) {
          if (res.confirm) { } else if (res.cancel) { }
        }
      })
    }
  },

  phoneNumber(e){
    var page=this;
    var phoneNumber=e.detail.value;
    page.setData({
      phoneNumber: phoneNumber
    });
  },
  code(e) {
    var page = this;
    var code = e.detail.value;
    page.setData({
      code: code
    });
  },
  password(e) {
    var page = this;
    var password = e.detail.value;
    page.setData({
      password: password
    });
  },


  //重置密码
  submit(){
    var page=this;
    var getDataUrl = url.data + "/mobile/forget";
    var param={
      code:page.data.code,
      password:page.data.password,
      phoneNumber:page.data.phoneNumber
    }
    network.requestData('POST', param, getDataUrl, function (obj) {
      console.log(obj);
      if (obj.result == 1) {
        wx.showModal({
          title: '温馨提示',
          content: obj.msg,
          success(res) {
            if (res.confirm) {
              wx.navigateTo({
                url: '/pages/login/login',
              });
            } else if (res.cancel) { }
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