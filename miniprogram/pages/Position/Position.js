// pages/Position/Position.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active : null,
        markers : null,
        polyline: null,
        latitude: 37.529600,
        longitude: 122.055900,
        WhetherBangding: true
    },

    ToTarget:function(){
        wx.openLocation({
            latitude: this.data.markers[0].latitude,//要去的纬度-地址
            longitude: this.data.markers[0].longitude,//要去的经度-地址
            })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getTabBar().setData({
            active : 1 
          })
    } ,
    ComeBack:function(){
        console.log("ComeBack");
        this.setData({
        latitude: this.data.markers[0].latitude,
        longitude: this.data.markers[0].longitude
        })
        // let mpCtx = wx.createMapContext("map");
        // mpCtx.moveToLocation();
    },

    SendMessage:function(){
        console.log("Hello");
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.setData({
            markers:[{
                id: 0,
                latitude: 37.529600,
                longitude: 122.055900 }]
        })

    },


    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

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