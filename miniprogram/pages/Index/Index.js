var app = getApp();

Page({
    data: {
        WhetherBangding: true,
        active: null,
        NameA: "abc",
        NameB: "def",
      },
      /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.openid)
    // this.setData({
    //   WhetherBangding: app.globalData.WhetherBangding
    // })
    this.getTabBar().setData({
      active : 0
    })
    // app.GetNews();
  },
  
  });


