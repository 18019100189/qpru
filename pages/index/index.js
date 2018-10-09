Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputStationOne: '',
    inputStationTow: '',
    inputtime: '',
    StationOne: '',
    StationTow: '',
    Time: '',
    boxone: '',
    boxtow: ''
  },

  // 获取输入始发站
  inputStationOne: function(e) {
    this.setData({

      StationOne: e.detail.value

    })
    console.log(this.data.StationOne);
  },
  //获取输入终点站
  inputStationTow: function(e) {
    this.setData({

      StationTow: e.detail.value

    })
    console.log(this.data.StationTow);
  },
  inputtime: function(e) {
    this.setData({

      Time: e.detail.value

    })
  },
  checkboxOne: function(e) {
    if (e.detail.value == '') {
      boxone = false;
    } else {
      boxone = 1;
    }
    console.log(e.detail.value);
  },
  checkboxTow: function(e) {
    if (e.detail.value == '') {
      boxtow = 0
    } else {
      boxtow = 1
    }
    console.log(e.detail.value);
  },
  //页面跳转
  search: function(e) {
    console.log(this.data.StationOne);
    console.log(this.data.StationTow);
    console.log(this.data.Time);
    console.log(this.data.boxone);
    console.log(this.data.boxtow);
    if (this.data.StationOne.length == 0 || this.data.StationTow.length == 0 || this.data.Time.length == 0) {
      wx.showToast({
        title: '站点或时间为空',
        icon: 'loading',
        duration: 800
      })
    } else {
      wx.navigateTo({
        url: '/pages/search/search',
      })
    }
  }



})