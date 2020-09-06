// miniprogram/pages/profile/profile.js
Page({

 /**
  * 页面的初始数据
  */
 data: {
  canIUse: wx.canIUse('button.open-type.getUserInfo'),
  logged:true,
  logged1:true,

  statusBarColor:'#ffffff',
  navBarColor:'#ffffff',
  titleColor:'#000000',

  avatarUrl:'',
  userInfo:{},


  profile:[
    {
      imgUrl:'../../images/dingyue.png',
      title:'已订阅',
      description:'',
    },
    {
      imgUrl:'../../images/liquan.png',
      title:'礼券',
      description:'',
    },
    {
      imgUrl:'../../images/fenxiang.png',
      title:'分享有赏',
      description:'',
    },
    {
      imgUrl:'../../images/yaoqin.png',
      title:'邀请好友',
      description:'得30元',
    },
  ],

  profile2:[
    {
      imgUrl:'../../images/pintuan.png',
      title:'我的拼团',
      description:'',
    },
    {
      imgUrl:'../../images/liuyan.png',
      title:'我的留言',
      description:'',
    },
    {
      imgUrl:'../../images/huati.png',
      title:'我的话题评论',
      description:'',
    },
    {
      imgUrl:'../../images/shoucan.png',
      title:'我的收藏',
      description:'',
    },
  ]

 },

 

 /**
  * 生命周期函数--监听页面加载
  */
 getUserInfo() {
  wx.checkSession({
    success: () => { //登录成功了，把login的view结构替换掉
      console.log(123);
      wx.navigateTo({  
        url:'../login/login',  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
        success:function(){
          console.log('789');
        },        //成功后的回调；
        fail:()=> {
          console.log('111');
        }
      })
    },
    fail: () => { //第一次登录
      console.log('456');
      this.onLogin()
      
    }
  })
 },

 onLogin() {
   
  wx.login({  //登录
    success(res) { //登录成功，用code换取session_key和openid，
      if(res.code) {
        let code = res.code
        let appid = "wxd8c20ec0963d2af1"
        let secret = "515e52e6cc5c7d2bb4b599a34843b01b" //这个密码很重要，需要保护，不能放这里，咋办
        wx.request({ //通过这个接口
          url:'https://api.weixin.qq.com/sns/jscode2session?appid='+ appid +'&secret='+ secret +'&js_code=' + code + '&grant_type=authorization_code',
          data:{},
          success(res2) {
            console.log(res2);
            if(res2.errMsg == 'request:ok' ) {
              let userInfo = res2.data
              console.log(userInfo);
              wx.setStorage({
                key: 'session_key',
                data: userInfo.session_key,                
              });
              wx.setStorage({
                key: 'openId',
                data: userInfo.openid,                
              });
              wx.setStorage({
                key: 'logged',
                data: 'false',                
              });
            }
          }

        })
      }else {
        console.log('登录失败' + res.errMsg);
      }
    }
  })
 },



 bindGetUserInfo (e) {
  console.log(e.detail.userInfo)
},

 onLoad: function (options) {
 
  wx.getStorage({
    key:'logged',
    success:(res) => {
      this.setData({
        logged: res.data
      })
      // console.log(res);
    }
  })
    
  // wx.getSetting({
  //   success:res => {
  //     if(res.authSetting[ScopedCredential.userInfo]) {
  //       wx.getUserInfo({
  //         withCredentials: 'true',
  //         lang: 'zh_CN',
  //         timeout:10000,
  //         success: (result)=>{
  //           this.setData({
  //             avatarUrl:res.userInfo.avatarUrl,
  //             userInfo:res.userInfo
  //           })
  //         },
  //         fail: ()=>{},
  //         complete: ()=>{}
  //       });
  //     }
  //   }
  //  });
  // function userLogin() {
  //   wx.checkSession({
  //     success: (result)=>{
  //       //存在登录态
  //     },
  //     fail: ()=>{
  //       onLogin()
  //     },
  //     complete: ()=>{}
  //   });
  // }

  // function onLogin() {
  //   wx.login({
  //     success: function(res) {
  //       if (res.code) {
  //         wx.request({
  //           url:'',
  //           data: {
  //             code: res.code
  //           },
  //           success: (res) => {
  //             const self = this
  //             if('luoji cengg ' ) {
  //               let json = JSON.parse(res.data.Data)
  //               wx.setStorage({
  //                 key: 'third_Session',
  //                 data: json.third_Session,
  //                 success: (result)=>{                 
  //                 },
  //                 fail: ()=>{},
  //                 complete: ()=>{}
  //               });
  //               getUserInfo()
  //             }
  //             else {
  //               //
  //             }
  //           },
  //           fail: function (res) {
  //             //
  //           }
  //         })
  //       } else {
  //         console.log('获取用户登录态失败！',res.errMsg);
  //       }
  //     }
  //   })
  // }

  // function getUserInfo() {
  //   wx.getUserInfo({
  //     success: function (res) {
  //       var userInfo = res.userInfo
  //       userInfoInSQL(userInfo)
  //     },
  //     fail: function() {
  //       userAccess()
  //     }
  //   })
  // }

  // function userInfoInSQL(userIno) {
  //   wx.getStorage({
  //     key:'third_Session',
  //     success: function (res) {
  //       wx.request({
  //         url: '',
  //         data: {
  //           third_Session: res.data,
  //           nickName: userIno.nickName,
  //           avatarUrl: userIno.avatarUrl,
  //           gender: userIno.gender,
  //           province: userIno.province,
  //           city: userIno.city,
  //           country: userIno.country,
  //           openId: userIno.openId,
  //         },
  //         success:function(res) {

  //         }
  //       })
  //     }
  //   })
  // }

 },

 /**
  * 生命周期函数--监听页面初次渲染完成
  */
 onReady: function () {
  
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