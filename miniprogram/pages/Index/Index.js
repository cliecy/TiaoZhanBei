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
    // console.log(app.globalData.openid)
    // this.setData({
    //   WhetherBangding: app.globalData.WhetherBangding
    // })
    this.getTabBar().setData({
      active : 0
    })
    // app.GetNews();
    
  },
  onShow: function(){
    setTimeout(function () {
      //要延时执行的代码
        app.WhetherShuaiDao=true
        app.GetNews()
     }, 5000) //延迟时间 这里是1秒
  }
  
  });


