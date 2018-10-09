Page({
  data: {
    //火车票信息
    curtime: '2018/10/09',
    departure: '杭州东',
    train: 'G1520',
    terminal: '上海虹桥',

    //出发/到达/历时时间
    departuretime: '08:04',
    duration: '1小时4分钟',
    timeofarrival: '12:22到达',

    //车票等级：商务、一等、二等
    business:'商务',
    firstclass:'一等',
    secondclass:'二等',

    //余票信息
    residual1:'无',
    residual2:'无',
    residual3:'1张',

    //车票价格
    price1:'¥219.5',
    price2:'¥117',
    price3:'¥73',
  },
  adduser: function(e) {
    wx.navigateTo({
      url: '../adduser/adduser',
    })
  },
  submit: function(e) {
    console.log("提交成功");
  }


})