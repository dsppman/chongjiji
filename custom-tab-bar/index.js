// custom-tab-bar/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
  
    },
  
    /**
     * 组件的初始数据
     */
    data: {
      active: 0,
      maskState: false,
      list: [{
        path: "/social/index/index",
        icon: "home",
        selectedIcon: "home-fill",
      }, {
        path: "/shop/index/index",
        icon: "pet",
        selectedIcon: "pet-fill",
      },{
        icon: "plus",
        isPublishBtn: true
      },{
        path: "/pages/cart/cart",
        icon: "shopping-cart",
        selectedIcon: "shopping-cart-fill",
      },{
        path: "/user/index/index",
        icon: "user",
        selectedIcon: "user-fill",
      }
      ]
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
      switchTab(e) {
        const index = e.currentTarget.dataset.index
        const el = this.data.list[index]
        const url = el.path
        if (el.isPublishBtn) {
          this.setData({
            maskState: true
          })
          this.setData({
            maskAnt: "show"
          })
        } else {
          wx.switchTab({url})
        }
      },
      onPublish() {
        // wx.navigateTo({
        //   url: "/pages/search/search"
        // })
      },
      closeMask() {
        this.setData({
          maskAnt: ""
        })
        setTimeout(()=>{
          this.setData({
            maskState: false
          })
        }, 200)
      }
    }
  })
  