Page({
  data: {
    phone: '',
    password: '',
    //获取验证码
    vcimagesto:'https://kyfw.12306.cn/passport/captcha/captcha-image?login_site=E&module=login&rand=sjrand&0.8970410661564763',
  },
  
  // 获取输入账号
  phoneInput: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function(e) {
    this.setData({
      password: e.detail.value

    })
  },

  // 登录
  login: function() {
    console.log(this.data.phone);
    console.log(this.data.password);
    /*if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账号或密码为空',
        icon: 'loading',
        duration: 500
      })
    } else {
      wx.request({
        url: 'http://test.com:8080/test/socket.php?msg=2',
        data: {
          phone: this.data.phone,
          password: this.data.password
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: function(res) {
          console.log(res.data)
          that.modalTap();
          wx.navigateTo({
            url: '/pages/index/index',
          })
        }
      })
    }
  }*/
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
})