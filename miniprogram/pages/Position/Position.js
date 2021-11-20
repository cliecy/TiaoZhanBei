// pages/Position/Position.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active : null,
        markers : null,
        polyline: null,
        latitude: 34.796491,
        longitude: 113.665299,
        WhetherBangding: true
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
        console.log("Hello");
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
                latitude: 34.796491,
                longitude: 113.665299 }]
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