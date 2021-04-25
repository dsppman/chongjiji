// pages/social/components/topic/index/index.js

var canLoading = true
var loadPages = 1

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isActive: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    refreshState: false,
    loadState: "finish",
    navBarList: [
      {
        title: "推荐"
      },
      {
        title: "最新"
      },
      {
        title: "热门"
      },
      {
        title: "关注"
      }
    ],
    list: []
  },

  attached: function() {
    this.setData({
      refreshState: true,
    })
    setTimeout(() => {
      let data = this._getDemoData()
      this._loadList(data)
    }, 1000)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const index = e.currentTarget.dataset.index
      if (index != this.data.active) {
        console.log("topic change tab")
        this.setData({
          refreshState: true,
          active: index
        })
      }
    },
    /**
     * 刷新开始处理
     */
    onRefresh() {
      this.setData({
        refreshState: true,
      })
      console.log("topic onRefresh")
      setTimeout(() => {
        if (this.data.refreshState) {
          console.log("topic refreshing")
          this.data.list = []
          canLoading = true
          loadPages = 1
          let data = this._getDemoData()
          this._loadList(data)
        }
      }, 1000)
    },
    /**
     * 刷新停止处理
     */
    abortRefresh() {
      console.log("topic abortRefresh")
      if (this.data.refreshState) {
        this.setData({
          refreshState: false,
        })
      }
    },
    /**
     * 加载更多处理
     */
    onLoadMore() {
      console.log("topic loadmore")
      if (canLoading) {
        this.setData({
          loadState: "loading",
        })
        setTimeout(() => {
          let data = this._getDemoData()
          loadPages++
          this._loadList(data)
        }, 1000)
      }
    },
    _loadList(data) {
      console.log("topic loadlist")
      if (loadPages > 3 || data.length == 0) {
        console.log("topic finishloading")
        canLoading = false
      }
      this.setData({
        list: this.data.list.concat(data),refreshState: false,
        loadState: "finish"
      })
    },
    _getDemoData() {
      const dataModel = {
        id: 12580,
        viewTotal: 0,
        joinTotal: 0,
        title: "女人出轨是什么心理？",
        avatar: "https://upload-images.jianshu.io/upload_images/7599123-5e73ef98d1791517.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
        username: "我是马化腾",
        comment: "我觉得因为女人都是水性杨花 平时笑别人，今天轮到我自己，求安慰，我破产了 平时笑别人，今天轮到我自己，求安慰，我破产了",
        picNum: 3,
        picList: [
          "https://upload-images.jianshu.io/upload_images/2775999-e42e0fe37dc71d56.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
          "https://upload-images.jianshu.io/upload_images/2775999-0539655f0c16aa5e.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/460",
          "https://upload-images.jianshu.io/upload_images/2775999-0539655f0c16aa5e.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/460"
        ]
      }
      let data = []
      for (let i = 0; i < 10; i++) {
        let { ...tmp } = dataModel
        tmp.viewTotal = Math.floor(Math.random()*1000)
        tmp.joinTotal = Math.floor(Math.random()*1000)
        data.push(tmp)
      }
      switch (this.data.active) {
        case 0:
          return data
        default:
          return []
      }
    }
  }
})
