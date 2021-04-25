// pages/social/index/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    pos: 0,
    navHeight: app.getNavHeight(),
    list: [
      {
        title: "话题",
        pos: -62,
      },
      {
        title: "广场",
        pos: 0,
      },
      {
        title: "本地",
        pos: 62,
      },
    ],
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

  },

  /**
   * NavTab切换处理
   */
  changeNavTab(e) {
    let index
    if (e.detail.source == "touch") {
      index = e.detail.current;
    } else if (e.currentTarget.dataset.index != null) {
      index = e.currentTarget.dataset.index
    }
    if (index != null && index != this.data.active) {
      console.log("change navBar tab")
      this.setData({
        active: index,
        pos: this.data.list[index].pos,
      })
    }
  },
})