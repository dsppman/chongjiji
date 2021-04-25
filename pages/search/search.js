// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [
      {title:"全部"},
      {title:"商城"}
    ],
    active: 0,

    value: "",
    tips: "复活节画奖大赛", 
    keyList: [],
    list: [],
    searchState: true,
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

  clearValue: function () {
    this.setData({
      value: "",
      keyList: [],
      searchState: true
    })
  },
  inputValue: function (e) {
    const val = e.detail.value
    this.setData({
      value: val
    })
    setTimeout(()=> {
      const list = [
        val + "1",
        val + "2",
        val + "3",
        val + "4",
        val + "5",
        val + "6",
        val + "7",
      ]
      this.setData({
        keyList: list
      })
    }, 500)
  },
  focusValue: function (e) {
    const val = e.detail.value
    setTimeout(()=> {
      const list = [
        val + "1",
        val + "2",
        val + "3",
        val + "4",
        val + "5",
        val + "6",
        val + "7",
      ]
      this.setData({
        searchState: true,
        keyList: list
      })
    }, 500)
  },
  searchValue: function (e) {
    if (this.data.value == "") {
      this.setData({
        value: this.data.tips,
        searchState: false,
      })
    } else {
      this.setData({
        searchState: false,
      })
    }
  },
  switchValue: function(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      value: this.data.keyList[index],
      searchState: false,
    })
  },
  switchTab(e) {
    const index = e.currentTarget.dataset.index
    if (index != this.data.active) {
      this.setData({
        active: index
      })
    }
  },
  _loadList: function () {
    
  }
})