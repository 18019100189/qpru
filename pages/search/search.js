var traindata = require("/search_data/search_data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    traindata:''
  },
  onLoad: function (options) {
    this.setData({
      traindata: traindata.traindata
    })

  },
  data_listto: function (e) {
    console.log("111111");
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})