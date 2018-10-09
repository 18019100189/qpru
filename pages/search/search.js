Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  data_listto: function (e) {
    console.log("111111");
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})