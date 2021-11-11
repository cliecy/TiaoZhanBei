var app = getApp();
Page({
    data: {
        active: null
      },
      /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTabBar().setData({
      active : 0 
    })
    app.GetNews();
  }
  
  });


