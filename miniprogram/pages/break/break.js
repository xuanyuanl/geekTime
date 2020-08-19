// miniprogram/pages/break/break.js
Page({

 /**
  * 页面的初始数据
  */
 data: {
  statusBarColor:'#ff6600',
  navBarColor:'#ff6600',
  titleColor:'#ffffff',
  isShow:true
 },

 onPageScroll:function(e){
   const that = this
   wx.createSelectorQuery().select('.nav-select').boundingClientRect((rect)=>{
    if(rect.top - e.scrollTop <= -(wx.db.navBarHeight)){
      console.log(rect.top);
      that.setData({
        statusBarColor:'#ffffff',
        navBarColor:'#ffffff',
        titleColor:'#000000',
      })
      console.log('111111');
    }else{
      that.setData({
        statusBarColor:'#ff6600',
        navBarColor:'#ff6600',
        titleColor:'#ffffff',
      })
      console.log('222222');
    }
   }).exec()
 },
 /**
  * 生命周期函数--监听页面加载
  */
 onLoad: function (options) {

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