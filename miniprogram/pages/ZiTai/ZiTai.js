// pages/ZiTai/ZiTai.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        WhetherShuaiDao: false,
        WhetherBangding: true,
        active: null,
        state: "行走",
        ClassA: true,
        ClassB: false,
        ClassC: false
    },
    GoToPosition:function(){
        wx.switchTab({
          url: '/pages/Position/Position',
          success: (res) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getTabBar().setData({
            active : 2
          })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function(){
        this.setData({
            WhetherShuaiDao:app.globalData.WhetherShuaiDao
        })
        var temp=app.globalData.ZiTaiCase;
        switch(temp){
            case 1:
                this.setData({
                    ClassA: true,
                    ClassB: false,
                    ClassC: false,
                    state: "行走"
                })
                break;
            case 2:
                this.setData({
                    ClassA: false,
                    ClassB: true,
                    ClassC: false,
                    state: "奔跑"
                })
                break;
            case 3:
                this.setData({
                    ClassA: false,
                    ClassB: false,
                    ClassC: true,
                    state: "平躺"
                })
                break;
        }
    },


    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})