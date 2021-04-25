// pages/info/index/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    pos: 0,
    itemPos: 0,
    list: [
      {
        title: "话题",
        pos: -62,
        item: {
          list: [
            { title: "最新" },
            { title: "精华" },
            { title: "吐槽" },
            { title: "问答" },
            { title: "干货" },
            { title: "求助" },
            { title: "闲置" },
            { title: "举报" },
          ],
          pos: 0,
          active: 0
        }
      },
      {
        title: "社区",
        pos: 0,
        item: {
          list: [
            { title: "推荐"},
            { title: "高赞"},
            { title: "体育"},
          ],
          pos: 0,
          active: 0
        }
      },
      {
        title: "专栏",
        pos: 62,
        item: {
          list: [
            { title: "猫粮测评"},
            { title: "狗粮测评"},
            { title: "猫砂测评"},
            { title: "用品测评"},
          ],
          pos: 0,
          active: 0
        }
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      menuButtonRect: app.globalData.menuButtonRect
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
    console.log(e)
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
        itemPos: this.data.list[index].item.pos
      })
    }
  },

  /**
   * itemBarTab切换处理
   */
  changeItemTab(e) {
    console.log(e)
    const index = e.currentTarget.dataset.index
    const active = this.data.active
    if (index != this.data.list[active].item.active) {
      console.log("change itemBar tab")
      const pos = e.currentTarget.offsetLeft - e.detail.x + 10
      this.setData({
        ['list[' + active + '].item.active']: index,
        ['list[' + active + '].item.pos']: pos > 0 ? pos : 0,
      })
    }
  }
})