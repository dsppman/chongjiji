// pages/social/components/center/index/index.js

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
        title: "高赞"
      },
      {
        title: "吐槽"
      },
      {
        title: "求助"
      },
      {
        title: "干货"
      },
      {
        title: "闲置"
      },
      {
        title: "曝光"
      },
      {
        title: "科普"
      },
      {
        title: "测评"
      },
    ],
    list: [],
    videoId: null
  },

  attached: function () {
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
        console.log("center change tab")
        this.setData({
          refreshState: true,
          active: index
        })
      }
    },
    onVideoPlay(e) {
      const index = e.currentTarget.dataset.index
      if (index != this.data.videoId) {
        console.log("center change video play")
        this.setData({
          videoId: index
        })
      }
    },
    /**
     * 刷新开始处理
     */
    onRefresh() {
      this.setData({
        refreshState: true,
        videoId: null
      })
      console.log("center onRefresh")
      setTimeout(() => {
        if (this.data.refreshState) {
          console.log("center refreshing")
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
      console.log("center abortRefresh")
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
      console.log("center loadmore")
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
      console.log("center loadlist")
      if (loadPages > 3 || data.length == 0) {
        console.log("center finishloading")
        canLoading = false
      }
      this.setData({
        list: this.data.list.concat(data),
        refreshState: false,
        loadState: "finish"
      })
    },
    _getDemoData() {
      const dataModel = {
        id: 12580,
        avatar: "https://avatar-static.segmentfault.com/401/673/4016737637-57b1bc8f1beac_big64",
        username: "我是马云",
        intro: "平时笑别人，今天轮到我自己，求安慰，我破产了，淘宝送人了，各位以后的花呗就不用还了",
        commentTotal: 0,
        likeTotal: 0,
        viewTotal: 0,
        video: {
          thumb: "",
          url: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0300f340000bipb94i3n0e292ugb3cg&line=0"
        },
        // pic: {
        //   width: 640,
        //   height: 1136,
        //   type: "long",
        //   url: [
        //     "https://pic4.zhimg.com/80/v2-beff76f81ed88abcd74fc66f14a58aaf_720w.jpg",
        //   ]
        // }
      }
      let data = []
      for (let i = 0; i < 10; i++) {
        let { ...tmp } = dataModel
        tmp.viewTotal = Math.floor(Math.random()*1000)
        tmp.likeTotal = Math.floor(Math.random()*1000)
        tmp.commentTotal = Math.floor(Math.random()*1000)
        data.push(tmp)
      }
      switch (this.data.active) {
        case 0:
          return data
        default:
          return []
      }
    }
  },


})
