var userdata = require("../adduser/adduserdata/adduserdata.js");
Page({

  data: {
    userdata:''
  },
  onLoad: function (options) {
    this.setData({
      userdata: userdata.userdata
    })

  },
  select:function(e){
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})

