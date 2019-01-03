const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}



// wx请求封装
function requestData(method, params, url, cb) {
  var headObj = {}
  if (method == 'GET') {
    headObj = {
      'content-type': 'application/json', //默认值
      "deviceType": 'xcx',
      'Cookie': 'uid=' + wx.getStorageSync('uid'),
    }
  } else if (method == 'POST') {
    headObj = {
      'content-type': 'application/x-www-form-urlencoded',
      "deviceType": 'xcx',
      'Cookie': 'uid=' + wx.getStorageSync('uid'),
    }
  }
  wx.request({
    url: url,
    data: params,
    method: method,
    header: headObj,
    success: function (res) {
      return typeof cb == "function" && cb(res.data)
    }
  })
}













module.exports = {
  formatTime: formatTime,
  requestData: requestData
}
