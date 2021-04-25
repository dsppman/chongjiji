// pages/info/components/stream-list/stream-list.js

var list1Len = 0
var list2Len = 0
var canLoading = true
var loadPages = 1

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    active: {
      type: Boolean,
      value: false
    },
    tab: {
      type: Number,
      value: 0,
      observer: function(newVal, oldVal) {
        console.log(newVal)
        this.onRefresh()
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pos: 0,
    refreshStatus: true,
    loadStatus: "loading",
    list1: [],
    list2: [],
  },

  attached() {
    setTimeout(() => {
      let data = this._getDemoData()
      this._loadList(data)
    }, 1000)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 刷新处理
     */
    onRefresh() {
      console.log("onRefresh")
      this.setData({
        refreshStatus: true,
      })
      setTimeout(() => {
        if (this.data.refreshStatus) {
          console.log("refresh")
          list1Len = 0
          list2Len = 0
          canLoading = true
          loadPages = 1
          this.data.list1 = []
          this.data.list2 = []
          if (this.data.tab == 0) {
            let data = this._getDemoData()
            this._loadList(data)
          } else {
            this.setData({
              refreshStatus: false,
              list1: [],
              list2: [],
            })
          }
        }
      }, 1000)
    },
    abortRefresh() {
      console.log("abortRefresh")
      if (this.data.refreshStatus) {
        this.setData({
          refreshStatus: false,
        })
      }
    },
    /**
     * 加载更多处理
     */
    onLoadMore() {
      if (canLoading) {
        this.setData({
          loadStatus: "loading",
        })
        setTimeout(() => {
          if (loadPages > 2) {
            this.setData({
              loadStatus: "finish"
            })
            console.log("到底啦")
            canLoading = false
          } else {
            let data = this._getDemoData()
            this._loadList(data)
            loadPages++
          }
        }, 1500)
      }
    },

    _getDemoData() {
      let data1 =  [
        {
          url: "/pages/search/search",
          imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586107188849&di=f2bf9908f577a76cd0a95277ace27727&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D4169540006%2C4220376401%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1000%26h%3D1500",
          height: "1000",
          title: "摩天大厦",
          avatar: "http://m.imeitou.com/uploads/allimg/2019102119/xybbwq2gytt.jpg",
          username: "马云",
          like: "520"
        },
        
        {
          url: "",
          imageUrl: "",
          height: "",
          title: "",
          avatar: "",
          username: "马云",
          like: ""
        },
      ]
  
      let data2 = [
        {
          url: "/pages/search/search",
          imageUrl: "https://i0.hdslb.com/bfs/article/1616c4eca2f8d1d72b65d6f0aee33c08bfc3b8b1.jpg@1320w_936h.webp",
          height: "1320",
          title: "demo1",
          avatar: "https://i0.hdslb.com/bfs/face/b279817885ce3116169c65fb4182270e379bfb18.jpg",
          username: "马云",
          like: "520"
        },
        {
          url: "/pages/search/search",
          imageUrl: "https://i0.hdslb.com/bfs/article/8bb0a41ab911b0065e05540014782949a90fe4d4.jpg@1320w_1866h.webp",
          height: "1866",
          title: "demo1",
          avatar: "https://i0.hdslb.com/bfs/face/b279817885ce3116169c65fb4182270e379bfb18.jpg",
          username: "马云",
          like: "520"
        },
        {
          url: "/pages/search/search",
          imageUrl: "https://i0.hdslb.com/bfs/article/b1aeacb924e60b73547ab2a9d40860812f378cf1.jpg@1320w_1784h.webp",
          height: "1784",
          title: "demo1",
          avatar: "https://i0.hdslb.com/bfs/face/b279817885ce3116169c65fb4182270e379bfb18.jpg",
          username: "马云",
          like: "520"
        },
        {
          url: "/pages/search/search",
          imageUrl: "https://i0.hdslb.com/bfs/article/d5ee585a495abc1f8a68a60f63d7172e762e19e3.jpg@1320w_1006h.webp",
          height: "1006",
          title: "demo1",
          avatar: "https://i0.hdslb.com/bfs/face/b279817885ce3116169c65fb4182270e379bfb18.jpg",
          username: "马云",
          like: "520"
        },
        {
          url: "/pages/search/search",
          imageUrl: "https://i0.hdslb.com/bfs/article/1616c4eca2f8d1d72b65d6f0aee33c08bfc3b8b1.jpg@1320w_936h.webp",
          height: "936",
          title: "demo1",
          avatar: "https://i0.hdslb.com/bfs/face/b279817885ce3116169c65fb4182270e379bfb18.jpg",
          username: "马云",
          like: "520"
        },
        {
          url: "/pages/search/search",
          imageUrl: "https://i0.hdslb.com/bfs/article/248b731d33a749258791f706ccd286449220ac6f.jpg@1320w_854h.webp",
          height: "854",
          title: "demo1",
          avatar: "https://i0.hdslb.com/bfs/face/b279817885ce3116169c65fb4182270e379bfb18.jpg",
          username: "马云",
          like: "520"
        },
        {
          url: "/pages/search/search",
          imageUrl: "https://i0.hdslb.com/bfs/article/1616c4eca2f8d1d72b65d6f0aee33c08bfc3b8b1.jpg@1320w_936h.webp",
          height: "936",
          title: "demo1",
          avatar: "https://i0.hdslb.com/bfs/face/b279817885ce3116169c65fb4182270e379bfb18.jpg",
          username: "马云",
          like: "520"
        },
        {
          url: "/pages/search/search",
          imageUrl: "https://i0.hdslb.com/bfs/article/71440487928f5f4ba0b0d28a800f936a880d401c.jpg@1320w_1660h.webp",
          height: "1660",
          title: "demo1",
          avatar: "https://i0.hdslb.com/bfs/face/b279817885ce3116169c65fb4182270e379bfb18.jpg",
          username: "马云",
          like: "520"
        },
        {
          url: "/pages/search/search",
          imageUrl: "https://i0.hdslb.com/bfs/article/8793ccc8bc7703c2e236ff692250e3d632fecc0e.jpg@1320w_1868h.webp",
          height: "1868",
          title: "demo1",
          avatar: "https://i0.hdslb.com/bfs/face/b279817885ce3116169c65fb4182270e379bfb18.jpg",
          username: "马云",
          like: "520"
        },
        {
          url: "/pages/search/search",
          imageUrl: "https://i0.hdslb.com/bfs/article/dce8cda49d4588019f4697ef23e4bf893ebdd954.jpg@1320w_826h.webp",
          height: "826",
          title: "demo1",
          avatar: "https://i0.hdslb.com/bfs/face/b279817885ce3116169c65fb4182270e379bfb18.jpg",
          username: "马云",
          like: "520"
        },
      ]
      return data2
    },
    _loadList(data) {
      console.log("loadlist")
      for (let i = 0; i < data.length; i++) {
        if (list1Len <= list2Len) {
          this.data.list1.push(data[i])
          list1Len += parseInt(data[i].height);
        } else {
          this.data.list2.push(data[i])
          list2Len += parseInt(data[i].height)
        }
      }
      console.log(list1Len)
      console.log(list2Len)

      this.setData({
        list1: this.data.list1,
        list2: this.data.list2,
        refreshStatus: false,
        loadStatus: "finish"
      })
    }
  },
})
