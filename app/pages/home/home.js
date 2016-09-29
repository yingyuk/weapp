// var app = getApp()
Page({
  data: {
    animationData: {},
    top: 0
  },
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease-in',
    });
    this.animation = animation
    // setInterval(this.down, 1500);
  },
  down: function () {
    var top = this.top;
    this.top = top > 0 ? -5 : 5;
    animation = this.animation;
    animation.translateY(top).step();
    this.setData({
      animationData: animation.export()
    });
  },
  jump:function (url) {

  }
})
