Page({

  data: {
     user:'赵学荣',
     identity:'成人',
     ID:'123456789012345678'
  },
  select:function(e){
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})