// app.js
import Dialog from '@vant/weapp/dialog/dialog';
App({
  globalData: {
    openid:null,
    WhetherBangding: true,
    WhetherShuaiDao: false,
    ZiTaiCase:1
  },
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      });
    }

    this.globalData = {};
    this.getOpenid();

  },
   // 获取用户openid
   getOpenid() {
     var that = this;
    wx.cloud.callFunction({
      name: 'GetOpenID',
      complete: res => {
        console.log('openid: ', res.result.openid)
        console.log('appid: ', res.result.appid)
        var openid = res.result.openid;
        that.globalData.openid=openid;
      }
    })
  },
  GetNews:function(){
    Dialog.confirm({
      title: '跌倒',
      message: '腰带检测到使用者跌倒！',
    })
      .then(() => {
        wx.switchTab({
          url: '/pages/ZiTai/ZiTai',
        })
        this.globalData.WhetherShuaiDao=true;
        this.globalData.ZiTaiCase=3;
      })
      .catch(() => {
        console.log("老人跌倒，但是使用者无视");
        this.globalData.WhetherShuaiDao=true;
        this.globalData.ZiTaiCase=3;
      });

  }


});
